import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string ='';
  password:string ='';


  constructor(private router:Router, private form:FormsModule) { }

  ngOnInit() {
  }
    loginUser(event){
        event.preventDefault();
        console.log(this.username);
        console.log(this.password);

        if (this.username == "Count Dankula" && this.password == "Newpassword"){
          localStorage.setItem("username", "Count Dankula");
          localStorage.setItem("email", "thedank@kekistan.com");
          localStorage.setItem("permissions", "Basic User");

          console.log(localStorage.getItem("username"));
          console.log(localStorage.getItem("email"));
          console.log(localStorage.getItem("permissions"));

          this.router.navigateByUrl('/channels');
        }

        else if (this.username == "Super" && this.password == "Newpassword"){
          localStorage.setItem("username", "super");
          localStorage.setItem("email", "N/A");
          localStorage.setItem("permissions", "Super User");

          console.log(localStorage.getItem("username"));
          console.log(localStorage.getItem("email"));
          console.log(localStorage.getItem("permissions"));

          this.router.navigateByUrl('/channels');
        }

        else if (this.username == "Trump" && this.password == "Newpassword"){
          localStorage.setItem("username", "Trump");
          localStorage.setItem("email", "MAGA@kekistan.com");
          localStorage.setItem("permissions", "Group User");

          console.log(localStorage.getItem("username"));
          console.log(localStorage.getItem("email"));
          console.log(localStorage.getItem("permissions"));

          this.router.navigateByUrl('/channels');
        }

        else if (this.username == "Pepe" && this.password == "PraiseKek"){
          localStorage.setItem("username", "Pepe");
          localStorage.setItem("email", "pepethegreat@kekistan.com");
          localStorage.setItem("permissions", "Super User");

          console.log(localStorage.getItem("username"));
          console.log(localStorage.getItem("email"));
          console.log(localStorage.getItem("permissions"));

          this.router.navigateByUrl('/channels');
        }

        else(
          alert('Wrong, Username or Password did not match')
        )
  }
}
