import { TrailsService } from './trails.service';
import { CreateTrailDto } from '../dto/create-trail.dto';
import { UpdateTrailDto } from '../dto/update-trail.dto';
import { Trail } from '../trail.entity';
export declare class TrailsController {
    private readonly trailsService;
    constructor(trailsService: TrailsService);
    getTrailById(id: number): Promise<Trail>;
    getAllTrails(): Promise<Trail[]>;
    createTrail(createTrailDto: CreateTrailDto): Promise<Trail>;
    updateTrail(id: string, updateTrailDto: UpdateTrailDto): Promise<Trail>;
    deleteTrail(id: string): Promise<{
        message: string;
    }>;
}
