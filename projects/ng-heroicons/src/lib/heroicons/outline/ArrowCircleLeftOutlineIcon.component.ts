import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'arrow-circle-left-outline-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m11 15-3-3m0 0 3-3m-3 3h8M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/></svg>`,
})
export class ArrowCircleLeftOutlineIconComponent extends BaseOutlineIconComponent { }