import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/users')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getUsers(@Query('ids') ids) {
    return this.appService.getUsers(ids);
  }

  @Get('/:id')
  getUserById(@Param('id') id) {
    return this.appService.getUserById(id);
  }
}
