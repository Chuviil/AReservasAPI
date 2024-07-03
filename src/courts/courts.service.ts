import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Court } from './court.entity';
import { Repository } from 'typeorm';
import { CreateCourtDto } from './dto/create-court.dto';

@Injectable()
export class CourtsService {
    constructor(@InjectRepository(Court) private courtRepository: Repository<Court>) {}

    async getCourts(): Promise<Court[]> {
        const courts = await this.courtRepository.find();
        return courts;
    }

    async getCourtById(id: string): Promise<Court> {
        const court = await this.courtRepository.findOneBy({id});
        return court;
    }

    async createCourt(createCourtDto: CreateCourtDto): Promise<Court> {
        const { name, location } = createCourtDto;

        const court = this.courtRepository.create({
            name,
            location
        });

        await this.courtRepository.save(court);

        return court;
    }
}
