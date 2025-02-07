import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DynamicZoneEntity } from './dynamic-zone.entity';
import { CreateZoneDto, UpdateZoneDto } from './zone.dto';
import { ZoneService } from './zone.service';
@ApiTags('zone')
@Controller('zone')
export class ZoneController {
  constructor(private readonly zoneService: ZoneService) {}

  @Post()
  @ApiOperation({
    summary: 'Create zone',
    description: 'create a new zone with a defined multiplier and region',
  })
  @ApiResponse({
    status: 201,
    description: 'Zone successfully created',
    type: DynamicZoneEntity,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - Invalid data format',
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  create(@Body() dto: CreateZoneDto) {
    return this.zoneService.createZone(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Retrieve all zones',
    description: 'Returns a list of all zones',
  })
  @ApiResponse({
    status: 200,
    description: 'List of zones retrieved successfully',
    type: [DynamicZoneEntity],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  getDynamicZones() {
    return this.zoneService.findAllZones();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Retrieve zone by id',
    description: 'Returns a specific zone',
  })
  @ApiParam({ name: 'id', description: 'Id of the zone to retrieve' })
  @ApiResponse({
    status: 200,
    description: 'Zone retrieved successfully',
    type: DynamicZoneEntity,
  })
  @ApiResponse({ status: 404, description: 'Zone not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  getZoneById(@Param('id') id: number) {
    return this.zoneService.findZoneById(id);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Update zone by id',
    description: 'Update the details of a zone',
  })
  @ApiParam({ name: 'id', example: 1, description: 'Id of the zone to update' })
  @ApiResponse({ status: 200, description: 'Zone updated sucessfully' })
  @ApiResponse({
    status: 400,
    description: 'Bad request - Invalid data format',
  })
  @ApiResponse({ status: 404, description: 'Zone not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  putZoneById(@Param('id') id: number, @Body() dto: UpdateZoneDto) {
    return this.zoneService.updateZone(id, dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete zone by id',
    description: 'Remove a zone from the system',
  })
  @ApiParam({ name: 'id', example: 1, description: 'Id of the zone to delete' })
  @ApiResponse({ status: 200, description: 'Zone deleted sucessfully' })
  @ApiResponse({ status: 404, description: 'Zone not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  deleteZoneById(@Param('id') id: number) {
    return this.zoneService.deleteZone(id);
  }
}
