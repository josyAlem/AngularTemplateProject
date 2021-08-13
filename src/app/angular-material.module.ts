import { NgModule } from "@angular/core";
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
imports:[
MatTableModule
],
exports:[
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
]

})
export class AngularMaterialModule{}
