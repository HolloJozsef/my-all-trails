import { TrailType } from './trails/trail-type.enum';
export declare class Trail {
    id: number;
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
