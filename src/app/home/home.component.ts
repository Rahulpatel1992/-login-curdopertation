import { Component, OnInit } from '@angular/core';

import { Book } from '../services/book';
import { BookService } from '../services/book.service';
 import {AuthGuard } from '../services/user.service';

@Component({
    selector: 'home-app',
    templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 
    books: Book[];
	constructor(private bookService: BookService,private user: AuthGuard) { }
    getBooks(): void {
        this.bookService.getBooks().then(books => this.books = books);
    }
    ngOnInit(): void {
        this.getBooks();
    }				
}
    