import { Component, Input, OnChanges, SimpleChanges, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wifi-solid-icon',
  template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.7781 8.22183C13.4823 3.92606 6.51752 3.92606 2.22176 8.22183C1.83123 8.61235 1.19807 8.61235 0.807542 8.22183C0.417017 7.8313 0.417017 7.19814 0.807542 6.80761C5.88436 1.7308 14.1155 1.7308 19.1923 6.80761C19.5828 7.19814 19.5828 7.8313 19.1923 8.22183C18.8018 8.61235 18.1686 8.61235 17.7781 8.22183ZM14.9497 11.0503C12.216 8.31659 7.78385 8.31659 5.05018 11.0503C4.65966 11.4408 4.02649 11.4408 3.63597 11.0503C3.24544 10.6597 3.24544 10.0266 3.63597 9.63605C7.15069 6.12133 12.8492 6.12133 16.3639 9.63605C16.7544 10.0266 16.7544 10.6597 16.3639 11.0503C15.9734 11.4408 15.3402 11.4408 14.9497 11.0503ZM12.1213 13.8787C10.9497 12.7071 9.05018 12.7071 7.87861 13.8787C7.48809 14.2692 6.85492 14.2692 6.4644 13.8787C6.07387 13.4882 6.07387 12.855 6.4644 12.4645C8.41702 10.5119 11.5828 10.5119 13.5355 12.4645C13.926 12.855 13.926 13.4882 13.5355 13.8787C13.1449 14.2692 12.5118 14.2692 12.1213 13.8787ZM8.99993 16C8.99993 15.4477 9.44765 15 9.99993 15H10.0099C10.5622 15 11.0099 15.4477 11.0099 16C11.0099 16.5523 10.5622 17 10.0099 17H9.99993C9.44765 17 8.99993 16.5523 8.99993 16Z" fill="currentColor"/>
</svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`svg {
    height: inherit;
    width: inherit;
    color: inherit;
  }`]
})
export class WifiSolidComponent implements OnInit, OnChanges {
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