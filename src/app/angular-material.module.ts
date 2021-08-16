import { NgModule } from "@angular/core";
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
imports:[
MatTableModule,
MatFormFieldModule,
MatInputModule,
MatButtonModule,
MatToolbarModule,

],
exports:[
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
MatToolbarModule,

]

})
export class AngularMaterialModule{}
