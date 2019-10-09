import { Query, Resolver, Args, Mutation, ResolveProperty, Parent } from '@nestjs/graphql';
import axios from 'axios';

@Resolver('Order')
export class OrdersResolver {

  @Query()
  async orders() {
    const res = await axios.get('http://localhost:3003/orders');
    return res.data;
  }

  @ResolveProperty('user')
  async getUser(
    @Parent() order,
  ) {
    const res = await axios.get(`http://localhost:3001/users/${order.userId}`);
    return res.data[0];
  }

  @ResolveProperty('orderItems')
  async getOrderItems(
    @Parent() order,
  ) {
    const ids = order.itemsId.map(i => i.id);
    const res = await axios.get('http://localhost:3002/products', { params: { ids } });
    res.data.forEach(p => {
      p.quantity = order.itemsId.filter(i => i.id == p.id)[0].quantity;
    });

    return res.data;
  }

  @Mutation('postOrder')
  async productById(
    @Args('data') data,
  ) {
    const res = await axios.post('http://localhost:3003/orders', data);
    return res.data;
  }
}
