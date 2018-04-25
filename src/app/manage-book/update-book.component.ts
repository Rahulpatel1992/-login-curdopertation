import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Book } from '../services/book';
import { BookService } from '../services/book.service';

declare var firebase:any

@Component({
    selector: 'update-book-app',
    templateUrl: './update-book.component.html',
	styleUrls: ['./update-book.component.css']
})

export class UpdateBookComponent implements OnInit{
    uid:any
    key:string[]=[]
    book:Book=new Book();
    constructor(private route:ActivatedRoute,
                private router:Router,
	            private bookService:BookService,
                private location:Location){}

    ngOnInit(): void {
        this.uid=this.route.snapshot.paramMap.get('id')
        this.bookService.getMe().subscribe(data=>{
            // find key
            this.key = Object.keys(data)
            // find uid
            let arr = Object.values(data)
            var item = arr.find( it => it.id == this.uid )
            this.book = item
            
            for( let i = 0 ; i < this.key.length; i++ ){
                console.log(this.key[i])
                var is = Object.hasOwnProperty('id')
                if (!is){
                    console.log("s")
                }
            }
            var findKey(data, this.uid);
            //console.log(this.key)
            // let find = Object.hasOwnProperty('id')
            // console.log(find)        
        })
    }
    goBack():void{
        this.location.back();
    }
    save(){
        console.log(this.key)
        // var rootURL=firebase.database().ref('/data')
    	// rootURL.on("value",snapshot=>{
        //     snapshot.forEach(el=>{
        //         this.key.push(el.key)
        //     })
        //     console.log(this.key)
        // })
        // this.bookService.save().subscribe( el => el )
    }
}
