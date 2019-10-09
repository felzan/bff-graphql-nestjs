import { Injectable } from '@nestjs/common';
import { users } from './fakedb';

@Injectable()
export class AppService {

  getUsers(ids) {
    if (ids) {
      return users.filter(u => ids.includes(u.id));
    }
    return users;
  }

  getUserById(id) {
    return users.filter(u => u.id == id);
  }
}
