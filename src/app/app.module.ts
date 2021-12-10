import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import 'reflect-metadata';
import { AngularMaterialModule } from './angular-material.module';
import { AppData } from './app-data';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { PagesModule } from './pages/pages.module';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularMaterialModule,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(AppData, { delay: 1000 })
  ],
  providers: [
    //  { provide: HTTP_INTERCEPTORS, useClass: AppHttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
