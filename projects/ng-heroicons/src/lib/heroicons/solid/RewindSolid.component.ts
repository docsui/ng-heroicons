import { Component, Input, OnInit } from '@angular/core';

@Component({
selector: 'rewind-solid-icon',
template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.4453 14.8321C8.75216 15.0366 9.1467 15.0557 9.47186 14.8817C9.79701 14.7077 10 14.3688 10 14L10 11.2019L15.4453 14.8321C15.7522 15.0366 16.1467 15.0557 16.4719 14.8817C16.797 14.7077 17 14.3688 17 14V6C17 5.63121 16.797 5.29235 16.4719 5.11833C16.1467 4.94431 15.7522 4.96338 15.4453 5.16795L10 8.79815V6C10 5.63121 9.79702 5.29235 9.47186 5.11833C9.1467 4.94431 8.75216 4.96338 8.4453 5.16795L2.4453 9.16795C2.1671 9.35342 2 9.66565 2 10C2 10.3344 2.1671 10.6466 2.4453 10.8321L8.4453 14.8321Z" fill="currentColor"/>
</svg>
`,
})
export class RewindSolidComponent implements OnInit {
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