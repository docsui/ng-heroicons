import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'qrcode-outline-icon',
  template: `<svg [style]="style" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4V5M18 16H20M14 16H12V20M12 9V12M12 12H12.01M12 12H16.01M16 20H20M4 12H8M20 12H20.01M5 8H7C7.55228 8 8 7.55228 8 7V5C8 4.44772 7.55228 4 7 4H5C4.44772 4 4 4.44772 4 5V7C4 7.55228 4.44772 8 5 8ZM17 8H19C19.5523 8 20 7.55228 20 7V5C20 4.44772 19.5523 4 19 4H17C16.4477 4 16 4.44772 16 5V7C16 7.55228 16.4477 8 17 8ZM5 20H7C7.55228 20 8 19.5523 8 19V17C8 16.4477 7.55228 16 7 16H5C4.44772 16 4 16.4477 4 17V19C4 19.5523 4.44772 20 5 20Z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
})
export class QrcodeOutlineComponent implements OnInit, OnChanges {
  @Input() style: string = "";
  @Input() size: number = 24;
  @Input() stroke: number|string = 1;
  @Input() color: string = "#374151";

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    const colorHasChanged = changes.color?.previousValue !== changes.color?.currentValue;
    const sizeHasChanged = changes.size?.previousValue !== changes.size?.currentValue;
    const strokeHasChanged = changes.stroke?.previousValue !== changes.stroke?.currentValue;
    if (colorHasChanged || sizeHasChanged || strokeHasChanged) {
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
    if (this.stroke) {
      style.push(`stroke-width: ${this.stroke}px;`);
    }

    this.style = style.join(' ') + this.style;
  }
}