import { Component, Input, OnInit } from '@angular/core';

@Component({
selector: 'cube-transparent-outline-icon',
template: `<svg [style]="style" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 10L12 11M12 11L10 10M12 11V13.5M20 7L18 8M20 7L18 6M20 7V9.5M14 4L12 3L10 4M4 7L6 6M4 7L6 8M4 7V9.5M12 21L10 20M12 21L14 20M12 21V18.5M6 18L4 17V14.5M18 18L20 17V14.5" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
})
export class CubeTransparentOutlineComponent implements OnInit {
@Input() style: string = "";
@Input() size: number = 24;
@Input() stroke: number|string = 1;
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
  if (this.stroke) {
    style.push(`stroke-width: ${this.stroke}px;`);
  }

  this.style = style.join(' ') + this.style;

}

}