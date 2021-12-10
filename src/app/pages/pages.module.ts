import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StudioUiTmplModule } from "studio-ui-tmpl";
import { SamplePageComponent } from './sample-page/sample-page.component';

@NgModule({
  declarations: [

    SamplePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StudioUiTmplModule,
    FormsModule,
    ReactiveFormsModule],
  exports: []

})
export class PagesModule { }
