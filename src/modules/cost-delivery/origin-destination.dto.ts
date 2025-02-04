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
    example: [-46.655, -23.548],
    description: 'Longitude of the coordinate',
  })
  lng: number;

  @IsLatitude()
  @IsNotEmpty()
  @ApiProperty({
    example: [-46.655, -23.548],
    description: 'Latitude of the coordinate',
  })
  lat: number;
}

export class OriginDestinationDto {
  @ApiProperty()
  @ValidateNested()
  @Type(() => CoordinateLatLngDto)
  @IsNotEmpty()
  @IsObject()
  origin: CoordinateLatLngDto;

  @ApiProperty()
  @ValidateNested()
  @Type(() => CoordinateLatLngDto)
  @IsNotEmpty()
  @IsObject()
  destination: CoordinateLatLngDto;
}
