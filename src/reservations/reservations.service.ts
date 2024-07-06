import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from './reservation.entity';
import { Repository } from 'typeorm';
import { Space } from 'src/spaces/space.entity';
import { isUUID } from 'class-validator';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
    @InjectRepository(Space) private spaceRepository: Repository<Space>,
  ) {}

  async getReservations(): Promise<Reservation[]> {
    const reservations = await this.reservationRepository.find({
      relations: ['space'],
    });
    return reservations;
  }

  async getReservationById(id: string): Promise<Reservation> {
    if (!isUUID(id)) throw new BadRequestException();

    const reservation = await this.reservationRepository.findOne({
      where: { id },
      relations: ['space'],
    });

    if (!reservation) throw new NotFoundException();

    return reservation;
  }

  async createReservation(
    createReservationDto: CreateReservationDto,
  ): Promise<Reservation> {
    const { user, spaceId, reservationTime } = createReservationDto;

    const space = await this.spaceRepository.findOneBy({ id: spaceId });

    const reservation = this.reservationRepository.create({
      user,
      space,
      reservationTime,
    });

    await this.reservationRepository.save(reservation);

    return reservation;
  }

  async deleteReservation(id: string): Promise<void> {
    if (!isUUID(id)) throw new BadRequestException();

    const result = await this.reservationRepository.delete(id);
    if (result.affected === 0) throw new NotFoundException();
  }
}
