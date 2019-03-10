import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { DynamicFormComponent } from './container/dynamicForm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormControlsComponent } from './container/dynamicFormControls.component';
import { ClarityModule } from '@clr/angular';

@NgModule({
    imports: [BrowserModule, ClarityModule, FormsModule, ReactiveFormsModule],
    exports: [DynamicFormComponent],
    declarations: [DynamicFormComponent, DynamicFormControlsComponent],
    providers: [],
})
export class DynamicFormModule { }
