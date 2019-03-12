import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from '../controls/controlBase';

@Component({
  selector: 'app-control',
  templateUrl: './dynamicFormControls.component.html',
  styleUrls: ['./dynamicFormControls.component.scss']
})
export class DynamicFormControlsComponent {
  @Input() control: ControlBase<any>;
  @Input() form: FormGroup;
  get isValid() {
    return this.form.controls[this.control.key].valid;
  }
}
