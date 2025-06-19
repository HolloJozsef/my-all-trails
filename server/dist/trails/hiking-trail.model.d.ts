import { CreateTrailDto } from '../dto/create-trail.dto';
import { ITrail } from './trails.interface';
import { TrailType } from './trail-type.enum';
export declare class HikingTrail implements ITrail {
    name: string;
    description: string;
    difficulty: string;
    length: string;
    location: string;
    readonly type = TrailType.HIKING;
    constructor(data: CreateTrailDto);
    getSafetyWarning(): string;
    getGearRecommendation(): string;
}
