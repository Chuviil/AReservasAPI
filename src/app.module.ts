import { Module } from '@nestjs/common';
import { ReservationsModule } from './reservations/reservations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourtsModule } from './courts/courts.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'gestion_reservas',
    autoLoadEntities: true,
    synchronize: true,
  }),
    ReservationsModule,
    CourtsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
