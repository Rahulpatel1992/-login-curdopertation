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
    book: Book = new Book();
	constructor(
        private route:ActivatedRoute,
	    private router:Router,
	    private bookService:BookService,
        private location:Location
    ){ }

    ngOnInit():void{
        let uid = this.route.snapshot.paramMap.get('id')
        this.bookService.getMe().subscribe( data => {
            let arr = Object.values(data)
            var item = arr.find( item => item.id == uid )
            this.book = item
        })
    }
    goBack():void{
        this.location.back();
    }
	updateBook(id:number):void{
		this.router.navigate(['/update-book', id]);
    }
}
    