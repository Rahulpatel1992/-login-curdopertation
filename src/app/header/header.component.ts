import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  router: any;
  constructor() { }

  ngOnInit() {
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
