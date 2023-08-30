import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginStepOneComponent } from './components/login-step-one/login-step-one.component';
import { StepperComponent } from './components/stepper/stepper.component';
import {  HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, LoginStepOneComponent, StepperComponent],
  imports: [BrowserModule,HttpClientModule,ReactiveFormsModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
