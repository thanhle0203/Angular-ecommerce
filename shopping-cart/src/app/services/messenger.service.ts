import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  
  subject = new Subject<Product>()


  constructor() { }

  sendMsg(product: any) {
    console.log(product)
    this.subject.next(product) // Triggering an event 
  }

  getMsg() {
    return this.subject.asObservable()
  }


}
