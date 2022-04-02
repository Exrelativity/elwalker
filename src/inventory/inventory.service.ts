import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { InventoryInput } from './interfaces/inventory.interface';
import { PrismaService } from '../../providers/prisma/prisma.service';
import { INVENTORY_EXIT, INVENTORY_NOT_FOUND, NO_SUCH_SERVICE } from 'src/errors/errors.constants';


@Injectable()
export class InventoryService {

  constructor(
    private prisma: PrismaService,
  ) { }


  async createInventory(name: string, city: string, region: string, source: string, destination: string, createInventoryDto: CreateInventoryDto): Promise<InventoryInput> {
    const testInventory = await this.prisma.Inventory.findUnique({ where: { name, city, region, source, destination } });
    if (testInventory) throw new NotFoundException(INVENTORY_EXIT)
    const createdInventory = new this.prisma.Inventory.create({ createInventoryDto });
    return createdInventory;
  }

  async findManyInventory(
    status: string,
    category: string,
  ): Promise<InventoryInput[]> {
    const manyInventorylist = await this.prisma.Inventory.findMany({
      where: { status },
      orderBy: { category }
    })
    if (!manyInventorylist) throw new NotFoundException(NO_SUCH_SERVICE);
    return manyInventorylist;
  }

  async findAllInventory(): Promise<InventoryInput[]> {
    const allInventorylist = await this.prisma.Inventory.findMany({});
    if (!allInventorylist) throw new NotFoundException(NO_SUCH_SERVICE);
    return allInventorylist;
  }

  async findOneInventory(id: number): Promise<InventoryInput> {
    const OneInventory = await this.prisma.Inventory.findUnique({
      where: { id },
    });
    if (!OneInventory) throw new NotFoundException(INVENTORY_NOT_FOUND);
    return OneInventory;
  }

  async updateInventory(id: number, updateInventoryDto: UpdateInventoryDto): Promise<InventoryInput> {
    const testInventory = await this.prisma.Inventory.findUnique({ where: { id } });
    if (!testInventory) throw new NotFoundException(INVENTORY_NOT_FOUND);
    const updatedInventory = await this.prisma.Inventory.Update({
      where: { id }, updateInventoryDto
    });
    return updatedInventory;
  }

  async removeInventory(id: number): Promise<InventoryInput> {
    const testInventory = await this.prisma.Inventory.findUnique({ where: { id } });
    if (!testInventory) throw new NotFoundException(INVENTORY_NOT_FOUND);
    const removedInventory = await this.prisma.Inventory.delete({ where: { id } })
    return removedInventory;
  }
}
