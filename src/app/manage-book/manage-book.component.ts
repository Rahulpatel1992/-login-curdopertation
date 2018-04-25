import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Http } from '@angular/http';

import { Book } from '../services/book';
import { BookService } from '../services/book.service';

@Component({
    selector: 'manage-book-app',
    templateUrl: './manage-book.component.html',
	styleUrls: ['./manage-book.component.css']
})
export class ManageBookComponent implements OnInit { 
    books:any;
	//book:Book = new Book();
	constructor(
		private router:Router,
		private bookService:BookService
	){
		
	}
			
    ngOnInit() {
		this.bookService.getMe().subscribe( data => {
            var arr = Object.values(data)
			this.books = arr
			//console.log(this.books)
        })
    }
	updateBook(id:number): void {
		this.router.navigate(['/update-book', id]);
	}
	
	// deleteBook(id:number): void {
	// 	this.bookService.deleteBook(id);
	// }
}
    