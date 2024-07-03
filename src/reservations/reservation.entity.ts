import { Court } from 'src/courts/court.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  user: string;

  @ManyToOne(() => Court, (court) => court.reservations)
  court: Court;

  @Column()
  reservationTime: Date;
}
