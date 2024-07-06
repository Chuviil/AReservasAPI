import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Space } from './space.entity';
import { Repository } from 'typeorm';
import { CreateSpaceDto } from './dto/create-space.dto';
import { isUUID } from 'class-validator';

@Injectable()
export class SpacesService {
  constructor(
    @InjectRepository(Space) private spaceRepository: Repository<Space>,
  ) {}

  async getCourts(): Promise<Space[]> {
    const courts = await this.spaceRepository.find();
    return courts;
  }

  async getCourtById(id: string): Promise<Space> {
    if (!isUUID(id)) throw new BadRequestException();

    const court = await this.spaceRepository.findOneBy({ id });
    if (!court) throw new NotFoundException();
    return court;
  }

  async createCourt(createCourtDto: CreateSpaceDto): Promise<Space> {
    const { name, location } = createCourtDto;

    const court = this.spaceRepository.create({
      name,
      location,
    });

    await this.spaceRepository.save(court);

    return court;
  }
}
