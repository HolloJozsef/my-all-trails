import { Test, TestingModule } from '@nestjs/testing';
import { TrailsService } from './trails.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { CreateTrailDto } from '../dto/create-trail.dto';
import { Trail } from '../trail.entity';
import { TrailType } from './trail-type.enum';
import { TrailFactory } from './trail.factory';
import { ITrail } from './trails.interface';
import { TrailResponseDto } from '../dto/trail-response.dto';

describe('TrailsService', () => {
  let service: TrailsService;

  const mockTrail: Trail = {
    id: 1,
    name: 'Test Trail',
    location: 'Test Location',
    rating: 4.5,
    estimatedTime: '2 hours',
    imageUrl: 'https://example.com/image.jpg',
    description: 'A great test trail',
    directions: 'Turn left at the big rock',
    lat: 40.7128,
    lon: -74.006,
    length: '5 miles',
    difficulty: 'Medium',
    type:TrailType.HIKING
  };

  const mockTrailFactoryResult: ITrail = {
    ...mockTrail,
    getSafetyWarning: () => 'mock safety warning',
    getGearRecommendation: () => 'mock gear recommendation',
  };

  const mockRepository = {
    find: jest.fn(),
    findOne: jest.fn().mockResolvedValue(mockTrail),
    create: jest.fn(),
    save: jest.fn(),
    delete: jest.fn(),
    update: jest.fn(),
  };
  const mockTrailFactory = {
    createTrail: jest.fn().mockResolvedValue(mockTrailFactoryResult),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TrailsService,
        {
          provide: TrailFactory,
          useValue: mockTrailFactory,
        },
        {
          provide: getRepositoryToken(Trail),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<TrailsService>(TrailsService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getTrails', () => {
    it('should return an array of trails', async () => {
      const trailsArray: Trail[] = [mockTrail];
      mockRepository.find.mockResolvedValue(trailsArray);
      const result = await service.getTrails();
      const expectedDto = new TrailResponseDto();
      Object.assign(expectedDto, mockTrail);
      expect(result).toEqual([expectedDto]);
      expect(mockRepository.find).toHaveBeenCalled();
    });
  });

  describe('getTrailById', () => {
    it('should return a trail when given a valid id', async () => {
      mockRepository.findOne.mockResolvedValue(mockTrail);
      const result = await service.getTrailById(1);
      const expectedDto = new TrailResponseDto();
      Object.assign(expectedDto, mockTrail);
      expect(result).toEqual(expectedDto);
      expect(mockRepository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
    });

    it('should throw NotFoundException if no trail is found', async () => {
      jest.spyOn(mockRepository, 'findOne').mockResolvedValue(null);
      await expect(service.getTrailById(999)).rejects.toThrow(NotFoundException);
      expect(mockRepository.findOne).toHaveBeenCalledWith({
        where: { id: 999 },
      });
    });
  });

  describe('createTrail', () => {
    const createTrailDto: CreateTrailDto = {
      name: 'Trail 1',
      location: 'Location 1',
      estimatedTime: '2 hours',
      imageUrl: 'http://example.com/image.jpg',
      description: 'A nice trail',
      directions: 'Go straight',
      lat: 10,
      lon: 20,
      length: '5',
      difficulty: 'Easy',
      rating: 4,
      type:TrailType.HIKING
    };

    it('should create and save a trail successfully', async () => {
      const savedTrailEntity = { id: 1, ...createTrailDto };
      (mockTrailFactory.createTrail as jest.Mock).mockReturnValue(mockTrailFactoryResult);
      mockRepository.create.mockReturnValue(createTrailDto);
      mockRepository.save.mockResolvedValue(savedTrailEntity);

      const result = await service.createTrail(createTrailDto);
      expect(mockRepository.create).toHaveBeenCalledWith(createTrailDto);
      expect(mockRepository.save).toHaveBeenCalledWith(createTrailDto);

      const expectedDto = new TrailResponseDto();
      Object.assign(expectedDto, savedTrailEntity);
      expect(result).toEqual(expectedDto);
    });

    it('should throw a BadRequestException if saving fails', async () => {
      mockRepository.create.mockReturnValue(createTrailDto);
      mockRepository.save.mockRejectedValue(new Error('Save failed'));

      await expect(service.createTrail(createTrailDto)).rejects.toThrow(
        BadRequestException,
      );
    });
  });

  describe('updateTrail', () => {
    const updateTrailDto = {
      name: 'Updated Trail',
      location: 'New Location',
    };
    const updatedTrailEntity = { ...mockTrail, ...updateTrailDto };

    it('should update a trail successfully', async () => {
      mockRepository.update.mockResolvedValue({ affected: 1 });
      // Mock the getTrailById call that happens inside updateTrail
      const expectedDto = new TrailResponseDto();
      Object.assign(expectedDto, updatedTrailEntity);
      jest.spyOn(service, 'getTrailById').mockResolvedValue(expectedDto);

      const result = await service.updateTrail(1, updateTrailDto);

      expect(mockRepository.update).toHaveBeenCalledWith(1, updateTrailDto);
      expect(service.getTrailById).toHaveBeenCalledWith(1);
      expect(result).toEqual(expectedDto);
    });

    it('should throw NotFoundException if the trail does not exist', async () => {
      mockRepository.update.mockResolvedValue({ affected: 0 });
      await expect(service.updateTrail(1, updateTrailDto)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('deleteTrail', () => {
    it('should delete a trail and return a success message', async () => {
      mockRepository.delete.mockResolvedValue({ affected: 1 });
      const result = await service.deleteTrail(1);
      expect(mockRepository.delete).toHaveBeenCalledWith(1);
      expect(result).toEqual({
        message: 'Trail with id 1 deleted successfully',
      });
    });

    it('should throw NotFoundException if no trail is deleted', async () => {
      mockRepository.delete.mockResolvedValue({ affected: 0 });
      await expect(service.deleteTrail(1)).rejects.toThrow(NotFoundException);
    });
  });
});
