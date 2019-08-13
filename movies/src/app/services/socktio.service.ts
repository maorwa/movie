import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

 const socket = io('http://localhost:3001');

 @Injectable({
  providedIn: 'root'
})
export class SocktioService {
  private url = 'http://localhost:3001';
  private socket;    
  constructor( ) { 
    //this.socket = io(this.url);
  }

}
