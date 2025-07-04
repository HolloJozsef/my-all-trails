import { TrailType } from 'src/trails/trail-type.enum';
export declare class CreateTrailDto {
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
    type: TrailType;
}
