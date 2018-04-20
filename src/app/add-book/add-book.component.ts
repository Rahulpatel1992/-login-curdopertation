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
	constructor(private router: Router,
	            private bookService: BookService) { }
    // getBooks(): void {
    //  this.bookService.getBooks().then(books => this.books = books);
    // }
    ngOnInit(): void {
        // this.fbGData()
    }
    // addBook() {
    //     //this.bookService.addBooks(this.name,this.price,this.description);       
    //     //this.router.navigate(['/home']);
    // }
    AddBook( name, price, description ){
        let id = Math.random()
        let temp = {name:name, price:price, description:description, id:id}
        firebase.database().ref('/').push(temp)

    }
    // fbGData(){
    //     firebase.database().ref('/').on("child_added", ( snapshot ) => {
    //         //console.log(snapshot.val())
    //         //this.books.push(snapshot.val())
    //     })
    // }
}
  