import { Body, Controller, Get, Post } from '@nestjs/common';
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

    @Post()
    createReservation(@Body() createReservationDto: CreateReservationDto): Promise<Reservation> {
        return this.reservationsService.createReservation(createReservationDto);
    }
}
