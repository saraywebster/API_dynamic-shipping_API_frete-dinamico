import { IsNumber, IsString } from 'class-validator';
import { IsNotEmpty } from 'class-validator';
import { GeoJSON } from 'geojson';

export class CreateDynamicZoneDto {
  @IsString() name: string;

  @IsNumber() multiplier: number;

  @IsNotEmpty()
  area: GeoJSON.Geometry;
}
