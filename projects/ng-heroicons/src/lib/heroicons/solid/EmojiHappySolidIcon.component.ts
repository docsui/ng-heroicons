import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'emoji-happy-solid-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM7 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-.464 5.535a1 1 0 1 0-1.415-1.414 3 3 0 0 1-4.242 0 1 1 0 0 0-1.415 1.414 5 5 0 0 0 7.072 0z" fill="currentColor"/></svg>`,
})
export class EmojiHappySolidIconComponent extends BaseSolidIconComponent { }