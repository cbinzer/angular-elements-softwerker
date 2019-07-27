import { Component } from '@angular/core';

@Component({
  selector: 'cc-hello-world',
  template: '<span>Hello, codecentric!</span>',
  styles: [
    `
      span {
        font-weight: bold;
        font-size: 30px;
      }
    `
  ]
})
export class HelloWorldComponent {}
