import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from '../services/book';
import { BookService } from '../services/book.service';

declare var firebase: any;

@Component({
    selector: 'add-book-app',
    templateUrl: './add-book.component.html',
	styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
    books: Book[];
	book: Book = new Book();
	constructor(
        private router: Router,
        private bookService: BookService
    ){
        
    }
    ngOnInit(): void {
        
    }
    AddBook( name, price, description ){
        let id = Math.random()
        let temp = {name:name,price:price,description:description,id:id}
        //this.bookService.addBook(temp)
        var rootURL = firebase.database().ref('/data')
        rootURL.push(temp)
    }
}
  