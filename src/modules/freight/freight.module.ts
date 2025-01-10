import { Module } from '@nestjs/common';
import { FreightController } from './freight.controller';
import { FreightService } from './freight.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DynamicZoneEntity } from './dynamic-zone.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DynamicZoneEntity])],

  controllers: [FreightController],
  providers: [FreightService],
})
export class FreightModule {}
