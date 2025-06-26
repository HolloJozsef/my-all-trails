
import { CreateTrailDto } from '../dto/create-trail.dto';
import { ITrail } from './trails.interface';
import { TrailType } from './trail-type.enum';

export class HikingTrail implements ITrail {
  name: string;
  description: string;
  directions: string;
  lat: number;
  lon: number;
  length: string;
  difficulty: string;
  rating: number;
  estimatedTime: string;
  location: string;
  imageUrl: string;
  readonly type = TrailType.HIKING;

  constructor(data: CreateTrailDto) {
    this.name = data.name;
    this.description = data.description;
    this.directions = data.directions;
    this.lat = data.lat;
    this.lon = data.lon;
    this.length = data.length;
    this.difficulty = data.difficulty;
    this.rating = data.rating;
    this.estimatedTime = data.estimatedTime;
    this.location = data.location;
    this.imageUrl = data.imageUrl;
  }

  getSafetyWarning(): string {
    return 'Hikers should bring sufficient water and be aware of changing weather conditions.';
  }

  getGearRecommendation(): string {
    return 'Recommended gear: Sturdy hiking boots, map, and a first-aid kit.';
  }
}