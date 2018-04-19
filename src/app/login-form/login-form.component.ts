import { Component, OnInit } from '@angular/core';
import { Router,  ActivatedRoute  } from '@angular/router';
 import { AuthGuard } from '../services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  email: any;
  password: any;

  constructor(private router: Router,) { }

  ngOnInit(){
    let temp = localStorage.getItem("token");
    if(temp === "true") {
      this.router.navigate(['/home']);
    }
  }
  // loginUser(e){
  //   e.preventDefault();
  // 	console.log(e);
  //   var username = e.target.elements[0].value;
  //   var password = e.target.elements[1].value;
  //   if(username == 'admin' && password == 'admin'){
  //     this.user.setUserLoggedIn();
  //     this.router.navigate(['home']);
  //   }
  // }

  login() {
    if(this.email === "admin" && this.password === "admin") {
      this.router.navigate(['/home']);
      localStorage.setItem("token","true");
    } else {
      alert('Invalid url!');
      this.email = "";
      this.password = "";
    }
  }

}
