import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';
//import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class ApiserviceService {
  URL:string = "https://booksapp-d4e48.firebaseio.com/.json";
  //headers:Headers;
  name:any;
  price:any;
  description:any;

  
  constructor(private http: Http, private router:Router) { 
    // const httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    // };
    //this.headers =  new Headers();
  }

  AddBook( data:any ){ 
   //console.log(data)
   return this.http.post( this.URL, data ).map( response  =>
     {
      console.log(response) 
      response.json()
      console.log(response)
     }
  );
   //console.log(data);   
  }
}
