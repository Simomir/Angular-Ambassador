import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
import { Emitters } from "../../../emitters/emitters";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  infoForm!: FormGroup;
  passwordForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.infoForm = this.formBuilder.group({
      first_name: '',
      last_name: '',
      email: '',
    });

    if ( Emitters.user ) {
      this.infoForm.patchValue(Emitters.user);
    }

    this.passwordForm = this.formBuilder.group({
      password: '',
      password_confirm: '',
    });

    Emitters.authEmitter.subscribe({
      next: ( user: { [key: string]: any; }) => {this.infoForm.patchValue(user);}
    })

  }

  infoSubmit(): void {
    this.authService.updateInfo(this.infoForm.getRawValue()).subscribe({
      next: user => { Emitters.authEmitter.emit(user); }
    });
  }

  passwordSubmit(): void {
    this.authService.updatePassword(this.passwordForm.getRawValue()).subscribe(user => console.log(user));
  }

}
