import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
 
import { Book } from '../services/book';
import { BookService } from '../services/book.service';

@Component({
    selector: 'view-detail-app',
    templateUrl: './view-detail.component.html',
	styleUrls: ['./view-detail.component.css']
})

export class ViewDetailComponent implements OnInit { 
    //book:any
    id:number
    private sub : any
    book: Book = new Book();
	constructor(
        private route:ActivatedRoute,
	    private router:Router,
	    private bookService:BookService,
        private location:Location
    ){
        
    }
    ngOnInit():void{
        //this.fetch
    }
    goBack():void{
        this.location.back();
    }
	updateBook(id:number):void{
		this.router.navigate(['/update-book', id]);
    }
    fetch() {    
        this.route.params.subscribe( params => {
            this.id = +params['id'];
            console.log(this.id)
        })
    }
}
    