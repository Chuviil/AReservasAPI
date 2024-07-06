import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SpacesService } from './spaces.service';
import { Space } from './space.entity';
import { CreateSpaceDto } from './dto/create-space.dto';

@Controller('spaces')
export class SpacesController {
  constructor(private courtService: SpacesService) {}

  @Get()
  getCourts(): Promise<Space[]> {
    return this.courtService.getCourts();
  }

  @Get('/:id')
  getCourtById(@Param('id') id: string): Promise<Space> {
    return this.courtService.getCourtById(id);
  }

  @Post()
  createCourt(@Body() createCourtDto: CreateSpaceDto): Promise<Space> {
    return this.courtService.createCourt(createCourtDto);
  }
}
