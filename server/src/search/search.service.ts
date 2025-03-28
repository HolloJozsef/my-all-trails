import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Trail } from '../trail.entity';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class SearchService {
  constructor(
    @InjectRepository(Trail)
    private readonly trailRepository: Repository<Trail>,
  ) {}
  async searchTrails(query: string): Promise<Trail[]> {
    if (!query || query.trim() === '') {
      return [];
    }
    return this.trailRepository.find({
      where: { name: ILike(`%${query}%`) },
    });
  }
}
