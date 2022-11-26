import { Injectable } from '@angular/core';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // TODO: Populate products from an API
  products: Product[] = [
   new Product(1, 'Product 1', 'This is product description. The product is really cool', 100, 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Scramble.svg/1200px-Scramble.svg.png'),
   new Product(2, 'Product 2', 'This is product description. The product is really cool', 150, 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Rubik%27s_cube.svg/1966px-Rubik%27s_cube.svg.png'), 
   new Product(3, 'Product 3', 'This is product description. The product is really cool', 200, 'https://i5.walmartimages.com/asr/ba72adea-2498-4a97-be12-a5592d30f413.781a19deb450c52bd9f92b32123ce2ab.jpeg'),
   new Product(4, 'Product 4', 'This is product description. The product is really cool', 250, 'https://www.hpcwire.com/wp-content/uploads/2018/07/Rubiks_Cube_shutterstock_271810067.jpg'),
   new Product(5, 'Product 5', 'This is product description. The product is really cool', 200, 'https://static.scientificamerican.com/sciam/cache/file/76CA6AF7-D83E-481F-B27BED55698AEB36_source.jpg'),
   new Product(6, 'Product 6', 'This is product description. The product is really cool', 250, 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/08/12/16287757674369.jpg'), 
   new Product(7, 'Product 7', 'This is product description. The product is really cool', 200, 'https://static.scientificamerican.com/sciam/cache/file/76CA6AF7-D83E-481F-B27BED55698AEB36_source.jpg'),
   new Product(8, 'Product 8', 'This is product description. The product is really cool', 250, 'https://www.hpcwire.com/wp-content/uploads/2018/07/Rubiks_Cube_shutterstock_271810067.jpg'),
   new Product(9, 'Product 9', 'This is product description. The product is really cool', 200, 'https://static.scientificamerican.com/sciam/cache/file/76CA6AF7-D83E-481F-B27BED55698AEB36_source.jpg'),
  ]

  constructor() { }

  getProducts(): Product[] {
    //TODO: Populate products from an API and return an Observation
    return this.products
  }
}
