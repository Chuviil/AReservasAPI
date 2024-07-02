import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { Reservation } from './reservations.model';
import { CreateReservationDto } from './dto/create-reservation.dto';

@Controller('reservations')
export class ReservationsController {
    constructor(private reservationsService: ReservationsService) {}

    @Get()
    getReservations(): Reservation[] {
        return this.reservationsService.getAllReservations();
    }

    @Post()
    createReservation(@Body() createReservationDto: CreateReservationDto): Reservation {

        return this.reservationsService.createReservation(createReservationDto);
    }
}
