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
  MatTableModule,
  MatMenuModule,
  MatSelectModule,
  MatBottomSheetModule
} from '@angular/material';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';

import { UploadFileComponent } from './upload-file/upload-file.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DashabaordComponent } from './dashabaord/dashabaord.component';
import { LogedInGuard } from './guards/loged-in.guard';
import { Uploadfile } from './services/upload.service';
import { MenubarComponent } from './menubar/menubar.component';
export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({

	declarations: [ AppComponent, AuthenticateComponent,  SidenavComponent, UploadFileComponent, DepartmentDetailComponent, DepartmentsComponent, DashabaordComponent, MenubarComponent ],
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
		MatTableModule,
		MatInputModule,
		MatFormFieldModule,
		MatListModule,
		FlexLayoutModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatSelectModule,
    MatBottomSheetModule,
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
	],
	providers: [LogedInGuard, Uploadfile],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
