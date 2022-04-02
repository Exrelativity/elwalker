import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderInput } from './interfaces/order.interface';
import { PrismaService } from '../../providers/prisma/prisma.service';
import { ORDER_EXIT, ORDER_NOT_FOUND, NO_SUCH_SERVICE } from 'src/errors/errors.constants';


@Injectable()
export class OrderService {

  constructor(
    private prisma: PrismaService,
  ) { }


  async createOrder(name: string, city: string, region: string, source: string, destination: string, createOrderDto: CreateOrderDto): Promise<OrderInput> {
    const testOrder = await this.prisma.Order.findUnique({ where: { name, city, region, source, destination } });
    if (testOrder) throw new NotFoundException(ORDER_EXIT)
    const createdOrder = new this.prisma.Order.create({ createOrderDto });
    return createdOrder;
  }

  async findManyOrder(
    status: string,
    createdAt: string,
  ): Promise<OrderInput[]> {
    const manyOrderlist = await this.prisma.Order.findMany({
      where: { status },
      orderBy: { createdAt }
    })
    if (!manyOrderlist) throw new NotFoundException(NO_SUCH_SERVICE);
    return manyOrderlist;
  }

  async findAllOrder(): Promise<OrderInput[]> {
    const allOrderlist = await this.prisma.Order.findMany({});
    if (!allOrderlist) throw new NotFoundException(NO_SUCH_SERVICE);
    return allOrderlist;
  }

  async findOneOrder(id: number): Promise<OrderInput> {
    const OneOrder = await this.prisma.Order.findUnique({
      where: { id },
    });
    if (!OneOrder) throw new NotFoundException(ORDER_NOT_FOUND);
    return OneOrder;
  }

  async updateOrder(id: number, updateOrderDto: UpdateOrderDto): Promise<OrderInput> {
    const testOrder = await this.prisma.Order.findUnique({ where: { id } });
    if (!testOrder) throw new NotFoundException(ORDER_NOT_FOUND);
    const updatedOrder = await this.prisma.Order.Update({
      where: { id }, updateOrderDto
    });
    return updatedOrder;
  }

  async removeOrder(id: number): Promise<OrderInput> {
    const testOrder = await this.prisma.Order.findUnique({ where: { id } });
    if (!testOrder) throw new NotFoundException(ORDER_NOT_FOUND);
    const removedOrder = await this.prisma.Order.delete({ where: { id } })
    return removedOrder;
  }
}
