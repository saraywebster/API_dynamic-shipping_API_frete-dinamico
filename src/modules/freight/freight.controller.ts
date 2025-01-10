import { Body, Post, Controller, Get } from '@nestjs/common';
import { FreightService } from './freight.service';
import { CreateDynamicZoneDto } from './create-zone.dto';

@Controller('freight')
export class FreightController {
  constructor(private readonly freightService: FreightService) {}

  @Post('zones')
  create(@Body() dto: CreateDynamicZoneDto) {
    return this.freightService.createZone(dto);
  }

  // @Get('zones')
  // findAll() {
  //   return this.freightService.findAll();
  // }
}
