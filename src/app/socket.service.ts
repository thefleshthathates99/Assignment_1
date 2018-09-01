import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SocketService {
  private url = 'http://localhost:4200';
  private socket;

  constructor() {}
  //this.socket = io(this.url);
  sendMessage(message){
  this.socket.emit('add-message', message);
}

getMessages(){
  let obmessages = new Observable(
    observer =>{
      this.socket = io();
      this.socket.on('message', (data)=> {observer.next(data);});

      return ()=>{this.socket.disconnect();}

    }
  )
  return obmessages;
}
}
