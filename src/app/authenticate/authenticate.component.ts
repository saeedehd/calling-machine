import { Component } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
<<<<<<< HEAD
=======
import { Observable } from 'rxjs';
>>>>>>> de979bdaf34574540beb9dc8e72a8ecd654d027d

import { AuthService, AuthResponseData } from '../services/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
	selector: 'app-authenticate',
	templateUrl: './authenticate.component.html',
	styleUrls: [ './authenticate.component.scss' ]
})
export class AuthenticateComponent {
	formGroup: FormGroup;

	constructor(private authService: AuthService, private snackbar: MatSnackBar) {
		this.formGroup = new FormGroup({
			username: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
			password: new FormControl('', [ Validators.required, Validators.minLength(8) ])
		});
	}

	submit() {
		if (this.formGroup.invalid) return this.snackbar.open('etelaat sahih nist', null, { duration: 999 });

		this.authService.login(this.formGroup.value).subscribe(
			(resData) => {
				console.log(resData);
			},
			(errorMessage) => {
				this.snackbar.open('noch', null, { duration: 999 });
				console.log(errorMessage);
			}
		);
	}
}
