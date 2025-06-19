import { CreateTrailDto } from 'src/dto/create-trail.dto';
import { ITrail } from './trails.interface';
export declare class TrailFactory {
    createTrail(createTrailDto: CreateTrailDto): ITrail;
}
