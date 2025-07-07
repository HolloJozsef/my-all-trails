import { PickType } from '@nestjs/swagger';
import { Trail } from '../trail.entity';

export class TrailResponseDto extends PickType(Trail, [
  'id',
  'name',
  'description',
  'directions',
  'lat',
  'lon',
  'length',
  'difficulty',
  'rating',
  'estimatedTime',
  'location',
  'imageUrl',
  'type',
] as const) {}
