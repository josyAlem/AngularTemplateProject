import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http"
import { AppComponent } from './app.component';
import { AppHttpConfigInterceptor } from './app.httpconfig.interceptor';
import { AuthComponent } from './auth/auth.component';
import { ResponseListComponent } from './response-list/response-list.component';
import { AngularMaterialModule } from './angular-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    ResponseListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
