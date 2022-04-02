import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductInput } from './interfaces/product.interface';
import { PrismaService } from '../../providers/prisma/prisma.service';
import { PRODUCT_EXIT, PRODUCT_NOT_FOUND, NO_SUCH_SERVICE } from 'src/errors/errors.constants';


@Injectable()
export class ProductService {

  constructor(
    private prisma: PrismaService,
  ) { }


  async createProduct(name: string, city: string, region: string, source: string, destination: string, createProductDto: CreateProductDto): Promise<ProductInput> {
    const testProduct = await this.prisma.Product.findUnique({ where: { name, city, region, source, destination } });
    if (testProduct) throw new NotFoundException(PRODUCT_EXIT)
    const createdProduct = new this.prisma.Product.create({ createProductDto });
    return createdProduct;
  }

  async findManyProduct(
    status: string,
    category: string,
  ): Promise<ProductInput[]> {
    const manyProductlist = await this.prisma.Product.findMany({
      where: { status },
      orderBy: { category }
    })
    if (!manyProductlist) throw new NotFoundException(NO_SUCH_SERVICE);
    return manyProductlist;
  }

  async findAllProduct(): Promise<ProductInput[]> {
    const allProductlist = await this.prisma.Product.findMany({});
    if (!allProductlist) throw new NotFoundException(NO_SUCH_SERVICE);
    return allProductlist;
  }

  async findOneProduct(id: number): Promise<ProductInput> {
    const OneProduct = await this.prisma.Product.findUnique({
      where: { id },
    });
    if (!OneProduct) throw new NotFoundException(PRODUCT_NOT_FOUND);
    return OneProduct;
  }

  async updateProduct(id: number, updateProductDto: UpdateProductDto): Promise<ProductInput> {
    const testProduct = await this.prisma.Product.findUnique({ where: { id } });
    if (!testProduct) throw new NotFoundException(PRODUCT_NOT_FOUND);
    const updatedProduct = await this.prisma.Product.Update({
      where: { id }, updateProductDto
    });
    return updatedProduct;
  }

  async removeProduct(id: number): Promise<ProductInput> {
    const testProduct = await this.prisma.Product.findUnique({ where: { id } });
    if (!testProduct) throw new NotFoundException(PRODUCT_NOT_FOUND);
    const removedProduct = await this.prisma.Product.delete({ where: { id } })
    return removedProduct;
  }
}
