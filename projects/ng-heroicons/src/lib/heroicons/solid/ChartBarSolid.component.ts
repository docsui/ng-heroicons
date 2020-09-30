import { Component, Input, OnChanges, SimpleChanges, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'chart-bar-solid-icon',
  template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 11C2 10.4477 2.44772 10 3 10H5C5.55228 10 6 10.4477 6 11V16C6 16.5523 5.55228 17 5 17H3C2.44772 17 2 16.5523 2 16V11Z" fill="currentColor"/>
<path d="M8 7C8 6.44772 8.44772 6 9 6H11C11.5523 6 12 6.44772 12 7V16C12 16.5523 11.5523 17 11 17H9C8.44772 17 8 16.5523 8 16V7Z" fill="currentColor"/>
<path d="M14 4C14 3.44772 14.4477 3 15 3H17C17.5523 3 18 3.44772 18 4V16C18 16.5523 17.5523 17 17 17H15C14.4477 17 14 16.5523 14 16V4Z" fill="currentColor"/>
</svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`svg {
    height: inherit;
    width: inherit;
    color: inherit;
  }`]
})
export class ChartBarSolidComponent implements OnInit, OnChanges {
  @Input() style: string = "";
  @Input() size: number = 24;
  @Input() color: string = "";

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