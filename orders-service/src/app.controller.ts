import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/orders')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getOrders() {
    return this.appService.getOrders();
  }

  @Post()
  async postOrders(@Body() order) {
    return await this.appService.postOrders(order);
  }
}
