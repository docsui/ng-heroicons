import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'flag-solid-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6a3 3 0 0 1 3-3h10a1 1 0 0 1 .8 1.6L14.25 8l2.55 3.4A1 1 0 0 1 16 13H6a1 1 0 0 0-1 1v3a1 1 0 1 1-2 0V6z" fill="currentColor"/></svg>`,
})
export class FlagSolidIconComponent extends BaseSolidIconComponent { }