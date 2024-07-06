import { Space } from 'src/spaces/space.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user: string;

  @ManyToOne(() => Space, (court) => court.reservations)
  space: Space;

  @Column()
  reservationTime: Date;
}
