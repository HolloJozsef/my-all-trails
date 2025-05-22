import { Trail } from '../trail.entity';
import { SearchService } from './search.service';
export declare class SearchController {
    private readonly searchService;
    constructor(searchService: SearchService);
    searchTrails(query: string): Promise<Trail[]>;
}
