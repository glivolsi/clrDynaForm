import { Component } from '@angular/core';
import * as forms from './forms'

@Component({
  selector: 'app-root',
  template: `
  <div class="app">
    <clr-dynamic-form [controls]="controls" submitClass="btn btn-warning btn-sm"></clr-dynamic-form>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clrdynaform';
  controls: any[]
  constructor() {
    this.controls = forms.testform.sort((a, b) => a.order - b.order)
  }
}
