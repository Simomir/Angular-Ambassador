import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicModule } from "./public/public.module";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CredentialsInterceptor } from "./interceptors/credentials.interceptor";
import { MainModule } from "./main/main.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    HttpClientModule,
    MainModule,
    FontAwesomeModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: CredentialsInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
