import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Geometry } from 'geojson';

@Entity('dynamic_zones')
export class DynamicZoneEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('geometry', { spatialFeatureType: 'Polygon', srid: 4326 })
  region: Geometry;

  @Column({ type: 'float', default: 1.0 })
  multiplier: number;
}
