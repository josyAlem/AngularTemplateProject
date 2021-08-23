import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { RenewalComponent } from './renewal/renewal-component';
import { NewBorrowerComponent } from './new-borrower/new-borrower.component';
import { AngularMaterialModule } from '../angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewBorrowerRenewalComponent } from './new-borrower-renewal/new-borrower-renewal.component';
import { FormerBorrowerComponent } from './former-borrower/former-borrower.component';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from '../shared/shared.module';

@NgModule({
declarations:[
  RenewalComponent,
  NewBorrowerComponent,
  NewBorrowerRenewalComponent,
  FormerBorrowerComponent
],
imports:[
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  AngularMaterialModule,
  SharedModule,
  FormsModule,
  ReactiveFormsModule],
exports:[],
//entryComponents: [RenewalComponent,NewBorrowerComponent]
schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]

})
export class LoanDecisionModule{}
