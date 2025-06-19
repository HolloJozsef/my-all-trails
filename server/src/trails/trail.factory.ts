
import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateTrailDto } from 'src/dto/create-trail.dto';
import { ITrail } from './trails.interface';
import { TrailType } from './trail-type.enum';
import { HikingTrail } from './hiking-trail.model';
import { BikingTrail } from './biking-trail.model';


@Injectable()
export class TrailFactory {
  createTrail(createTrailDto: CreateTrailDto): ITrail {
    switch (createTrailDto.type) {
      case TrailType.HIKING:
        return new HikingTrail(createTrailDto);

      case TrailType.BIKING:
        return new BikingTrail(createTrailDto);

      default:
        throw new BadRequestException(`Invalid trail type: ${createTrailDto.type}`);
    }
  }
}