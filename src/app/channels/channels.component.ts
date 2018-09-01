import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {SocketService} from '../socket.service';


@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {
  username:string = localStorage.getItem("username");
  email:string = localStorage.getItem("email");
  user_level:string = localStorage.getItem("permissions");
  loggedIn = false;
  notLoggedIn = true;
  groupadmin = false;
  super_admin = false;
  New_User:string;
  group: string;
  new_group: string;
  Remove_User: string;
  Remove_Group: string;
  lists = [{'name':"The Ubermensch", 'numberOfUsers': 8, 'memebers': ["Pepe"]/*, 'messages': []*/},{'name':"The Ethnic Kekistani", 'numberOfUsers': 529, 'memebers': ["Pepe", "Trump"]/*, 'messages': []*/},{'name':"The New Kekistani", 'numberOfUsers': 1029, 'memebers': ["Pepe", "Trump", "Count Dankula"]
/*, 'messages': []*/}, {'name':'The Normies', "numberOfUsers": "7'200'000'000", 'memebers': ["Pepe", "Trump", "Count Dankula"]/*, 'messages': []*/}];
  message;
  connection;






  constructor(private sockServ: SocketService, private router: Router) { }

  ngOnInit() {
/*
    this.username == (localStorage.getItem("username"))
    this.email == (localStorage.getItem("email"))
    this.user_level == (localStorage.getItem("permissions"))
*/

    if (this.user_level == "Group User"){
      this.groupadmin = true;
      console.log(this.user_level)
      console.log(this.groupadmin)
    }

    if (this.user_level == "Super User"){
      this.groupadmin = true;
      this.super_admin = true;
    }

    //console.log(this.user_level + ' + ' + this.groupadmin + ' ' + this.super_admin)

      if (this.username != null){
        this.username = localStorage.getItem('username');
        //console.log("User: " + this.username + " logged in");
        this.connection = this.sockServ.getMessages().subscribe(message=>{
          //this.lists.messages.push(message);
          this.message = '';
        });
      }

var x;
var y;
var listsToDelete = [];

for (x in this.lists) {
  console.log(x)
  console.log(this.lists[x])
  var foobar = this.lists[x]
  var false1 = "";
  for (y in foobar.memebers) {
    //console.log(foobar.memebers[y])
    if (this.username != foobar.memebers[y]) {
      false1 = "false"
      //console.log(false1);

    }
    else if (this.username = foobar.memebers[y]){
      //console.log("Found a list: " + foobar.name)
      false1 = null
      listsToDelete.push("dont")
      continue;
    }
  }
  if (false1 != null){
    //this.lists.splice(0,1)
    //console.log(this.lists)
    x == 0;
    //console.log(x);
    continue;
  }

}

}
  logOut(event) {
    localStorage.clear();
    localStorage.remove();
    this.router.navigateByUrl('/');

}

sendMessage(event) {
  event.preventDefault();
  this.sockServ.sendMessage(this.message + ' ('+this.username+')');
}

addUser(event) {
  event.preventDefault();
  var z;
  var zz;
  var groupTrue = true;
  var foundGroup = false;

    for (z in this.lists){
      var barfoo = this.lists[z]
      console.log(barfoo)
      if (this.group == barfoo.name) {
        for (zz in barfoo.memebers){
          if (this.New_User == barfoo.memebers[zz]){
            alert(this.New_User + ' user alread in ' + barfoo.name)
            return;
          }
        }
        barfoo.memebers.push(this.New_User)
        alert('Added user: ' + this.New_User + ' to the group: ' + this.group)
        this.foundGroup = true;
      }
      else {
        this.groupTrue = false;
        console.log(this.groupTrue)
      }
    }
    if (this.groupTrue != true) {
      if (this.foundGroup != true){
        alert('Did not find the group: ' + this.group);
        this.groupTrue = true;
        this.foundGroup = false;
      }
      else {
        return;
      }
    }
  }

  addGroup(event){
    event.preventDefault();
    this.lists.push({'name': this.new_group, 'numberOfUsers': '1', 'memebers':[this.username]})
  }

  removeUser(event){
    var z;
    var: zz;
    var cantFindRemoveUser = false;

    for (z in this.lists){
      var barfoo = this.lists[z]
      for (zz in barfoo.memebers){
        if (this.Remove_User == barfoo.memebers[zz]){
          barfoo.memebers.splice(zz ,1)
          alert(this.Remove_User + ' user is removed from ' + barfoo.name)
          this.cantFindRemoveUser = false;
          console.log(this.lists[z]);
          break;
        }
        else {
          this.cantFindRemoveUser = true;
        }
      }

    }

    if (this.cantFindRemoveUser != false){
      alert('Did not find the user: ' + this.Remove_User);
      this.Remove_User = false;
    }
  }

  removeGroup(event){
    var z;
    var removeGroupFound = false;;

    for (z in this.lists){
      var barfoo = this.lists[z];
      if (this.Remove_Group == barfoo.name){
        this.lists.splice(z, 1);
        alert(this.Remove_Group + ' has been removed')
        removeGroupFound = true;
        break;
      }
      else {
        removeGroupFound = false;
      }
    }
    if (removeGroupFound != true){
      alert('Cannot find ' + this.Remove_Group)
    }
  }




}
