import { IsArray, IsDate, IsIn, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateOrderDto {

    @IsNumber()
    @IsOptional()
    totalPrice: number;

    @IsArray()
    @IsOptional()
    products: string[]

    @IsString()
    @IsIn(['ACTIVE' , 'PROCESSING' , 'INACTIVE'])
    @IsOptional()
    status?: 'ACTIVE' | 'PROCESSING' | 'INACTIVE'

    @IsNumber()
    @IsOptional()
    userId: number;

    @IsDate()
    @IsOptional()
    createdAt: Date;

    @IsDate()
    @IsOptional()
    updatedAt: Date;

}

