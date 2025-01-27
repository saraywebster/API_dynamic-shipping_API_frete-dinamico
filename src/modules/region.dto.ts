import { IsNotEmpty, IsString } from 'class-validator';

export class RegionDto {
  @IsNotEmpty()
  @IsString()
  type: GeoJSON.Polygon['type'];

  @IsNotEmpty()
  coordinates: GeoJSON.Polygon['coordinates'];
}
