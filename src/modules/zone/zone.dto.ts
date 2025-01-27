import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { RegionDto } from '../region.dto';
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
