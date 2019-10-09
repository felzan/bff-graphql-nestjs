import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/products')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getProducts(@Query('ids') ids) {
    return this.appService.getProducts(ids);
  }

  @Get('/:id')
  getProductById(@Param('id') id) {
    return this.appService.getProductById(id);
  }
}
