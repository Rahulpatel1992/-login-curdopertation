import { Injectable } from '@angular/core';
import { Book } from './book';
//import { BOOKS } from './mock-books';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from './apiservice.service'


import { Http } from '@angular/http';

@Injectable()
export class BookService {
	// URL:string = "https://booksapp-d4e48.firebaseio.com/data.json";
	// headers: Headers;
	constructor( private apiserviceService: ApiserviceService , private router: Router, private http:Http ) { }
	
	
	
	fetchData() {
		return this.http.get("https://fakeserver-846ac.firebaseio.com/.json").map( (response) => response.json() );
	}
	
	
	/* getBooks(): Promise<Book[]> {
        return Promise.resolve(BOOKS);
	} */
	
	// addBook(book:Book): void {
	// 	this.getBooks().then(books => {
	// 	    let maxIndex = books.length - 1;
	// 		let bookWithMaxIndex = books[maxIndex];
	// 		book.id = bookWithMaxIndex.id + 1;
	// 		books.push(book);}
	// 	);
    // }
	/* getBook(id: number): Promise<Book> {
        return this.getBooks()
            .then(books => books.find(book => book.id === id));
    }
	deleteBook(id: number): void {
		this.getBooks().then(books => {
		    let book = books.find(ob => ob.id === id);
            let bookIndex = books.indexOf(book);
            books.splice(bookIndex, 1);}
		);
	}
 */	
	// addBooks(name:string,price:string,description:string ){
	// 	// let tmp : any
	// 	// tmp = { names : name, prices : price, descriptions : description };
	// 	// let temp = JSON.stringify(tmp);
	// 	//console.log(temp)
	// 	// this.ApiserviceService.addBook(tmp)
	// }


/* AddBook(name:string,price:string,description:string){
	let tmp : any;
	tmp = {name:name, price:price, description:description };
	let temp = JSON.stringify(tmp);
	this.apiserviceService.AddBook(temp);
} */


}

