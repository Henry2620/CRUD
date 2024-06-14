import { Module } from '@nestjs/common';
import { CarModule } from './car/car.module';
import { PrismaService } from './prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [CarModule, PrismaModule, CarsModule],
  providers: [PrismaService],
})
export class AppModule {}
