const fs = require('fs').promises;
const path = require('path');
const dedent = require('dedent');
const camelcase = require('camelcase');
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');
const shell = require('shelljs');

const root = path.resolve(__dirname + '/..');
const projectsPath = path.resolve(`${root}/projects`);
const destHeroicons = `${projectsPath}/ng-heroicons/src/lib/heroicons`;
const here = path.resolve(`${root}/generator`);
const heroiconsPath = path.resolve(`${root}/heroicons`);
const heroiconsGitRepo = 'https://github.com/tailwindlabs/heroicons.git';
const originalHeroiconsPath = path.resolve(`${__dirname}/../heroicons`);
const TYPES = ['outline', 'solid'];
let iconTpl = "";
let iconComponentsWrapperTpl = "";

async function getIconTpl() {
  iconTpl = await fs.readFile(`${here}/icon-wrapper.tpl.txt`, 'utf8');
}

async function getComponentTpl() {
  iconComponentsWrapperTpl = await fs.readFile(`${here}/icons-list-component.tpl.txt`, 'utf8');
}

function cloneHeroicons() {
  console.log('👨‍💻  Clonning Heroicons from git');

  if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git repo');
    shell.exit(1);
  } else {
    rimraf.sync(heroiconsPath);
    shell.exec(`git clone ${heroiconsGitRepo} ${originalHeroiconsPath}`);
    shell.exec(`mv ${heroiconsPath}/src/outline ${heroiconsPath}/`);
    shell.exec(`mv ${heroiconsPath}/src/solid ${heroiconsPath}/`);
    const heroiconsFolder = require('fs').readdirSync(heroiconsPath);
    heroiconsFolder.filter(folder => !['outline', 'solid'].includes(folder)).forEach(folder => {
      rimraf.sync(path.resolve(`${heroiconsPath}/${folder}`));
    });
  }

  console.log("Heroicons repo cloned! \n");
}

async function SVGToAngular({
  selector,
  template,
  className,
  type,
}) {
  const componentTpl = await fs.readFile(`${here}/${type}-component.tpl.txt`, 'utf8');

  return componentTpl
    .replace('{{template}}', dedent(template))
    .replace('{{className}}', className)
    .replace(/stroke-width="\d+"/g, '')
    .replace(/stroke="#.*?"/g, 'stroke="currentColor"')
    .replace(/fill="#.*?"/g, 'fill="currentColor"')
    .replace(/width="\d+" height="\d+"/, '[style]="style" [ngClass]="class"')
    .replace('{{selector}}', selector);
}

function jsUcfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

async function setIconsInPlayground({ icons, type, iconTpl }) {
  const iconComponents = icons.filter(i => i).map(icon => {
    return iconTpl
      .replace(
        '{{componentIcon}}',
        `<${icon.selector} [size]="size" [color]="color" [class]="class" ${type === 'outline' ? '[stroke]="stroke"' : ""}></${icon.selector}>`
      ).replace(
        '{{iconName}}',
        icon.selector.replace(new RegExp(`${type}[^$]+$`), ' ').replace(/-/g, ' ').trim()
      ).replace(
        '{{iconId}}',
        icon.selector.replace(new RegExp(`${type}[^$]+$`), ' ').trim().replace(/^-|-$/g, '')
      );
  }).join('\n\n');

  iconComponentsWrapperTpl = iconComponentsWrapperTpl
    .replace(/\{\{type\}\}/g, jsUcfirst(type))
    .replace(/\{\{icons\}\}/g, iconComponents);

  const iconComponentsPath = `${projectsPath}/playground/src/app/icons/${type}-icons.component.html`;
  rimraf.sync(iconComponentsPath);

  return fs.writeFile(iconComponentsPath, iconComponentsWrapperTpl);
}

async function writeFiles({ files, type }) {
  const exportStatements = files
    .map(({ filename }) => {
      return `export * from './${filename.replace('.ts', '')}';`;
    })
    .join('\n')

  await fs.writeFile(
    `${projectsPath}/ng-heroicons/src/lib/heroicons/${type}/index.ts`,
    exportStatements
  );

  return files
    .map(({ className, filename, ...rest }) => {
      return {
        import: `import { ${className} } from './heroicons/${type}/${filename.replace('.ts', '')}';`,
        component: filename.replace('.ts', ''),
        className,
        filename,
        ...rest,
      };
    });
}

async function compressSVG() {
  console.log('🏗  Compress SVG files...')
  let icons = [];

  for (const typeIndex in TYPES) {
    const type = TYPES[typeIndex];
    console.log(`Compressing ${type} SVG icons ...`);

    rimraf.sync(`${destHeroicons}/${type}`);
    mkdirp.sync(`${destHeroicons}/${type}`);

    icons = icons.concat((await fs.readdir(`${heroiconsPath}/${type}`))
      // .slice(0, 5)
      .filter((filename) => !/Ds_Store/gi.test(filename))
      .map((filename) => {
        const filePath = `${heroiconsPath}/${type}/${filename}`;
        shell.exec(`svgo --config svgo.config.js ${filePath} -o ${filePath}`);

        return {
          path: filePath,
          filename,
          type
        };
      }));
  }

  console.log(`✅  SVG icons compressed`);

  return icons;
}

function getFilesData(iconFiles) {
  return iconFiles.map(({ path, filename, type }) => {
    const className = `${camelcase(filename.replace(/\.svg$/, `-${type}`), { pascalCase: true })}IconComponent`;

    return {
      className: className,
      selector: `${filename.replace(/\.svg$/, '')}-${type}-icon`,
      filename: className.replace('Component', '.component.ts'),
      type,
      path
    };
  });
}

async function getSVGContent(iconFilesData) {
  return await Promise.all(
    iconFilesData.map(async ({ path, ...all }) => ({
      template: await fs.readFile(path, 'utf8'),
      ...all,
    }))
  );
}

async function getAngularComponent(contentsIcon) {
  return await Promise.all(
    contentsIcon.map(async ({ selector, template, className, type, ...rest }) => {
      const svgToAngularData = { selector, template, className, type };
      return {
        component: await SVGToAngular(svgToAngularData),
        ...svgToAngularData,
        ...rest,
      };
    })
  );
}

async function writeFileIcons(angularComponents) {
  await Promise.all(
    angularComponents.map(({ component, filename, type }) => {
      return fs.writeFile(`${destHeroicons}/${type}/${filename}`, component);
    })
  );
}

async function generateModule(angularComponents) {
  let moduleComponents = [];
  let moduleImports = [];

  for (const typeIndex in TYPES) {
    const type = TYPES[typeIndex];
    const content = await writeFiles({
      files: angularComponents
        .filter(c => c.type === type)
        .map(({ className, filename, ...rest }) => ({
          filename,
          className,
          ...rest
        })),
      type
    });

    await setIconsInPlayground({
      icons: content.filter((c) => c.type === type),
      type,
      iconTpl
    });

    moduleComponents = moduleComponents.concat(
      content.map((c) => (c.className))
    );
    moduleImports = moduleImports.concat(
      content.map((c) => (
        `import { ${c.className} } from './heroicons/${type}/${c.filename.replace('.ts', '')}';`
      ))
    );
  }

  await fs.readFile(`${here}/ng-heroicons.module.tpl.txt`, 'utf8')
    .then(file => {
      return file
        .replace('{{componentsImports}}', moduleImports.join('\n'))
        .replace(/\{\{components\}\}/g, moduleComponents.join(',\n'));
    }).then(content => {
      return fs.writeFile(`${projectsPath}/ng-heroicons/src/lib/ng-heroicons.module.ts`, content);
    });
}

async function run() {
  await getIconTpl();
  await getComponentTpl();

  cloneHeroicons();

  const iconFiles = await compressSVG();

  const iconFilesData = getFilesData(iconFiles);

  const contentsIcon = await getSVGContent(iconFilesData);

  const angularComponents = await getAngularComponent(contentsIcon);

  await writeFileIcons(angularComponents);

  await generateModule(angularComponents);

  rimraf.sync(originalHeroiconsPath);

  return;
}

run();