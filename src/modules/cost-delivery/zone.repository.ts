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

  private async getZoneDetails(lng: number, lat: number) {
    const result = await this.zoneRepository
      .createQueryBuilder('dynamic_zones')
      .where(
        `ST_Contains(zone.geometry, ST_SetSRID(ST_MakePoint(:lng, :lat), 4326))`,
        { lng, lat },
      )
      .getOne();

    if (result) {
      return { inside: true, multiplier: result.multiplier };
    }

    return { inside: false, multiplier: 1 };
  }

  async CheckOriginOrDestinatioCost(dto: OriginDestinationDto) {
    const { origin, destination } = dto;

    const originDetailsMultiplier = await this.getZoneDetails(
      origin.lng,
      origin.lat,
    );
    const destinationDetailsMultiplier = await this.getZoneDetails(
      destination.lng,
      destination.lat,
    );

    return {
      originInside: originDetailsMultiplier.inside,
      originMultiplier: originDetailsMultiplier.multiplier,
      destinationInside: destinationDetailsMultiplier.inside,
      destinationMultiplier: destinationDetailsMultiplier.multiplier,
    };
  }
}
