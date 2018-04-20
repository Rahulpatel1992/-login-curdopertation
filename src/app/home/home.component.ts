import { Component, OnInit } from '@angular/core';
//import { Router,  ActivatedRoute  } from '@angular/router';
import { Book } from '../services/book';
import { BookService } from '../services/book.service';
import { AuthGuard } from '../services/user.service';
declare var firebase : any;

@Component({
    selector: 'home-app',
    templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit { 
    //id: any;
    books: Book[];
	constructor( private bookService: BookService, private user: AuthGuard ) {
        
    }
 
    // getBooks(): void {
    //     this.bookService.getBooks().then(books => this.books = books);
    // }
 
    ngOnInit(): void {
        this.bookService.fetchData().subscribe( ( data ) =>{
            
            this.books = data
            // let a = Array.of(data)
            // console.log(a)
            console.log(this.books)
        })
        this.fbGData()
    }
    
    fbGData() {
        firebase.database().ref('/').on("child_added", ( snapshot ) => {
            //console.log(snapshot.val())
            //this.books.push(snapshot.val())
        })
    }
}
    