import { Component } from '@angular/core';
import * as forms from './forms'

@Component({
  selector: 'app-root',
  template: `
    <clr-dynamic-form [controls]="controls"></clr-dynamic-form>
  `,
  styles: []
})
export class AppComponent {
  title = 'clrdynaform';
  controls: any[]
  constructor() {
    this.controls = forms.testform
  }
}
