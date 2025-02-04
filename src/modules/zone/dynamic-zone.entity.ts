import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('dynamic_zones')
export class DynamicZoneEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'Unique identifier of the zone' })
  id: number;

  @Column()
  @ApiProperty({
    example: 'Central Zone',
    description: 'Name of the dynamic zone',
  })
  name: string;

  @ApiProperty({})
  @Column('geometry', { spatialFeatureType: 'Polygon', srid: 4326 })
  region: GeoJSON.Polygon;

  @ApiProperty()
  @Column({ type: 'float', default: 1.0 })
  multiplier: number;
}
