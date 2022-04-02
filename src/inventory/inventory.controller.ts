import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { Scopes } from 'src/modules/auth/scope.decorator';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Post()
  create(@Body() name: string, city: string, region: string, source: string, destination: string, createInventoryDto: CreateInventoryDto) {
    return this.inventoryService.createInventory(name, city, region, source, destination, createInventoryDto);
  }

  @Get()
  findAll() {
    return this.inventoryService.findAllInventory();
  }

  @Get(':category')
  findMany(@Body() status: string, category: string,) {
    return this.inventoryService.findManyInventory(status, category);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.inventoryService.findOneInventory(+id);
  }

  @Patch(':id')
  // @Scopes('user-{userId}:write-info')
  update( 
    // @Param('userId', ParseIntPipe) userId: number,
    @Param('id', ParseIntPipe) id: number, 
    @Body() updateInventoryDto: UpdateInventoryDto) {
    return this.inventoryService.updateInventory(id, updateInventoryDto);
  }

  @Delete(':id')
  // @Scopes('user-{userId}:delete-inventory-{id}')
  remove(
    // @Param('userId', ParseIntPipe) userId: number,
    @Param('id', ParseIntPipe) id: number) {
    return this.inventoryService.removeInventory(id);
  }
}
