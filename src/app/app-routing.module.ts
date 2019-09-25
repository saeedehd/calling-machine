import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticateComponent } from '../app/authenticate/authenticate.component';
import { EditPageComponent } from '../app/edit-page/edit-page.component';
import { UploadFileComponent } from '../app/upload-file/upload-file.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import * as user from 'src/app/shared/users.json';
import { LogedInGuard } from './guards/loged-in.guard';
import { DashabaordComponent } from './dashabaord/dashabaord.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{
		path: 'dashboard',
		component: DashabaordComponent,
		canActivate: [ LogedInGuard ]
	},
	{
		path: 'login',
		component: AuthenticateComponent
	},
	{
		path: 'edit',
		component: EditPageComponent,
		canActivate: [ LogedInGuard ]
	},
	{
		path: 'insert',
		component: UploadFileComponent,
		canActivate: [ LogedInGuard ]
	},
	{
		path: 'department',
		component: DepartmentsComponent,
		canActivate: [ LogedInGuard ]
	},
	{
		path: 'department/:id/edit',
		component: DepartmentDetailComponent
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
