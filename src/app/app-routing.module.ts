import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent }  from './page-not-found.component';
import { HomeComponent }  from './home/home.component';
import { ViewDetailComponent }  from './home/view-detail.component';
import { AddBookComponent }  from './add-book/add-book.component';
import { UpdateBookComponent }  from './manage-book/update-book.component';
import { ManageBookComponent }  from './manage-book/manage-book.component';
import { LoginFormComponent } from './login-form/login-form.component';
// import {AuthguardGuard} from './authguard.guard'
import { AuthGuard } from './services/user.service';

const routes: Routes = [
	// { path: '', redirectTo: '/login', pathMatch: 'full' },
	
	// { path: 'logout', component: LogoutComponent},
	{ path: 'home', component: HomeComponent,canActivate: [ AuthGuard]},
	{ path: 'view-detail/:id',  component: ViewDetailComponent,canActivate: [ AuthGuard] },		  
	{ path: 'add-book',   component: AddBookComponent, canActivate: [ AuthGuard] },
	{ path: 'manage-book',  component: ManageBookComponent,canActivate: [ AuthGuard] },
	{ path: 'update-book/:id',   component: UpdateBookComponent,canActivate: [ AuthGuard] },   
	{ path: 'login', component: LoginFormComponent },
	{ path: '**', component: LoginFormComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule{ }
