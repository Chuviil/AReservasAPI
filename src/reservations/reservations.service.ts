import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from './reservation.entity';
import { Repository } from 'typeorm';
import { Court } from 'src/courts/court.entity';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
    @InjectRepository(Court) private courtRepository: Repository<Court>,
  ) {}

  async getReservations(): Promise<Reservation[]> {
    const reservations = await this.reservationRepository.find();
    return reservations;
  }

  async createReservation(
    createReservationDto: CreateReservationDto,
  ): Promise<Reservation> {
    const { user, courtId, reservationTime } = createReservationDto;

    const court = await this.courtRepository.findOneBy({ id: courtId });

    const reservation = this.reservationRepository.create({
      user,
      court,
      reservationTime,
    });

    await this.reservationRepository.save(reservation);

    return reservation;
  }
}
