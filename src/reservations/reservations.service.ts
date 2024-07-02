import { Injectable } from '@nestjs/common';
import { Reservation } from './reservations.model';
import { CreateReservationDto } from './dto/create-reservation.dto';

@Injectable()
export class ReservationsService {
    private Reservations: Reservation[] = [];

    getAllReservations(): Reservation[] {
        return this.Reservations;
    }

    createReservation(createReservationDto: CreateReservationDto): Reservation {
        const {court, user, reservationTime} = createReservationDto;

        const reservation: Reservation = {
            id: (this.Reservations.length + 1).toString(),
            court,
            user,
            reservationTime: new Date(reservationTime),
        };

        this.Reservations.push(reservation);
        return reservation;
    }
}
