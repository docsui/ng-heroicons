import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'document-text-solid-icon',
  template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 4C4 2.89543 4.89543 2 6 2H10.5858C11.1162 2 11.6249 2.21071 12 2.58579L15.4142 6C15.7893 6.37507 16 6.88378 16 7.41421V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4ZM6 10C6 9.44772 6.44772 9 7 9H13C13.5523 9 14 9.44772 14 10C14 10.5523 13.5523 11 13 11H7C6.44772 11 6 10.5523 6 10ZM7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44772 15 7 15H13C13.5523 15 14 14.5523 14 14C14 13.4477 13.5523 13 13 13H7Z" fill="currentColor"/>
</svg>
`,
})
export class DocumentTextSolidComponent implements OnInit {
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