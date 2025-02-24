import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'scale-solid-icon',
  template: `<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10 2a1 1 0 0 1 1 1v1.323l3.954 1.582 1.599-.8a1 1 0 0 1 .894 1.79l-1.233.616 1.738 5.42a1 1 0 0 1-.285 1.05A3.989 3.989 0 0 1 15 15a3.989 3.989 0 0 1-2.667-1.019 1 1 0 0 1-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 0 1-.285 1.05A3.989 3.989 0 0 1 5 15a3.989 3.989 0 0 1-2.667-1.019 1 1 0 0 1-.285-1.05l1.738-5.42-1.233-.617a1 1 0 0 1 .894-1.788l1.599.799L9 4.323V3a1 1 0 0 1 1-1zm-5 8.274-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z" clip-rule="evenodd"/></svg>`,
})
export class ScaleSolidIconComponent extends BaseSolidIconComponent { }