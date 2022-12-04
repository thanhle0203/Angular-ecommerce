import { CartService } from './../../../services/cart.service';
import { Product } from 'src/app/models/product';
import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartItem } from 'src/app/models/cart-item';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];

  cartTotal = 0

  constructor(
    private msg: MessengerService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
    this.loadCartItems();
    })
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      // this.cartItems = items;
      this.calcCartTotal();
    })
  }

  calcCartTotal() {
    this.cartTotal=0
    this.cartItems.forEach(
        (item) => {
        this.cartTotal += (item.qty*item.price)
      }
    ) 
  }

  addProductToCart(product: Product) {
    // let productExists = false 

    // for (let i in this.cartItems) {
    //   if (this.cartItems[i].productId === product.id) {
    //     this.cartItems[i].qty++
    //     productExists = true 
    //     break;
    //   }
    // }

    // if (!productExists) {
    //   this.cartItems.push({
    //     productId: product.id,
    //     productName: product.name,
    //     qty: 1,
    //     price: product.price,
    //     id: 0
    //   })
    // }
    
    // this.cartTotal=0
    // this.cartItems.forEach(
    //   item=>{
    //     this.cartTotal += (item.qty*item.price)
    //   }
    // )

    this.calcCartTotal();
  }

  

}


