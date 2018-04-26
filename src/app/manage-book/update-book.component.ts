import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Book } from '../services/book';
import { BookService } from '../services/book.service';

declare var firebase:any
import * as _ from "lodash"

@Component({
    selector: 'update-book-app',
    templateUrl: './update-book.component.html',
	styleUrls: ['./update-book.component.css']
})

export class UpdateBookComponent implements OnInit{
    uid:any
    key:any
    book:Book= new Book();
    constructor( private route:ActivatedRoute,
                private router:Router,
	            private bookService:BookService,
                private location:Location ){}

    ngOnInit():void {
        this.uid = this.route.snapshot.paramMap.get('id')
        this.bookService.getMe().subscribe( data => {
            let arr = Object.values(data)
            var item = arr.find( it => it.id == this.uid )
            this.book = item
            var skey = _.findKey( data, this.book )
            this.key = skey
        })
    }
    goBack():void {
        this.location.back();
    }
    save(key){
        firebase.database().ref('data/' + key ).set(this.book)
    }
    del(key){
       firebase.database().ref('data/' + key ).remove()
       this.router.navigate(['/']) 
    }
}
