import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'minus-outline-icon',
  template: `<svg [style]="style" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M20 12H4"/></svg>`,
})
export class MinusOutlineIconComponent extends BaseOutlineIconComponent { }