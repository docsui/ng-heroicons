import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'external-link-outline-icon',
  template: `<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round"  d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>`,
})
export class ExternalLinkOutlineIconComponent extends BaseOutlineIconComponent { }