import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ControlBase } from '../dynamicform/controls/controlBase';

@Injectable()
export class DynamicFormService {
  constructor() {}

  toFormGroup(controls: ControlBase<any>[]) {
    let group: any = {};

    controls.forEach(control => {
      // group[control.key] = control.required ? new FormControl(control.value || '', Validators.required)
      //     : new FormControl(control.value || '');
      group[control.key] = new FormControl(control.value || '', control.validators);
    });
    return new FormGroup(group);
  }
}
