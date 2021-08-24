import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from "../angular-material.module";
import { SharedModule } from "../shared/shared.module";
import { SamplePageComponent } from './sample-page/sample-page.component';

@NgModule({
declarations:[

    SamplePageComponent
  ],
imports:[
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  AngularMaterialModule,
  SharedModule,
  FormsModule,
  ReactiveFormsModule],
exports:[]

})
export class PagesModule{}
