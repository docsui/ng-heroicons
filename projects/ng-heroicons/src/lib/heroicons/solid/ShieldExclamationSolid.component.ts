import { Component, Input, OnInit } from '@angular/core';

@Component({
selector: 'shield-exclamation-solid-icon',
template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">

<path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.94446C7.91528 3.81033 5.17437 4.95809 2.16611 4.99891C2.05686 5.64968 2 6.31821 2 7.00003C2 12.2249 5.33923 16.6698 10 18.3172C14.6608 16.6698 18 12.2249 18 7.00003C18 6.31821 17.9431 5.64968 17.8339 4.99891C14.8256 4.95809 12.0847 3.81033 10 1.94446ZM11 14C11 14.5523 10.5523 15 10 15C9.44771 15 9 14.5523 9 14C9 13.4477 9.44771 13 10 13C10.5523 13 11 13.4477 11 14ZM11 7C11 6.44772 10.5523 6 10 6C9.44771 6 9 6.44772 9 7V10C9 10.5523 9.44771 11 10 11C10.5523 11 11 10.5523 11 10V7Z" fill="currentColor"/>
</svg>
`,
})
export class ShieldExclamationSolidComponent implements OnInit {
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