import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as fs from 'fs';
import * as path from 'path';
import { Trail } from './trail.entity';
import { Repository } from 'typeorm';
import { CreateTrailDto } from './dto/create-trail.dto';

@Injectable()
export class AppService {
  private trailsFilePath = path.join(__dirname, '../data/trails.json');
  constructor(
    @InjectRepository(Trail)
    private readonly trailRepository: Repository<Trail>,
  ) {}

  getTrailsFromJSON(): any {
    const data = fs.readFileSync(this.trailsFilePath, 'utf8');
    return JSON.parse(data);
  }

  async getTrails(): Promise<Trail[]> {
    return this.trailRepository.find();
  }

  async createTrail(createTrailDto: CreateTrailDto): Promise<Trail> {
    try {
      const trail = this.trailRepository.create(createTrailDto);
      return await this.trailRepository.save(trail);
    } catch (error) {
      throw new BadRequestException(`Failed to create trail: ${error}`);
    }
  }
}
