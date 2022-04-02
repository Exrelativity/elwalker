import { IsArray, IsDate, IsIn, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateBookingDto {

    @IsNumber()
    @IsOptional()
    totalPrice: number;

    @IsArray()
    @IsOptional()
    inventorys: string[];

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

