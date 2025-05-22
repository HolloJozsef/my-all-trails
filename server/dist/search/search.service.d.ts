import { Trail } from '../trail.entity';
import { Repository } from 'typeorm';
export declare class SearchService {
    private readonly trailRepository;
    constructor(trailRepository: Repository<Trail>);
    searchTrails(query: string): Promise<Trail[]>;
}
