import { Query, Resolver, Args } from '@nestjs/graphql';
import axios from 'axios';

@Resolver('User')
export class UsersResolver {

  @Query('users')
  async users() {
    const res = await axios.get('http://localhost:3001/users');
    return res.data;
  }

  @Query('getUserById')
  async userById(
    @Args('id') id,
  ) {
    const res = await axios.get(`http://localhost:3001/users/${id}`);
    return res.data[0];
  }
}
