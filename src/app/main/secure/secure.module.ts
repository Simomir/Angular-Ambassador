import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import { ProfileComponent } from "./profile/profile.component";
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    SecureComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class SecureModule { }
