import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ApiserviceService } from './apiservice.service'


import { Http } from '@angular/http';

@Injectable()
export class BookService {
    // id:number;
	// private sub:any;
	
	URL:string = "https://fakeserver-846ac.firebaseio.com/";
	constructor(
		private apiserviceService:ApiserviceService,
		private router:Router,
		private http:Http,
		private route:ActivatedRoute
	){
		
	}
	getBooks(): Promise<Book[]> {
        return Promise.resolve(BOOKS);
	}
	/*
		addBook(data:any){
			console.log(data)
			this.http.post(this.URL, data).map( (response) => response.json() );
		}
	*/
	getMe(){
		return this.http.get(this.URL+'data.json').map((response)=>response.json());
	}
	fetch(){
		// this.route.params.subscribe( params => {
        //     this.id = +params['id'];
        //     console.log(this.id)
        // })
	}
}
