import { Body, Controller, Post } from '@nestjs/common';
import { CostDeliveryService } from './cost-delivery.service';
import { OriginDestinationDto } from './origin-destination.dto';
@Controller('cost-delivery')
export class CostDeliveryController {
  constructor(private readonly costDeliveryService: CostDeliveryService) {}

  @Post('distance')
  async createDeliveryCost(@Body() dto: OriginDestinationDto) {
    const cost = this.costDeliveryService.calculateDeliveryCost(dto);

    return cost;
  }
}
