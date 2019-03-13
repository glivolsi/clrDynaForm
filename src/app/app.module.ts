import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicFormModule } from 'src/dynamicform/dynamicform.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ClarityModule, BrowserAnimationsModule, DynamicFormModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
