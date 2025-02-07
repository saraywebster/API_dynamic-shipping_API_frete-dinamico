import {
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsObject,
  ValidateNested,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CoordinateLatLngDto {
  @IsLongitude()
  @IsNotEmpty()
  @ApiProperty({
    example: -46.63331,
    description: 'Longitude of the coordinate',
  })
  lng: number;

  @IsLatitude()
  @IsNotEmpty()
  @ApiProperty({
    example: -23.55052,
    description: 'Latitude of the coordinate',
  })
  lat: number;
}

export class OriginDestinationDto {
  @ValidateNested()
  @Type(() => CoordinateLatLngDto)
  @IsNotEmpty()
  @IsObject()
  @ApiProperty({
    type: () => CoordinateLatLngDto,
    example: {
      lng: -46.63331,
      lat: -23.55052,
    },
    description: 'Coordinates of the origin',
  })
  origin: CoordinateLatLngDto;

  @ValidateNested()
  @Type(() => CoordinateLatLngDto)
  @IsNotEmpty()
  @IsObject()
  @ApiProperty({
    type: () => CoordinateLatLngDto,
    example: {
      lng: -43.17299,
      lat: -22.90684,
    },
    description: 'Coordinates of the destination',
  })
  destination: CoordinateLatLngDto;
}

export class CostResponseDto {
  @ApiProperty({
    example: 360.75,
    description: 'Distance between the origin and the destination',
  })
  distance: number;

  @ApiProperty({
    example: 1,
    description: 'Multiplier applied to the zone',
  })
  multiplier: number;

  @ApiProperty({
    example: 7.0,
    description: 'Minimum cost for the delivery',
  })
  minCost: number;

  @ApiProperty({ example: 1.0, description: 'Cost per kilometer' })
  distanceCost: number;

  @ApiProperty({ example: 360.75, description: 'Total cost for the delivery' })
  totalCost: number;

  @ApiProperty({ example: 'BRL', description: 'Currency' })
  currency: string;
}
