import { Component, Input, OnInit } from '@angular/core';

@Component({
selector: 'badge-check-outline-icon',
template: `<svg [style]="style" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.00012 12L11.0001 14L15.0001 10M7.83486 4.69705C8.55239 4.63979 9.23358 4.35763 9.78144 3.89075C11.0599 2.80123 12.9403 2.80123 14.2188 3.89075C14.7667 4.35763 15.4478 4.63979 16.1654 4.69705C17.8398 4.83067 19.1695 6.16031 19.3031 7.83474C19.3603 8.55227 19.6425 9.23346 20.1094 9.78132C21.1989 11.0598 21.1989 12.9402 20.1094 14.2187C19.6425 14.7665 19.3603 15.4477 19.3031 16.1653C19.1695 17.8397 17.8398 19.1693 16.1654 19.303C15.4479 19.3602 14.7667 19.6424 14.2188 20.1093C12.9403 21.1988 11.0599 21.1988 9.78144 20.1093C9.23358 19.6424 8.55239 19.3602 7.83486 19.303C6.16043 19.1693 4.83079 17.8397 4.69717 16.1653C4.63991 15.4477 4.35775 14.7665 3.89087 14.2187C2.80135 12.9402 2.80135 11.0598 3.89087 9.78132C4.35775 9.23346 4.63991 8.55227 4.69717 7.83474C4.83079 6.16031 6.16043 4.83067 7.83486 4.69705Z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
})
export class BadgeCheckOutlineComponent implements OnInit {
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