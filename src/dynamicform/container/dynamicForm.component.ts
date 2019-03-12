import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ControlBase } from '../controls/controlBase';
import { DynamicFormService } from '../dynamicForm.service';

@Component({
  selector: 'clr-dynamic-form',
  templateUrl: './dynamicForm.component.html',
  providers: [DynamicFormService]
})
export class DynamicFormComponent implements OnInit {
  @Input() controls: ControlBase<any>[] = [];
  @Input() submitClass: string;
  @Input() formClass: string;
  @Output() submitForm: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;
  payLoad = '';

  constructor(private dfs: DynamicFormService) {}

  ngOnInit() {
    this.form = this.dfs.toFormGroup(this.controls);
  }

  onSubmit() {
    //this.payLoad = JSON.stringify(this.form.value);
    this.submitForm.emit(this.form.value);
  }
}
