import { Product } from './product';
export class Cart {
  id: number;
  productId: number;
  productName: string;
  qty: number | undefined;
  price: number | undefined;

  constructor(id: number, product: Product, qty=0) {
    this.id = id;
    this.productId = product.id;
    this.productName = product.name;
    this.price = product.price;
    this.qty = qty;
  }
}
