import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CostResponseDto, OriginDestinationDto } from './cost-delivery.dto';
import { CostDeliveryService } from './cost-delivery.service';

@ApiTags('cost-delivery')
@Controller('cost-delivery')
export class CostDeliveryController {
  constructor(private readonly costDeliveryService: CostDeliveryService) {}

  @Post()
  @ApiOperation({ summary: 'create delivery cost' })
  @ApiResponse({
    status: 201,
    description: 'delivery cost success',
    type: CostResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request - invalid data format',
  })
  async createDeliveryCost(
    @Body() dto: OriginDestinationDto,
  ): Promise<CostResponseDto> {
    //   console.log('📥 Request Body:', JSON.stringify(body, null, 2));
    // return { message: "Recebido com sucesso!" };

    const cost = this.costDeliveryService.calculateDeliveryCost(dto);

    return cost;
  }
}
