import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'lock-closed-solid-icon',
  template: `<svg [attr.style]="style" [attr.class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0 1 10 0v2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2zm8-2v2H7V7a3 3 0 0 1 6 0z" clip-rule="evenodd"/></svg>`,
})
export class LockClosedSolidIconComponent extends BaseSolidIconComponent { }