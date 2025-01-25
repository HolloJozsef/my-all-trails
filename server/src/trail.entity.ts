import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('trails')
export class Trail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column('text')
  directions: string;

  @Column('double precision')
  lat: number;

  @Column('double precision')
  lon: number;

  @Column('varchar')
  length: string;

  @Column('varchar')
  difficulty: string;

  @Column('decimal', { precision: 3, scale: 2 })
  rating: number;

  @Column({ name: 'estimated_time' })
  estimatedTime: string;

  @Column()
  location: string;

  @Column({ name: 'image_url' })
  imageUrl: string;
}
