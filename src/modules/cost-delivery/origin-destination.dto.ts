import {
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsObject,
  ValidateNested,
} from 'class-validator';

import { Type } from 'class-transformer';

export class CoordinateLatLngDto {
  @IsLongitude()
  @IsNotEmpty()
  lng: number;

  @IsLatitude()
  @IsNotEmpty()
  lat: number;
}

export class OriginDestinationDto {
  @ValidateNested()
  @Type(() => CoordinateLatLngDto)
  @IsNotEmpty()
  @IsObject()
  origin: CoordinateLatLngDto;

  @ValidateNested()
  @Type(() => CoordinateLatLngDto)
  @IsNotEmpty()
  @IsObject()
  destination: CoordinateLatLngDto;
}
