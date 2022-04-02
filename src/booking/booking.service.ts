import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { BookingInput } from './interfaces/booking.interface';
import { PrismaService } from '../../providers/prisma/prisma.service';
import { BOOKING_EXIT, BOOKING_NOT_FOUND, NO_SUCH_SERVICE } from 'src/errors/errors.constants';


@Injectable()
export class BookingService {

  constructor(
    private prisma: PrismaService,
  ) { }


  async createBooking(name: string, city: string, region: string, source: string, destination: string, createBookingDto: CreateBookingDto): Promise<BookingInput> {
    const testBooking = await this.prisma.Booking.findUnique({ where: { name, city, region, source, destination } });
    if (testBooking) throw new NotFoundException(BOOKING_EXIT)
    const createdBooking = new this.prisma.Booking.create({ createBookingDto });
    return createdBooking;
  }

  async findManyBooking(
    status: string,
    createdAt: Date,
  ): Promise<BookingInput[]> {
    const manyBookinglist = await this.prisma.Booking.findMany({
      where: { status },
      orderBy: { createdAt }
    })
    if (!manyBookinglist) throw new NotFoundException(NO_SUCH_SERVICE);
    return manyBookinglist;
  }

  async findAllBooking(): Promise<BookingInput[]> {
    const allBookinglist = await this.prisma.Booking.findMany({});
    if (!allBookinglist) throw new NotFoundException(NO_SUCH_SERVICE);
    return allBookinglist;
  }

  async findOneBooking(id: number): Promise<BookingInput> {
    const OneBooking = await this.prisma.Booking.findUnique({
      where: { id },
    });
    if (!OneBooking) throw new NotFoundException(BOOKING_NOT_FOUND);
    return OneBooking;
  }

  async updateBooking(id: number, updateBookingDto: UpdateBookingDto): Promise<BookingInput> {
    const testBooking = await this.prisma.Booking.findUnique({ where: { id } });
    if (!testBooking) throw new NotFoundException(BOOKING_NOT_FOUND);
    const updatedBooking = await this.prisma.Booking.Update({
      where: { id }, updateBookingDto
    });
    return updatedBooking;
  }

  async removeBooking(id: number): Promise<BookingInput> {
    const testBooking = await this.prisma.Booking.findUnique({ where: { id } });
    if (!testBooking) throw new NotFoundException(BOOKING_NOT_FOUND);
    const removedBooking = await this.prisma.Booking.delete({ where: { id } })
    return removedBooking;
  }
}
