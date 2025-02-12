import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as fs from 'fs';
import * as path from 'path';
import { CreateTrailDto } from '../dto/create-trail.dto';
import { UpdateTrailDto } from '../dto/update-trail.dto';
import { Trail } from '../trail.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TrailsService {
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

  async updateTrail(
    id: number,
    updateTrailDto: UpdateTrailDto,
  ): Promise<Trail> {
    const trail = await this.trailRepository.findOne({ where: { id } });
    if (!trail) {
      throw new NotFoundException(`Trail with id ${id} not found`);
    }
    const updatedTrail = { ...trail, ...updateTrailDto };
    return await this.trailRepository.save(updatedTrail);
  }

  async deleteTrail(id: number): Promise<{ message: string }> {
    const result = await this.trailRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Trail with id ${id} not found`);
    }
    return { message: `Trail with id ${id} deleted successfully` };
  }
}
