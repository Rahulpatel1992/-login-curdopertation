import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';
//import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class ApiserviceService {
  URL:string = "https://booksapp-d4e48.firebaseio.com/data.json";
  headers:Headers;
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
   //console.log(this.headers)
   return this.http.post( this.URL, data ).map( res  =>
     {
      console.log(res) 
      res.json()
      console.log(res)
     }
  );
   //console.log(data);   
  }
}
