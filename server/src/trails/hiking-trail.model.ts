
import { CreateTrailDto } from '../dto/create-trail.dto';
import { ITrail } from './trails.interface';
import { TrailType } from './trail-type.enum';

export class HikingTrail implements ITrail {
  name: string;
  description: string;
  difficulty: string;
  length: string;
  location: string;
  readonly type = TrailType.HIKING;

  constructor(data: CreateTrailDto) {
    this.name = data.name;
    this.description = data.description;
    this.difficulty = data.difficulty;
    this.length = data.length;
    this.location = data.location;
  }

  getSafetyWarning(): string {
    return 'Hikers should bring sufficient water and be aware of changing weather conditions.';
  }

  getGearRecommendation(): string {
    return 'Recommended gear: Sturdy hiking boots, map, and a first-aid kit.';
  }
}