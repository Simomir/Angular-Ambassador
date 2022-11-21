import { NgModule } from '@angular/core';
import { SecureComponent } from './secure.component';
import { ProfileComponent } from "./profile/profile.component";
import { SharedModule } from "../../shared/shared.module";
import { StatsComponent } from './stats/stats.component';



@NgModule({
  declarations: [
    SecureComponent,
    ProfileComponent,
    StatsComponent,
  ],
  imports: [
    SharedModule,
  ]
})
export class SecureModule { }
