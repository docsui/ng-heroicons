import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'arrow-narrow-down-outline-icon',
  template: `<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round"  d="m16 17-4 4m0 0-4-4m4 4V3"/></svg>`,
})
export class ArrowNarrowDownOutlineIconComponent extends BaseOutlineIconComponent { }