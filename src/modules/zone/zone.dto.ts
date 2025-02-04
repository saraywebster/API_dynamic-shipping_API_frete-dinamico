import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    example: 'Polygon',
    description: 'Type of geometry (GeoJSON)',
  })
  type: GeoJSON.Polygon['type'];

  @IsNotEmpty()
  @IsArray()
  @ApiProperty({
    type: Array,
    example: [
      [
        [-46.655, -23.548],
        [-46.655, -23.548],
        [-46.655, -23.548],
      ],
    ],
    description:
      'Polygon coordinates in GeoJSON format: [[lng, lat], [lng, lat], [lng, lat]]',
  })
  coordinates: number[][][];
}

export class CreateZoneDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Central Zone', description: 'Name of the zone' })
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: 1.5, description: 'Multiplier applied to the zone' })
  multiplier: number;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => RegionDto)
  @ApiProperty({
    type: () => RegionDto,
    description: 'Geographical region of the zone',
  })
  region: RegionDto;
}

export class UpdateZoneDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Central Zone',
    description: 'Updated name of the zone',
  })
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    example: 2.0,
    description: 'Updated multiplier applied to the zone',
  })
  multiplier: number;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => RegionDto)
  @ApiProperty({
    type: () => RegionDto,
    description: 'Updated geographical region of the zone',
  })
  region: RegionDto;
}
