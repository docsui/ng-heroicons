import { Component, Input, OnInit } from '@angular/core';

@Component({
selector: 'lock-closed-solid-icon',
template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">

<path fill-rule="evenodd" clip-rule="evenodd" d="M5 9V7C5 4.23858 7.23858 2 10 2C12.7614 2 15 4.23858 15 7V9C16.1046 9 17 9.89543 17 11V16C17 17.1046 16.1046 18 15 18H5C3.89543 18 3 17.1046 3 16V11C3 9.89543 3.89543 9 5 9ZM13 7V9H7V7C7 5.34315 8.34315 4 10 4C11.6569 4 13 5.34315 13 7Z" fill="currentColor"/>
</svg>
`,
})
export class LockClosedSolidComponent implements OnInit {
@Input() style: string = "";
@Input() size: number = 24;
@Input() color: string = "#374151";

constructor() { }

ngOnInit(): void {
  let style = [];
  if (this.size) {
    style.push(`width: ${this.size}; height: ${this.size};`);
  }
  if (this.color) {
    style.push(`color: ${this.color};`);
  }

  this.style = style.join(' ') + this.style;

}

}