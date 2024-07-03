import { Module } from '@nestjs/common';
import { CourtsService } from './courts.service';
import { CourtsController } from './courts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Court } from './court.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Court])],
  providers: [CourtsService],
  controllers: [CourtsController]
})
export class CourtsModule {}
