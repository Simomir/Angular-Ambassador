import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicModule } from "./public/public.module";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CredentialsInterceptor } from "./interceptors/credentials.interceptor";
import { MainModule } from "./main/main.module";
import { SharedModule } from "./shared/shared.module";
import { FaIconLibrary, FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";

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
    BrowserAnimationsModule,
    SharedModule,
    FontAwesomeModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: CredentialsInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
