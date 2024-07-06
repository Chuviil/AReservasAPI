import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { Reservation } from './reservation.entity';

@Controller('reservations')
export class ReservationsController {
  constructor(private reservationsService: ReservationsService) {}

  @Get()
  getReservations(): Promise<Reservation[]> {
    return this.reservationsService.getReservations();
  }

  @Get('/:id')
  getReservationById(@Param('id') id: string): Promise<Reservation> {
    return this.reservationsService.getReservationById(id);
  }

  @Post()
  createReservation(
    @Body() createReservationDto: CreateReservationDto,
  ): Promise<Reservation> {
    return this.reservationsService.createReservation(createReservationDto);
  }

  @Delete('/:id')
  deleteReservation(@Param('id') id: string): Promise<void> {
    return this.reservationsService.deleteReservation(id);
  }
}
