import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('dynamic_zones')
export class DynamicZoneEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('geometry', { spatialFeatureType: 'Polygon', srid: 4326 })
  region: GeoJSON.Polygon;

  @Column({ type: 'float', default: 1.0 })
  multiplier: number;
}
