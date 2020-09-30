import { Component, Input, OnChanges, SimpleChanges, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cake-solid-icon',
  template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 3C6 2.44772 6.44772 2 7 2H7.01C7.56228 2 8.01 2.44772 8.01 3C8.01 3.55228 7.56228 4 7.01 4H7C6.44772 4 6 3.55228 6 3ZM8 6C8 5.44772 7.55228 5 7 5C6.44772 5 6 5.44772 6 6V7C4.89543 7 4 7.89543 4 9V10C2.89543 10 2 10.8954 2 12V12.6833C2.36868 12.7866 2.72499 12.9482 3.0547 13.168C3.62713 13.5496 4.37287 13.5496 4.9453 13.168C6.18953 12.3385 7.81047 12.3385 9.0547 13.168C9.62713 13.5496 10.3729 13.5496 10.9453 13.168C12.1895 12.3385 13.8105 12.3385 15.0547 13.168C15.6271 13.5496 16.3729 13.5496 16.9453 13.168C17.275 12.9482 17.6313 12.7866 18 12.6833V12C18 10.8954 17.1046 10 16 10V9C16 7.89543 15.1046 7 14 7V6C14 5.44772 13.5523 5 13 5C12.4477 5 12 5.44772 12 6V7H11V6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6V7H8V6ZM18 14.8679C16.7633 15.6614 15.1714 15.6495 13.9453 14.8321C13.3729 14.4505 12.6271 14.4505 12.0547 14.8321C10.8105 15.6616 9.18953 15.6616 7.9453 14.8321C7.37287 14.4505 6.62713 14.4505 6.0547 14.8321C4.82863 15.6495 3.23675 15.6614 2 14.8679V17C2 17.5523 2.44772 18 3 18H17C17.5523 18 18 17.5523 18 17V14.8679ZM9 3C9 2.44772 9.44772 2 10 2H10.01C10.5623 2 11.01 2.44772 11.01 3C11.01 3.55228 10.5623 4 10.01 4H10C9.44772 4 9 3.55228 9 3ZM12 3C12 2.44772 12.4477 2 13 2H13.01C13.5623 2 14.01 2.44772 14.01 3C14.01 3.55228 13.5623 4 13.01 4H13C12.4477 4 12 3.55228 12 3Z" fill="currentColor"/>
</svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`svg {
    height: inherit;
    width: inherit;
    color: inherit;
  }`]
})
export class CakeSolidComponent implements OnInit, OnChanges {
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