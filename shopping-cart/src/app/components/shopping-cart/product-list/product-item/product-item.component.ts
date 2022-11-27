import { CartService } from './../../../../services/cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product | undefined;

  constructor(
    private msg: MessengerService, 
    private CartService: CartService
  ) { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    this.CartService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem)
    })
  }

}
