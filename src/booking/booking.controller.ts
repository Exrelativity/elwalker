import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Scopes } from 'src/modules/auth/scope.decorator';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  create(@Body() name: string, city: string, region: string, source: string, destination: string, createBookingDto: CreateBookingDto) {
    return this.bookingService.createBooking(name, city, region, source, destination, createBookingDto);
  }

  @Get()
  findAll() {
    return this.bookingService.findAllBooking();
  }

  @Get(':category')
  findMany(@Body() status: string, category: string,) {
    return this.bookingService.findManyBooking(status, category);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.bookingService.findOneBooking(+id);
  }

  @Patch(':id')
  // @Scopes('user-{userId}:write-info')
  update( 
    // @Param('userId', ParseIntPipe) userId: number,
    @Param('id', ParseIntPipe) id: number, 
    @Body() updateBookingDto: UpdateBookingDto) {
    return this.bookingService.updateBooking(id, updateBookingDto);
  }

  @Delete(':id')
  // @Scopes('user-{userId}:delete-booking-{id}')
  remove(
    // @Param('userId', ParseIntPipe) userId: number,
    @Param('id', ParseIntPipe) id: number) {
    return this.bookingService.removeBooking(id);
  }
}
