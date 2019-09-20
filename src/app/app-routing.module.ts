import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticateComponent } from '../app/authenticate/authenticate.component';
import { EditPageComponent } from '../app/edit-page/edit-page.component';

const routes: Routes = [
  { path: 'authentication' , component: AuthenticateComponent},
  { path: 'edit' , component: EditPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
