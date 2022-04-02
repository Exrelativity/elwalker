import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Scopes } from 'src/modules/auth/scope.decorator';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() name: string, city: string, region: string, source: string, destination: string, createOrderDto: CreateOrderDto) {
    return this.orderService.createOrder(name, city, region, source, destination, createOrderDto);
  }

  @Get()
  findAll() {
    return this.orderService.findAllOrder();
  }

  @Get(':category')
  findMany(@Body() status: string, category: string,) {
    return this.orderService.findManyOrder(status, category);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.orderService.findOneOrder(+id);
  }

  @Patch(':id')
  // @Scopes('user-{userId}:write-info')
  update( 
    // @Param('userId', ParseIntPipe) userId: number,
    @Param('id', ParseIntPipe) id: number, 
    @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.updateOrder(id, updateOrderDto);
  }

  @Delete(':id')
  // @Scopes('user-{userId}:delete-order-{id}')
  remove(
    // @Param('userId', ParseIntPipe) userId: number,
    @Param('id', ParseIntPipe) id: number) {
    return this.orderService.removeOrder(id);
  }
}
