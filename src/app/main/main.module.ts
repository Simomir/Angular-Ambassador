import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [
    MainComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class MainModule { }
