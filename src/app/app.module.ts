import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { PageNotFoundComponent }  from './page-not-found.component';
import { HomeComponent }  from './home/home.component';
import { ViewDetailComponent }  from './home/view-detail.component';
import { AddBookComponent }  from './add-book/add-book.component';
import { UpdateBookComponent }  from './manage-book/update-book.component';
import { ManageBookComponent }  from './manage-book/manage-book.component';
import { BookService } from './services/book.service';
import { AppRoutingModule }  from './app-routing.module';
import {ProductFilterPipe} from './customefilter';
import { LoginFormComponent } from './login-form/login-form.component'
import { AuthGuard } from './services/user.service';
// import { AuthguardGuard } from './authguard.guard';
import { HeaderComponent } from './header/header.component';
import {ApiserviceService} from './services/apiservice.service'



@NgModule({
  declarations: [
		AppComponent, 
		PageNotFoundComponent,
		HomeComponent,
		ViewDetailComponent,
		AddBookComponent,
		ManageBookComponent,
		UpdateBookComponent,
		ProductFilterPipe,
		LoginFormComponent,
		HeaderComponent,
		
 	],
	
  imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		HttpModule,
  ],
  providers: [BookService, ApiserviceService, AuthGuard, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
