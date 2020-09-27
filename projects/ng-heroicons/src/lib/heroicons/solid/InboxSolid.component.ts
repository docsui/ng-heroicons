import { Component, Input, OnInit } from '@angular/core';

@Component({
selector: 'inbox-solid-icon',
template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17H15C16.1046 17 17 16.1046 17 15V5C17 3.89543 16.1046 3 15 3H5ZM5 5L15 5V12H13L12 14H8L7 12H5V5Z" fill="currentColor"/>
</svg>
`,
})
export class InboxSolidComponent implements OnInit {
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