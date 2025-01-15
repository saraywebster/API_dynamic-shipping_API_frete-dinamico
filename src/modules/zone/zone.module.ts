import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { DynamicZoneEntity } from './dynamic-zone.entity';
import { ZoneService } from './zone.service';
import { ZoneController } from './zone.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DynamicZoneEntity])],

  controllers: [ZoneController],
  providers: [ZoneService],
})
export class ZoneModule {}
