import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CostDeliveryService } from './cost-delivery.service';
import { OriginDestinationDto } from './origin-destination.dto';
import { ZoneRepository } from './zone.repository';
@Controller('cost-delivery')
export class CostDeliveryController {
  constructor(private readonly costDeliveryService: CostDeliveryService) {}

  @Post('distance')
  @ApiOperation({ summary: 'create delivery cost' })
  @ApiResponse({
    status: 201,
    description: 'delivery cost success',
    type: ZoneRepository,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request - invalid data format',
  })
  async createDeliveryCost(@Body() dto: OriginDestinationDto) {
    //   console.log('📥 Request Body:', JSON.stringify(body, null, 2));
    // return { message: "Recebido com sucesso!" };

    const cost = this.costDeliveryService.calculateDeliveryCost(dto);

    return cost;
  }
}
