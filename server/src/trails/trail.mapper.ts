import { CreateTrailDto } from 'src/dto/create-trail.dto';
import { Trail as TrailEntity } from '../trail.entity';

// This function takes a database entity and converts it into our public DTO.
export function toTrailDto(data: TrailEntity): CreateTrailDto {
  const {
    name,
    description,
    directions,
    lat,
    lon,
    length,
    difficulty,
    rating,
    estimatedTime,
    location,
    imageUrl,
    type
  } = data;

  const trailDto: CreateTrailDto = {
    name,
    description,
    directions,
    lat,
    lon,
    length,
    difficulty,
    rating,
    estimatedTime,
    location,
    imageUrl,
    type
  };

  return trailDto;
}