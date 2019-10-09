import { Injectable } from '@nestjs/common';
import { products } from './fakedb';

@Injectable()
export class AppService {

  getProducts(ids) {
    if (ids) {
      return products.filter(p => ids.includes(p.id.toString()));
    }
    return products;
  }

  getProductById(id) {
    return products.filter(p => {
      return p.id === parseInt(id, 10);
    });
  }
}
