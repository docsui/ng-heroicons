import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'speakerphone-solid-icon',
  template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 3C18 2.65342 17.8205 2.33156 17.5257 2.14935C17.2309 1.96714 16.8628 1.95058 16.5528 2.10557L8.76393 6H5C3.34315 6 2 7.34315 2 9C2 10.6569 3.34315 12 5 12H5.27925L7.05132 17.3162C7.18744 17.7246 7.56958 18 8.00001 18H9.00001C9.55229 18 10 17.5523 10 17V12.618L16.5528 15.8944C16.8628 16.0494 17.2309 16.0329 17.5257 15.8507C17.8205 15.6684 18 15.3466 18 15V3Z" fill="currentColor"/>
</svg>
`,
})
export class SpeakerphoneSolidComponent implements OnInit {
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