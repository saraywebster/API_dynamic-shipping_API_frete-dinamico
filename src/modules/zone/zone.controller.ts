import {
  Body,
  Post,
  Controller,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';

import { CreateZoneDto } from './zone.dto';
import { UpdateZoneDto } from './zone.dto';
import { ZoneService } from './zone.service';

@Controller('freight')
export class ZoneController {
  constructor(private readonly zoneService: ZoneService) {}

  @Post('zones')
  create(@Body() dto: CreateZoneDto) {
    return this.zoneService.createZone(dto);
  }

  @Get('zones')
  getDynamicZones() {
    return this.zoneService.findAllZones();
  }

  @Get('zones/:id')
  getZoneById(@Param('id') id: number) {
    return this.zoneService.findZoneById(id);
  }

  @Put('zones/:id')
  putZoneById(@Param('id') id: number, @Body() dto: UpdateZoneDto) {
    return this.zoneService.updateZone(id, dto);
  }

  @Delete('zones/:id')
  deleteZoneById(@Param('id') id: number) {
    return this.zoneService.deleteZone(id);
  }
}
