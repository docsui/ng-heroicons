import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'identification-solid-icon',
  template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C9.44772 2 9 2.44772 9 3V4C9 4.55228 9.44772 5 10 5C10.5523 5 11 4.55228 11 4V3C11 2.44772 10.5523 2 10 2ZM4 4H7C7 5.65685 8.34315 7 10 7C11.6569 7 13 5.65685 13 4H16C17.1046 4 18 4.89543 18 6V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V6C2 4.89543 2.89543 4 4 4ZM6.5 11C7.32843 11 8 10.3284 8 9.5C8 8.67157 7.32843 8 6.5 8C5.67157 8 5 8.67157 5 9.5C5 10.3284 5.67157 11 6.5 11ZM8.95048 15C8.98327 14.8384 9.00049 14.6712 9.00049 14.5C9.00049 13.1193 7.8812 12 6.50049 12C5.11978 12 4.00049 13.1193 4.00049 14.5C4.00049 14.6712 4.0177 14.8384 4.0505 15H8.95048ZM12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11H15C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9H12ZM11 13C11 12.4477 11.4477 12 12 12H14C14.5523 12 15 12.4477 15 13C15 13.5523 14.5523 14 14 14H12C11.4477 14 11 13.5523 11 13Z" fill="currentColor"/>
</svg>
`,
})
export class IdentificationSolidComponent implements OnInit {
  @Input() style: string = "";
  @Input() size: number = 24;
  @Input() color: string = "#374151";

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    const colorHasChanged = changes.color?.previousValue !== changes.color?.currentValue;
    const sizeHasChanged = changes.size?.previousValue !== changes.size?.currentValue;
    if (colorHasChanged || sizeHasChanged) {
      this.style = "";
      this.renderStyle();
    }
  }

  ngOnInit(): void {
    this.renderStyle();
  }

  renderStyle() {
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