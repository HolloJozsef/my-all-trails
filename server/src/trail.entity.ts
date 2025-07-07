import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { TrailType } from './trails/trail-type.enum';
import { ApiProperty } from '@nestjs/swagger';

@Entity('trails')
export class Trail {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'The unique ID of the trail' })
  id: number;

  @Column()
  @ApiProperty({ example: 'Sunset Trail', description: 'The name of the trail' })
  name: string;

  @Column('text')
  @ApiProperty({ example: 'A beautiful sunset trail with scenic views.', description: 'Description of the trail' })
  description: string;

  @Column('text')
  @ApiProperty({ example: 'Follow the red markers.', description: 'Directions for the trail' })
  directions: string;

  @Column('double precision')
  @ApiProperty({ example: 45.54, description: 'Latitude coordinate' })
  lat: number;

  @Column('double precision')
  @ApiProperty({ example: -74.006, description: 'Longitude coordinate' })
  lon: number;

  @Column('varchar')
  @ApiProperty({ example: '5 miles', description: 'Length of the trail' })
  length: string;

  @Column('varchar')
  @ApiProperty({ example: 'easy', description: 'Level of difficulty' })
  difficulty: string;

  @Column('decimal', { precision: 3, scale: 2 })
  @ApiProperty({ example: 4.5, description: 'Rating out of 5', minimum: 0, maximum: 5 })
  rating: number;

  @Column({ name: 'estimated_time' })
  @ApiProperty({ example: '2 hours', description: 'Estimated time to complete the trail' })
  estimatedTime: string;

  @Column()
  @ApiProperty({ example: 'Austria', description: 'Country/Region' })
  location: string;

  @Column({ name: 'image_url' })
  @ApiProperty({ example: 'https://example.com/trail.jpg', description: 'Image URL of the trail' })
  imageUrl: string;

  @Column({
    type: 'varchar',
    enum: TrailType,
    default: TrailType.HIKING,
  })
  @ApiProperty({ enum: TrailType, example: TrailType.HIKING, description: 'The type of the trail' })
  type: TrailType;
}
