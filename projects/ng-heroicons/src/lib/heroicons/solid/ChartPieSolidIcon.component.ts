import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'chart-pie-solid-icon',
  template: `<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M2 10a8 8 0 0 1 8-8v8h8a8 8 0 1 1-16 0z"/><path d="M12 2.252A8.014 8.014 0 0 1 17.748 8H12V2.252z"/></svg>`,
})
export class ChartPieSolidIconComponent extends BaseSolidIconComponent { }