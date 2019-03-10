import { Component, Input, OnInit } from '@angular/core';
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
    form: FormGroup;
    payLoad = '';

    constructor(private dfs: DynamicFormService) { }

    ngOnInit() {
        this.form = this.dfs.toFormGroup(this.controls);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }
}



