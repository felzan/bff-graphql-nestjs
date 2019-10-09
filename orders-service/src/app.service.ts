import { Injectable } from '@nestjs/common';
import { orders } from './fakedb';
import axios from 'axios';

@Injectable()
export class AppService {
  getOrders() {
    return orders;
  }

  async postOrders(order) {
    const ids = order.itemsId.map(i => i.id);
    const products = await axios.get('http://localhost:3002/products', { params: { ids } });
    order.total = (order.itemsId.map(i => i.quantity * products.data.find(p => p.id == i.id).price)).reduce((acc, cur) => acc + cur);
    order.id = orders.length + 1;
    orders.push(order);
    return order;
  }
}
