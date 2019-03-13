import { Component } from '@angular/core';
import * as forms from './forms';
import { TextboxControl } from 'src/dynamicform/controls/control-textbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clrdynaform';
  formValues: any = {};
  controls: any[];
  opened: boolean = false;

  constructor() {
    this.controls = [...forms.testform.sort((a, b) => a.order - b.order)];
  }

  handleSubmit(e: Event) {
    this.opened = false;
    this.formValues = e;
  }

  handleClick(e: Event) {
    this.opened = true;
  }
}
