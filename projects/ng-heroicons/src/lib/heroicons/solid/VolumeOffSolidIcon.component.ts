import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'volume-off-solid-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.383 3.076A1 1 0 0 1 10 4v12a1 1 0 0 1-1.707.707L4.586 13H2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2.586l3.707-3.707a1 1 0 0 1 1.09-.217zM12.293 7.293a1 1 0 0 1 1.414 0L15 8.586l1.293-1.293a1 1 0 1 1 1.414 1.414L16.414 10l1.293 1.293a1 1 0 0 1-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 0 1 0-1.414z" fill="currentColor"/></svg>`,
})
export class VolumeOffSolidIconComponent extends BaseSolidIconComponent { }