import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RenewalComponent } from "./loanDecision/renewal/renewal-component";
import { NewBorrowerComponent } from './loanDecision/new-borrower/new-borrower.component';
import { NewBorrowerRenewalComponent } from './loanDecision/new-borrower-renewal/new-borrower-renewal.component';
import { FormerBorrowerComponent } from './loanDecision/former-borrower/former-borrower.component';

const routes:Routes=[
  {path:"renewal",component:RenewalComponent},
  {path:"newBorrowerRenewal",component:NewBorrowerRenewalComponent},
  {path:"newBorrower",component:NewBorrowerComponent},
  {path:"formerBorrower",component:FormerBorrowerComponent},
  {path:"",component:RenewalComponent,pathMatch:"full"},
]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
