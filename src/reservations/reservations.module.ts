import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservation } from './reservation.entity';
import { Court } from 'src/courts/court.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reservation]), TypeOrmModule.forFeature([Court])],
  providers: [ReservationsService],
  controllers: [ReservationsController]
})
export class ReservationsModule {}
