import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DynamicZoneEntity } from '../zone/dynamic-zone.entity';
import { OriginDestinationDto } from './origin-destination.dto';

@Injectable()
export class ZoneRepository {
  constructor(
    @InjectRepository(DynamicZoneEntity)
    private readonly zoneRepository: Repository<DynamicZoneEntity>,
  ) {}

  async findHigherMultiplier(dto: OriginDestinationDto) {
    const { origin, destination } = dto;

    const zone = await this.zoneRepository
      .createQueryBuilder('dynamic_zones')
      .where(
        `ST_Contains(dynamic_zones.region, ST_SetSRID(ST_MakePoint(:originlng, :originlat), 4326)) OR 
      ST_Contains(dynamic_zones.region, ST_SetSRID(ST_MakePoint(:destinationlng, :destinationlat), 4326))`,
        {
          originlng: origin.lng,
          originlat: origin.lat,
          destinationlng: destination.lng,
          destinationlat: destination.lat,
        },
      )
      .orderBy('dynamic_zones.multiplier', 'DESC')
      .getOne();

    return zone ? zone.multiplier : 1;
  }
}
