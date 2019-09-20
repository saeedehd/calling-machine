import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticateComponent } from '../app/authenticate/authenticate.component';
import { EditPageComponent } from '../app/edit-page/edit-page.component';
import { SidenavComponent } from '../app/sidenav/sidenav.component';

const routes: Routes = [
  { path: '', redirectTo: '/authentication', pathMatch: 'full' },
  { path: 'authentication' , component: AuthenticateComponent},
  { path: 'edit' , component: EditPageComponent},
  { path: 'sideNav' , component: SidenavComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
