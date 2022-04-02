import { IsArray, IsDate, IsIn, IsNumber, IsOptional, IsString, IsUrl } from "class-validator"

export class CreateProductDto {

    @IsString()
    @IsOptional()
    name: string;

    @IsArray()
    @IsUrl()
    @IsOptional()
    image: string[];

    @IsString()
    @IsOptional()
    category: string;

    @IsString()
    @IsOptional()
    address: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsString()
    @IsIn(['NO_PREFERENCE', 'ACTIVE', 'INACTIVE'])
    @IsOptional()
    status?: 'NO_PREFERENCE' | 'ACTIVE' | 'INACTIVE'

    @IsNumber()
    @IsOptional()
    price: number;

    @IsDate()
    @IsOptional()
    createdAt: Date;

    @IsDate()
    @IsOptional()
    updatedAt: Date;
}
