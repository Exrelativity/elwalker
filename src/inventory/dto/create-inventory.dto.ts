import { IsArray, IsDate, IsIn, IsNumber, IsOptional, IsString, IsUrl } from "class-validator";

export class CreateInventoryDto {

        @IsString()
        @IsOptional()
        name: string;

        @IsString()
        @IsOptional()
        city: string;

        @IsString()
        @IsOptional()
        region: string;

        @IsString()
        @IsOptional()
        timezone: string;

        @IsString()
        @IsIn(['NO_PREFERENCE', 'ACTIVE', 'INACTIVE'])
        @IsOptional()
        status?: 'NO_PREFERENCE' | 'ACTIVE' | 'INACTIVE'


        @IsString()
        @IsOptional()
        countryCode: string;

        @IsString()
        @IsOptional()
        address: string;

        @IsNumber()
        @IsOptional()
        sourcelatitude: number;


        @IsNumber()
        @IsOptional()
        sourcelongitude: number;

        @IsNumber()
        @IsOptional()
        destinationLatitude: number;

        @IsNumber()
        @IsOptional()
        destinationLongitude: number;


        @IsString()
        @IsOptional()
        source: string;

        @IsString()
        @IsOptional()
        destination: string;

        @IsString()
        @IsOptional()
        category: string;

        @IsArray()
        @IsUrl()
        @IsOptional()
        image: string[];

        @IsString()
        @IsOptional()
        description: string;

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
