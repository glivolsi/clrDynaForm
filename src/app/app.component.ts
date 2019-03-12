import { Component } from '@angular/core';
import * as forms from './forms';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <clr-dynamic-form [controls]="controls" submitClass="btn btn-warning btn-sm" (submitForm)="handleSubmit($event)" formClass="clr-form clr-form-compact"></clr-dynamic-form>
    </div>
    <pre>
    {{ formValues | json }}
    </pre
    >
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clrdynaform';
  formValues: any = {};
  controls: any[];
  constructor() {
    this.controls = forms.testform.sort((a, b) => a.order - b.order);
  }

  handleSubmit(e: Event) {
    this.formValues = e;
  }
}
