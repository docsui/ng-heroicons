import { Component, Input, OnInit } from '@angular/core';

@Component({
selector: 'emoji-sad-solid-icon',
template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM7 9C7.55228 9 8 8.55228 8 8C8 7.44772 7.55228 7 7 7C6.44772 7 6 7.44772 6 8C6 8.55228 6.44772 9 7 9ZM14 8C14 8.55228 13.5523 9 13 9C12.4477 9 12 8.55228 12 8C12 7.44772 12.4477 7 13 7C13.5523 7 14 7.44772 14 8ZM6.46447 13.8785C6.85499 14.269 7.48816 14.269 7.87868 13.8785C9.05025 12.7069 10.9497 12.7069 12.1213 13.8785C12.5118 14.269 13.145 14.269 13.5355 13.8785C13.9261 13.4879 13.9261 12.8548 13.5355 12.4642C11.5829 10.5116 8.41709 10.5116 6.46447 12.4642C6.07394 12.8548 6.07394 13.4879 6.46447 13.8785Z" fill="currentColor"/>
</svg>
`,
})
export class EmojiSadSolidComponent implements OnInit {
@Input() style: string = "";
@Input() size: number = 24;
@Input() color: string = "#374151";

constructor() { }

ngOnInit(): void {
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