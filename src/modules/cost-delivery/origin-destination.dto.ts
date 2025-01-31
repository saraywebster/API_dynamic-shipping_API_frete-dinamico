import { IsLatitude, IsLongitude, ValidateNested } from 'class-validator';

import { Type } from 'class-transformer';

export class CoordinateLatLngDto {
  @IsLongitude()
  lng: number;

  @IsLatitude()
  lat: number;
}

export class OriginDestinationDto {
  @ValidateNested()
  @Type(() => CoordinateLatLngDto)
  origin: CoordinateLatLngDto;

  @ValidateNested()
  @Type(() => CoordinateLatLngDto)
  destination: CoordinateLatLngDto;
}
