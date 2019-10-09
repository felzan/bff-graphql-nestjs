import { Query, Resolver, Args } from '@nestjs/graphql';
import axios from 'axios/';

@Resolver('Product')
export class ProductsResolver {

  @Query('products')
  async products(
    @Args('ids') ids,
  ) {
    const res = await axios.get('http://localhost:3002/products', { params: { ids } });
    return res.data;
  }

  @Query('getProductsById')
  async productById(
    @Args('id') id,
  ) {
    const res = await axios.get(`http://localhost:3002/products/${id}`);
    return res.data[0];
  }
}
