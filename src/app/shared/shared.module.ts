import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import{ TmplFormComponent} from './form/tmpl-form'
import { AngularMaterialModule } from '../angular-material.module';
import { SharedFilterPipe } from "./pipes/shared-filter.pipe";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AngularMaterialModule
    ],
    declarations: [
        TmplFormComponent,
        SharedFilterPipe],
    exports: [
        TmplFormComponent
    ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SharedModule {


}
