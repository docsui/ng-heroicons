import { Component, Input, OnChanges, SimpleChanges, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'globe-solid-icon',
  template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM4.33179 8.02741C4.70542 6.95361 5.37558 6.01864 6.24421 5.32056C6.51209 5.72966 6.97449 5.99991 7.50001 5.99991C8.32844 5.99991 9.00001 6.67148 9.00001 7.49991V7.99991C9.00001 9.10448 9.89545 9.99991 11 9.99991C12.1046 9.99991 13 9.10448 13 7.99991C13 7.05979 13.6487 6.27118 14.5228 6.05719C15.4428 7.11161 16 8.49069 16 9.99992C16 10.3407 15.9716 10.6748 15.917 11.0001H15C13.8954 11.0001 13 11.8955 13 13.0001V15.1973C12.1175 15.7078 11.0928 15.9999 9.99992 15.9999V14C9.99992 12.8954 9.10448 12 7.99992 12C6.89535 12 5.99992 11.1046 5.99992 10C5.99992 9.00849 5.27841 8.1855 4.33179 8.02741Z" fill="currentColor"/>
</svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`svg {
    height: inherit;
    width: inherit;
    color: inherit;
  }`]
})
export class GlobeSolidComponent implements OnInit, OnChanges {
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