import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { HeaderComponent } from './header/header.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { EditPageComponent } from './edit-page/edit-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticateComponent,
    HeaderComponent,
    EditListComponent,
    EditPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
