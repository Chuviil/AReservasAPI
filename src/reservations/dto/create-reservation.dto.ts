import { IsDateString, IsNotEmpty, IsUUID } from "class-validator";

export class CreateReservationDto {
    @IsNotEmpty()
    user: string;

    @IsNotEmpty()
    @IsUUID()
    courtId: string;

    @IsNotEmpty()
    @IsDateString()
    reservationTime: Date;
  }