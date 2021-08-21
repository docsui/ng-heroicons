import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'arrow-narrow-down-solid-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.707 12.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L9 14.586V3a1 1 0 0 1 2 0v11.586l2.293-2.293a1 1 0 0 1 1.414 0z" fill="currentColor"/></svg>`,
})
export class ArrowNarrowDownSolidIconComponent extends BaseSolidIconComponent { }