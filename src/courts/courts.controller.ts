import { Body, Controller, Get, Post } from '@nestjs/common';
import { CourtsService } from './courts.service';
import { Court } from './court.entity';
import { CreateCourtDto } from './dto/create-court.dto';

@Controller('courts')
export class CourtsController {
    constructor (private courtService: CourtsService) {}

    @Get()
    getCourts(): Promise<Court[]> {
        return this.courtService.getCourts();
    }

    @Post()
    createCourt(@Body() createCourtDto: CreateCourtDto): Promise<Court> {
        return this.courtService.createCourt(createCourtDto);
    }
}
