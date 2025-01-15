import { IsNumber, IsString } from 'class-validator';
import { IsNotEmpty } from 'class-validator';
import { GeoJSON } from 'geojson';

export class CreateZoneDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  multiplier: number;

  @IsNotEmpty()
  region: GeoJSON.Geometry;
}

export class UpdateZoneDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  multiplier: number;

  @IsNotEmpty()
  region: GeoJSON.Geometry;
}
