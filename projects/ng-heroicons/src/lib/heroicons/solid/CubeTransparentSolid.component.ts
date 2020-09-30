import { Component, Input, OnChanges, SimpleChanges, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cube-transparent-solid-icon',
  template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.50386 1.13176C9.81129 0.956081 10.1887 0.956081 10.4961 1.13176L12.2461 2.13176C12.7257 2.40577 12.8923 3.01662 12.6182 3.49614C12.3442 3.97566 11.7334 4.14225 11.2539 3.86824L10 3.15175L8.74614 3.86824C8.26662 4.14225 7.65577 3.97566 7.38176 3.49614C7.10775 3.01662 7.27434 2.40577 7.75386 2.13176L9.50386 1.13176ZM5.61824 4.50386C5.89225 4.98338 5.72566 5.59423 5.24614 5.86824L5.01556 6L5.24614 6.13176C5.72566 6.40577 5.89225 7.01662 5.61824 7.49614C5.34423 7.97566 4.73338 8.14225 4.25386 7.86824L4 7.72318V8C4 8.55228 3.55228 9 3 9C2.44772 9 2 8.55228 2 8V6C2 5.75001 2.09173 5.52145 2.24336 5.34614C2.27802 5.30603 2.31598 5.26854 2.35699 5.23411C2.40754 5.19163 2.46236 5.15405 2.52071 5.12213L4.25386 4.13176C4.73338 3.85775 5.34423 4.02434 5.61824 4.50386ZM14.3818 4.50386C14.6558 4.02434 15.2666 3.85775 15.7461 4.13176L17.4793 5.12212C17.5376 5.15405 17.5925 5.19162 17.643 5.23411C17.8613 5.41755 18 5.69258 18 6V8C18 8.55228 17.5523 9 17 9C16.4477 9 16 8.55228 16 8V7.72318L15.7461 7.86824C15.2666 8.14225 14.6558 7.97566 14.3818 7.49614C14.1077 7.01662 14.2743 6.40577 14.7539 6.13176L14.9844 6L14.7539 5.86824C14.2743 5.59423 14.1077 4.98338 14.3818 4.50386ZM7.38176 8.50386C7.65577 8.02434 8.26662 7.85775 8.74614 8.13176L10 8.84825L11.2539 8.13176C11.7334 7.85775 12.3442 8.02434 12.6182 8.50386C12.8923 8.98338 12.7257 9.59423 12.2461 9.86824L11 10.5803V12C11 12.5523 10.5523 13 10 13C9.44772 13 9 12.5523 9 12V10.5803L7.75386 9.86824C7.27434 9.59423 7.10775 8.98338 7.38176 8.50386ZM3 11C3.55228 11 4 11.4477 4 12V13.4197L5.24614 14.1318C5.72566 14.4058 5.89225 15.0166 5.61824 15.4961C5.34423 15.9757 4.73338 16.1423 4.25386 15.8682L2.50386 14.8682C2.19229 14.6902 2 14.3589 2 14V12C2 11.4477 2.44772 11 3 11ZM17 11C17.5523 11 18 11.4477 18 12V14C18 14.3589 17.8077 14.6902 17.4961 14.8682L15.7461 15.8682C15.2666 16.1423 14.6558 15.9757 14.3818 15.4961C14.1077 15.0166 14.2743 14.4058 14.7539 14.1318L16 13.4197V12C16 11.4477 16.4477 11 17 11ZM7.38176 16.5039C7.65577 16.0243 8.26662 15.8577 8.74614 16.1318L9 16.2768V16C9 15.4477 9.44772 15 10 15C10.5523 15 11 15.4477 11 16V16.2768L11.2539 16.1318C11.7334 15.8577 12.3442 16.0243 12.6182 16.5039C12.8923 16.9834 12.7257 17.5942 12.2461 17.8682L10.5113 18.8596C10.3617 18.9488 10.1868 19 10 19C9.81316 19 9.63828 18.9488 9.48866 18.8596L7.75386 17.8682C7.27434 17.5942 7.10775 16.9834 7.38176 16.5039Z" fill="currentColor"/>
</svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`svg {
    height: inherit;
    width: inherit;
    color: inherit;
  }`]
})
export class CubeTransparentSolidComponent implements OnInit, OnChanges {
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