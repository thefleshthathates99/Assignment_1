import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {
  username:string = localStorage.getItem("username");
  email:string = localStorage.getItem("email");
  user_level:string= localStorage.getItem("permissions");
  ourLord = false;
  loggedIn = false;
  lists = [{'name':"The Ubermensch", 'numberOfUsers': 8},{'name':"The Ethnic Kekistani", 'numberOfUsers': 529},{'name':"The New Kekistani", 'numberOfUsers': 1029},{'name':"The Normies", 'numberOfUsers': "7'200'000'000"}];

  constructor() { }

  ngOnInit() {
      this.username == (localStorage.getItem("username"))
      this.email == (localStorage.getItem("email"))
      this.user_level == (localStorage.getItem("permissions"))

      if (this.username == "Pepe"){
          this.ourLord = true;
      }

      if (this.username != ""){
        this.loggedIn = true;
      }

  }
  logOut(event) {
    //localStorage.clear();
    //this.router.navigateByUrl('/');
  }

}
