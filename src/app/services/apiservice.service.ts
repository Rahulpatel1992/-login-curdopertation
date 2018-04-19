import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ApiserviceService {
  URL : string = "https://booksapp-d4e48.firebaseio.com/data.json";
  headers: Headers;

  constructor(private http: Http, private router:Router) { 
    this.headers =  new Headers();
  }

  

  // getBook(){
  //   return this.http.get( this.URL, {headers:this.headers}).map( response => response.json() );
  // }

  AddBook( data:any ){
    let temp = JSON.stringify(data);
    return this.http.post( this.URL, temp, {headers: this.headers } ).map( response => response.json() );
  }

}
