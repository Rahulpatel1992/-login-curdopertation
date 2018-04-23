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
    books: any;
	constructor( private bookService: BookService, private user: AuthGuard ) {
        
    }
    ngOnInit(): void {
        this.bookService.getMe().subscribe( data => {
            var arr = Object.values(data)
            this.books = arr
			console.log(this.books)
        })
    }
    
}
    