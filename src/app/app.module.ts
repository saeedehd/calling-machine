import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	MatSidenavModule,
	MatCheckboxModule,
	MatIconModule,
	MatToolbarModule,
	MatListModule,
	MatSnackBarModule,
	MatButtonModule,
	MatCardModule,
	MatFormFieldModule,
	MatInputModule,
	MatTableModule

} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentsComponent } from './departments/departments.component';

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
	declarations: [ AppComponent, AuthenticateComponent, EditPageComponent, SidenavComponent, UploadFileComponent, DepartmentDetailComponent, DepartmentsComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatSidenavModule,
		MatCheckboxModule,
		MatSnackBarModule,
		MatIconModule,
		MatCardModule,
		MatButtonModule,
		MatToolbarModule,
		MatInputModule,
		MatFormFieldModule,
		MatListModule,
		FlexLayoutModule,
		ReactiveFormsModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [ HttpClient ]
			}
		}),
		FormsModule,
		FileUploadModule,
		Ng2SmartTableModule,
		CdkTableModule,
		MatTableModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
