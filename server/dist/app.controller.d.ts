import { AppService } from './app.service';
import { CreateTrailDto } from './dto/create-trail.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getAllTrails(): Promise<import("./trail.entity").Trail[]>;
    createTrail(createTrailDto: CreateTrailDto): Promise<import("./trail.entity").Trail>;
}
