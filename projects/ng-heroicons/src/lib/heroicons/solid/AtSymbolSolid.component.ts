import { Component, Input, OnChanges, SimpleChanges, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'at-symbol-solid-icon',
  template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2426 5.75736C11.8995 3.41421 8.10051 3.41421 5.75736 5.75736C3.41421 8.10051 3.41421 11.8995 5.75736 14.2426C7.79395 16.2792 10.9325 16.5464 13.257 15.0408C13.7205 14.7405 14.3397 14.8729 14.6399 15.3364C14.9402 15.8 14.8078 16.4191 14.3443 16.7194C11.2445 18.7273 7.0606 18.3743 4.34315 15.6569C1.21895 12.5327 1.21895 7.46734 4.34315 4.34315C7.46734 1.21895 12.5327 1.21895 15.6569 4.34315C17.2187 5.90503 18 7.9542 18 10C18 11.6569 16.6569 13 15 13C14.3247 13 13.7015 12.7769 13.2001 12.4003C12.4703 13.3717 11.3085 14 10 14C7.79086 14 6 12.2091 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10C14 10.5523 14.4477 11 15 11C15.5523 11 16 10.5523 16 10C16 8.46294 15.4144 6.9291 14.2426 5.75736ZM12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12C11.1046 12 12 11.1046 12 10Z" fill="currentColor"/>
</svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`svg {
    height: inherit;
    width: inherit;
    color: inherit;
  }`]
})
export class AtSymbolSolidComponent implements OnInit, OnChanges {
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