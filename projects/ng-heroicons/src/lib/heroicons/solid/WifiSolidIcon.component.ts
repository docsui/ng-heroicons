import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'wifi-solid-icon',
  template: `<svg [style]="style" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 0 1 .808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 0 1-1.414 1.414zM14.95 11.05a7 7 0 0 0-9.9 0 1 1 0 0 1-1.414-1.414 9 9 0 0 1 12.728 0 1 1 0 0 1-1.414 1.414zm-2.83 2.83a3 3 0 0 0-4.242 0 1 1 0 0 1-1.415-1.415 5 5 0 0 1 7.072 0 1 1 0 0 1-1.415 1.415zM9 16a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1z" clip-rule="evenodd"/></svg>`,
})
export class WifiSolidIconComponent extends BaseSolidIconComponent { }