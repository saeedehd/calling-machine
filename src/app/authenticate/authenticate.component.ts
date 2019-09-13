import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService, AuthResponseData } from './auth.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent {
  error: string = null;

  constructor(private authService: AuthService) { }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const username = form.value.uname;
    const password = form.value.psw;
    // tslint:disable-next-line: prefer-const
    let authObs: Observable<AuthResponseData>;

    authObs = this.authService.login(username, password);
    authObs.subscribe(
      resData => {
        console.log(resData);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
      }
    );
    form.reset();
  }

}
