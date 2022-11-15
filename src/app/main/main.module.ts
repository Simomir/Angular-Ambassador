import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { NavComponent } from './nav/nav.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    MainComponent,
    NavComponent
  ],
  imports: [
    SharedModule,
  ]
})
export class MainModule { }
