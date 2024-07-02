import { IsDateString, IsNotEmpty } from "class-validator";

export class CreateReservationDto {
    @IsNotEmpty()
    user: string;

    @IsNotEmpty()
    court: string;

    @IsNotEmpty()
    @IsDateString()
    reservationTime: Date;
  }