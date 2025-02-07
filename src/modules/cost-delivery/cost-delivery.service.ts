import { Injectable } from '@nestjs/common';
import { CostResponseDto, OriginDestinationDto } from './cost-delivery.dto';
import { ZoneRepository } from './zone.repository';

@Injectable()
export class CostDeliveryService {
  constructor(private readonly zoneRepository: ZoneRepository) {}

  private calculateDistance(dto: OriginDestinationDto): number {
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

    const km = (R * c).toFixed(2);

    return Number(km);
  }

  private degToRad(degrees: number): number {
    return degrees * (Math.PI / 180);
  }

  async calculateDeliveryCost(
    dto: OriginDestinationDto,
  ): Promise<CostResponseDto> {
    const distance = this.calculateDistance(dto);

    const multiplier = await this.zoneRepository.findHigherMultiplier(dto);

    const cost = Math.max(distance * multiplier, 7);
    const resp = {
      distance: distance,
      multiplier: multiplier,
      minCost: 7.0,
      distanceCost: 1.0,
      totalCost: cost,
      currency: 'BRL',
    };

    return resp;
  }
}
