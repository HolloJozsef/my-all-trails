
import { CreateTrailDto } from '../dto/create-trail.dto';
import { ITrail } from './trails.interface';
import { TrailType } from './trail-type.enum';

export class BikingTrail implements ITrail {
  name: string;
  description: string;
  difficulty: string;
  length: string;
  location: string;
  readonly type = TrailType.BIKING;

  constructor(data: CreateTrailDto) {
    this.name = data.name;
    this.description = data.description;
    this.difficulty = data.difficulty;
    this.length = data.length;
    this.location = data.location;
  }

  getSafetyWarning(): string {
    return 'Cyclists must wear a helmet and yield to pedestrians.';
  }

  getGearRecommendation(): string {
    return 'Recommended gear: Helmet, tire repair kit, and gloves.';
  }
}