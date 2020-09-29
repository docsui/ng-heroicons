import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'library-solid-icon',
  template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.4963 2.13176C10.1889 1.95608 9.81146 1.95608 9.50403 2.13176L2.50403 6.13176C2.02451 6.40577 1.85792 7.01662 2.13193 7.49614C2.31631 7.81881 2.65322 7.99979 3 8.00017V15C2.44772 15 2 15.4477 2 16C2 16.5523 2.44772 17 3 17H17C17.5523 17 18 16.5523 18 16C18 15.4477 17.5523 15 17 15V8.00017C17.3469 7.99991 17.684 7.81892 17.8684 7.49614C18.1424 7.01662 17.9758 6.40577 17.4963 6.13176L10.4963 2.13176ZM6 9C5.44772 9 5 9.44772 5 10V13C5 13.5523 5.44772 14 6 14C6.55228 14 7 13.5523 7 13V10C7 9.44772 6.55228 9 6 9ZM9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10V13C11 13.5523 10.5523 14 10 14C9.44772 14 9 13.5523 9 13V10ZM14 9C13.4477 9 13 9.44772 13 10V13C13 13.5523 13.4477 14 14 14C14.5523 14 15 13.5523 15 13V10C15 9.44772 14.5523 9 14 9Z" fill="currentColor"/>
</svg>
`,
})
export class LibrarySolidComponent implements OnInit {
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