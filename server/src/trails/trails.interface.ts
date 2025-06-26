
import { TrailType } from './trail-type.enum';

export interface ITrail {
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
  type:TrailType

  getSafetyWarning(): string;
  getGearRecommendation(): string;
}