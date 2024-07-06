import { IsDateString, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateReservationDto {
  @IsNotEmpty()
  user: string;

  @IsNotEmpty()
  @IsUUID()
  spaceId: string;

  @IsNotEmpty()
  @IsDateString()
  reservationTime: Date;
}
