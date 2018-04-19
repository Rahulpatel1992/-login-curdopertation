import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from '../services/book';
import { BookService } from '../services/book.service';

@Component({
    selector: 'add-book-app',
    templateUrl: './add-book.component.html',
	styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
    name: any;
    price: any;
    description: any;

    books: Book[];
	book: Book = new Book();
	constructor(private router: Router,
	            private bookService: BookService) { }
    getBooks(): void {
        this.bookService.getBooks().then(books => this.books = books);
    }
    ngOnInit(): void {
        this.getBooks();     
    }
    // addBook() {
    //     //this.bookService.addBooks(this.name,this.price,this.description);       
    //     //this.router.navigate(['/home']);
    // }
    AddBook(){
         //console.log(this.name + "<br />" + this.price + "<br />" +this.description );
        this.bookService.AddBook( this.name, this.price,this.description );
    }

    
}
  