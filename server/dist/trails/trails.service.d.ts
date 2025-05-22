import { CreateTrailDto } from '../dto/create-trail.dto';
import { UpdateTrailDto } from '../dto/update-trail.dto';
import { Trail } from '../trail.entity';
import { Repository } from 'typeorm';
export declare class TrailsService {
    private readonly trailRepository;
    private trailsFilePath;
    constructor(trailRepository: Repository<Trail>);
    getTrailsFromJSON(): any;
    getTrails(): Promise<Trail[]>;
    getTrailById(id: number): Promise<Trail>;
    createTrail(createTrailDto: CreateTrailDto): Promise<Trail>;
    updateTrail(id: number, updateTrailDto: UpdateTrailDto): Promise<Trail>;
    deleteTrail(id: number): Promise<{
        message: string;
    }>;
}
