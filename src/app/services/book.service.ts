import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ApiserviceService } from './apiservice.service'

import { Http } from '@angular/http';

declare var firebase: any;
@Injectable()
export class BookService {
	URL:string = "https://fakeserver-846ac.firebaseio.com/";
	constructor(
		private apiserviceService:ApiserviceService,
		private router:Router,
		private http:Http,
		private route:ActivatedRoute
	){ }
	getMe(){
		return this.http.get( this.URL+'data.json' ).map( (response) => response.json() );
	} del(data:any){
		return this.http.delete( this.URL+'data.json', data ).map( response => console.log(response) )
		//.map( (response) => console.log(response.json()) );
	} save(){
		// var rootURL = firebase.database().ref('/data')
    	// rootURL.on("value", snapshot => snapshot.forEach( child => child.key ) )
	}
}
