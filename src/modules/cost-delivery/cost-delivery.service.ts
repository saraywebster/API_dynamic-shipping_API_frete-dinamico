import { Injectable } from '@nestjs/common';
import { OriginDestinationDto } from './origin-destination.dto';
import { ZoneRepository } from './zone.repository';

@Injectable()
export class CostDeliveryService {
  constructor(private readonly zoneRepository: ZoneRepository) {}
  async calculateDeliveryCost(dto: OriginDestinationDto) {
    const distance = this.calculateDistance(dto);

    const costZone = this.zoneRepository.CheckOriginOrDestinatioCost(dto);

    return { costZone };
  }
  calculateDistance(dto: OriginDestinationDto): number {
    const { origin, destination } = dto;
    const { lat: lat1, lng: lng1 } = origin;
    const { lat: lat2, lng: lng2 } = destination;
    const R = 6371;
    const dLat = this.degToRad(lat2 - lat1);
    const dLon = this.degToRad(lng2 - lng1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.degToRad(lat1)) *
        Math.cos(this.degToRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  private degToRad(degrees: number): number {
    return degrees * (Math.PI / 180);
  }
}
