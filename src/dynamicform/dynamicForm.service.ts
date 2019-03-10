import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ControlBase } from '../dynamicform/controls/controlBase';

@Injectable()
export class DynamicFormService {
    constructor() { }

    toFormGroup(questions: ControlBase<any>[]) {
        let group: any = {};

        questions.forEach(question => {
            group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                : new FormControl(question.value || '');
        });
        return new FormGroup(group);
    }
}