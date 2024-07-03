import { IsNotEmpty } from "class-validator";

export class CreateCourtDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    location: string;
}