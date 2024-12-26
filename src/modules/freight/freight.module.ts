import { Module } from '@nestjs/common';
import { FreightController } from './freight.controller';
import { FreightService } from './freight.service';
import { FreightController } from './freight.controller';
import { Controller } from './.controller';
import { FreightController } from './freight.controller';

@Module({
  controllers: [FreightController, Controller],
  providers: [FreightService]
})
export class FreightModule {}
