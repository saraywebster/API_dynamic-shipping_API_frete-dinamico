import { Type } from 'class-transformer';
import {
  IsArray,
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
  coordinates: number[][][];
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
