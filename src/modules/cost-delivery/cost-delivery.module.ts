import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DynamicZoneEntity } from '../zone/dynamic-zone.entity';
import { CostDeliveryController } from './cost-delivery.controller';
import { CostDeliveryService } from './cost-delivery.service';
import { ZoneRepository } from './zone.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DynamicZoneEntity])],
  providers: [CostDeliveryService, ZoneRepository],
  controllers: [CostDeliveryController],
})
export class CostDeliveryModule {}
