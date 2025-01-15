import { ConflictException, Injectable } from '@nestjs/common';
import { DynamicZoneEntity } from './dynamic-zone.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateZoneDto, UpdateZoneDto } from './zone.dto';
import { dot } from 'node:test/reporters';
import { find } from 'rxjs';
@Injectable()
export class ZoneService {
  constructor(
    @InjectRepository(DynamicZoneEntity)
    private dynamicZoneEntity: Repository<DynamicZoneEntity>,
  ) {}

  async createZone(dto: CreateZoneDto) {
    const { name, region, multiplier } = dto;

    // const existingZone = await this.dynamicZoneEntity.findOne({
    //   where: { name },
    // });

    // if (existingZone) {
    //   throw new ConflictException('Zona já cadastrada');
    // }

    const newzone = this.dynamicZoneEntity.create({
      name,
      region,
      multiplier,
    });

    return this.dynamicZoneEntity.save(newzone);
  }

  async findAllZones() {
    const zones = await this.dynamicZoneEntity.find();
    return zones;
  }

  async findZoneById(id: number) {
    const zone = await this.dynamicZoneEntity.findOneByOrFail({ id });
    return zone;
  }
  async updateZone(id: number, dto: UpdateZoneDto) {
    await this.dynamicZoneEntity.update(id, dto);
    return this.findZoneById(id);
  }

  async deleteZone(id: number) {
    return await this.dynamicZoneEntity.delete(id);
  }
}
