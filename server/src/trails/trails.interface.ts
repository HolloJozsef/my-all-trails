
import { TrailType } from './trail-type.enum';

export interface ITrail {
  name: string;
  description: string;
  difficulty: string;
  length: string;
  location: string;
  type: TrailType;

  getSafetyWarning(): string;
  getGearRecommendation(): string;
}