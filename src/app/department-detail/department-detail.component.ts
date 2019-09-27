import {Component} from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.scss']
})
export class DepartmentDetailComponent  {
  formGroup: FormGroup;
	constructor(private authService: AuthService, private snackbar: MatSnackBar) {
		this.formGroup = new FormGroup({
      id: new FormControl({value: '', disabled: true}, [ Validators.required]),
      enable: new FormControl('1', [Validators.required]),
      priority: new FormControl('', [ Validators.required]),
      department: new FormControl('', [ Validators.required]),
      start_working_time: new FormControl(''),
      end_working_time: new FormControl(''),
      nwd_table_id: new FormControl({value: '', disabled: true}),
      dialplan_context: new FormControl(''),
      queue: new FormControl(''),
      url_id: new FormControl(''),
      call_more: new FormControl(''),
      retry_time: new FormControl(''),
		});
	}
  edit() {
		if (this.formGroup.invalid) return this.snackbar.open('اطلاعات صحیح نیست', null, { duration: 999 });

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
