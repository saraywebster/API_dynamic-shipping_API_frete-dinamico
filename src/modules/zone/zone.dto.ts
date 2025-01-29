import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

export class RegionDto {
  @IsNotEmpty()
  @IsString()
  type: GeoJSON.Polygon['type'];

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({each: true})
  coordinates: GeoJSON.Polygon['coordinates'];
}

export class CreateZoneDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  multiplier: number;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => RegionDto)
  region: RegionDto;
}

export class UpdateZoneDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  multiplier: number;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => RegionDto)
  region: RegionDto;
}
