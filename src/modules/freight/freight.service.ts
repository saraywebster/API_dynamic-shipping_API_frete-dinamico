import { ConflictException, Injectable } from '@nestjs/common';
import { DynamicZoneEntity } from './dynamic-zone.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateDynamicZoneDto } from './create-zone.dto';
@Injectable()
export class FreightService {
  constructor(
    @InjectRepository(DynamicZoneEntity)
    private dynamicZoneEntity: Repository<DynamicZoneEntity>,
  ) {}

  async createZone(dto: CreateDynamicZoneDto) {
    const { name, area, multiplier } = dto;

    const existingZone = await this.dynamicZoneEntity.findOne({
      where: { name },
    });

    if (existingZone) {
      throw new ConflictException('Zona já cadastrada');
    }

    const newzone = this.dynamicZoneEntity.create({
      name,
      area,
      multiplier,
    });

    return this.dynamicZoneEntity.save(newzone);
  }
  //async getDynamicZones() {}
}
