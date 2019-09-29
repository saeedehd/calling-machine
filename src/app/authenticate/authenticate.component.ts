import { Component } from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs";


import { AuthService } from "../services/auth.service";
import { MatSnackBar } from "@angular/material";
import { Router } from '@angular/router';

@Component({
  selector: "app-authenticate",
  templateUrl: "./authenticate.component.html",
  styleUrls: ["./authenticate.component.scss"]
})
export class AuthenticateComponent {
  formGroup: FormGroup;



  constructor(
    private router: Router,
    private authService: AuthService,
    private snackbar: MatSnackBar
  ) {
    this.formGroup = new FormGroup({
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8)
      ])
    });
  }




  submit() {
    if (this.formGroup.invalid)
      return this.snackbar.open("اطلاعات صحیح نیست", null, { duration: 999 });

    this.authService.login(this.formGroup.value).subscribe(
      resData => {
        debugger;
        this.snackbar.open("ثبت نام کامل", null, { duration: 2222 });
        this.router.navigate(["/dashboard"]);
      },
      errorMessage => {
        this.snackbar.open("اطلاعات اشتباه بود", null, { duration: 999 });
        console.log(errorMessage);
      }
    );
  }
}
