import { Component, Input, OnInit } from '@angular/core';

@Component({
selector: 'scale-outline-icon',
template: `<svg [style]="style" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6L6 7M6 7L3 16C4.77253 17.3334 7.22866 17.3334 9.00119 16M6 7L9.00006 16M6 7L12 5M18 7L21 6M18 7L15 16C16.7725 17.3334 19.2287 17.3334 21.0012 16M18 7L21.0001 16M18 7L12 5M12 3V5M12 21V5M12 21H9M12 21H15" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
})
export class ScaleOutlineComponent implements OnInit {
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