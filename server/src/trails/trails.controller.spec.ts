import { Test, TestingModule } from '@nestjs/testing';
import { TrailsController } from './trails.controller';
import { TrailsService } from './trails.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Trail } from '../trail.entity';
import { TrailFactory } from './trail.factory';

describe('TrailsController', () => {
  let controller: TrailsController;

  const mockTrailRepository = {
    find: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
    delete: jest.fn(),
  };
  const mockTrailFactory = {
    createTrail: jest.fn(),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrailsController],
      providers: [
        TrailsService,
        {
          provide: TrailFactory,
          useValue: mockTrailFactory, // Use the mock factory
        },
        {
          provide: getRepositoryToken(Trail),
          useValue: mockTrailRepository,
        },
      ],
    }).compile();

    controller = module.get<TrailsController>(TrailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
