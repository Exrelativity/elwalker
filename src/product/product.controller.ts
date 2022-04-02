import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Scopes } from 'src/modules/auth/scope.decorator';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() name: string, city: string, region: string, source: string, destination: string, createProductDto: CreateProductDto) {
    return this.productService.createProduct(name, city, region, source, destination, createProductDto);
  }

  @Get()
  findAll() {
    return this.productService.findAllProduct();
  }

  @Get(':category')
  findMany(@Body() status: string, category: string,) {
    return this.productService.findManyProduct(status, category);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productService.findOneProduct(+id);
  }

  @Patch(':id')
  // @Scopes('user-{userId}:write-info')
  update( 
    // @Param('userId', ParseIntPipe) userId: number,
    @Param('id', ParseIntPipe) id: number, 
    @Body() updateProductDto: UpdateProductDto) {
    return this.productService.updateProduct(id, updateProductDto);
  }

  @Delete(':id')
  // @Scopes('user-{userId}:delete-product-{id}')
  remove(
    // @Param('userId', ParseIntPipe) userId: number,
    @Param('id', ParseIntPipe) id: number) {
    return this.productService.removeProduct(id);
  }
}
