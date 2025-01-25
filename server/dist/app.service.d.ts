import { Trail } from './trail.entity';
import { Repository } from 'typeorm';
import { CreateTrailDto } from './dto/create-trail.dto';
export declare class AppService {
    private readonly trailRepository;
    private trailsFilePath;
    constructor(trailRepository: Repository<Trail>);
    getTrailsFromJSON(): any;
    getTrails(): Promise<Trail[]>;
    createTrail(createTrailDto: CreateTrailDto): Promise<Trail>;
}
