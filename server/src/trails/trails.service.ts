import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTrailDto } from '../dto/create-trail.dto';
import { TrailResponseDto } from '../dto/trail-response.dto';
import { UpdateTrailDto } from '../dto/update-trail.dto';
import { Trail } from '../trail.entity';
import { Repository } from 'typeorm';
import { TrailFactory } from './trail.factory';

@Injectable()
export class TrailsService {
  constructor(
    @InjectRepository(Trail)
    private readonly trailRepository: Repository<Trail>,
    private readonly trailFactory: TrailFactory, 
  ) {}

  async getTrails(): Promise<TrailResponseDto[]> {
    const trails = await this.trailRepository.find();
    return trails.map(trail => this.mapTrailToResponseDto(trail));
  }

  async getTrailById(id: number): Promise<TrailResponseDto> {
    const trail = await this.trailRepository.findOne({ where: { id } });
    if (!trail) {
      throw new NotFoundException(`Trail with id ${id} not found`);
    }
    return this.mapTrailToResponseDto(trail);
  }

  async createTrail(createTrailDto: CreateTrailDto): Promise<TrailResponseDto> {
    try {
      const trailInstance = this.trailFactory.createTrail(createTrailDto);
      const trailEntity = this.trailRepository.create({
        ...createTrailDto,
      });
      const savedTrail = await this.trailRepository.save(trailEntity);
      return this.mapTrailToResponseDto(savedTrail);
    } catch (error) {
      throw new BadRequestException(`Failed to create trail: ${error.message}`);
    }
  }
  async updateTrail(
    id: number,
    updateTrailDto: UpdateTrailDto,
  ): Promise<TrailResponseDto> {
    const result = await this.trailRepository.update(id, updateTrailDto);

    if (result.affected === 0) {
      throw new NotFoundException(`Trail with id ${id} not found`);
    }
    // Fetch the updated entity to return the full, current state
    return this.getTrailById(id);
  }

  async deleteTrail(id: number): Promise<{ message: string }> {
    const result = await this.trailRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Trail with id ${id} not found`);
    }
    return { message: `Trail with id ${id} deleted successfully` };
  }

  // Helper method to map Trail entity to TrailResponseDto
  private mapTrailToResponseDto(trail: Trail): TrailResponseDto {
    const responseDto = new TrailResponseDto();
    // Manually assign properties to ensure type safety and contract adherence
    Object.assign(responseDto, trail);
    return responseDto;
  }
}
