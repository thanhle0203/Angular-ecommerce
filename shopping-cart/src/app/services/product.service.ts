import { Injectable } from '@angular/core';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // TODO: Populate products from an API
  products: Product[] = [
   new Product(1, 'Product 1', 'This is product 1 description. The product is really cool', 100, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR608TWmLRWFNYPlY5xgKkgZPYe7mwv0GDMDtAS9nRdlVo4aytG'),
   new Product(2, 'Product 2', 'This is product 1 description. The product is really cool', 150, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR608TWmLRWFNYPlY5xgKkgZPYe7mwv0GDMDtAS9nRdlVo4aytG'), 
   new Product(3, 'Product 3', 'This is product 1 description. The product is really cool', 200, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR608TWmLRWFNYPlY5xgKkgZPYe7mwv0GDMDtAS9nRdlVo4aytG'),
   new Product(4, 'Product 4', 'This is product 1 description. The product is really cool', 250, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR608TWmLRWFNYPlY5xgKkgZPYe7mwv0GDMDtAS9nRdlVo4aytG'),
   new Product(5, 'Product 5', 'This is product 1 description. The product is really cool', 200, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR608TWmLRWFNYPlY5xgKkgZPYe7mwv0GDMDtAS9nRdlVo4aytG'),
   new Product(6, 'Product 6', 'This is product 1 description. The product is really cool', 250, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR608TWmLRWFNYPlY5xgKkgZPYe7mwv0GDMDtAS9nRdlVo4aytG'), 
   new Product(7, 'Product 7', 'This is product 1 description. The product is really cool', 250, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR608TWmLRWFNYPlY5xgKkgZPYe7mwv0GDMDtAS9nRdlVo4aytG'), 
  ]

  constructor() { }

  getProducts(): Product[] {
    //TODO: Populate products from an API and return an Observation
    return this.products
  }
}
