import { Test, TestingModule } from '@nestjs/testing';
import { TrailsService } from './trails.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { CreateTrailDto } from '../dto/create-trail.dto';
import { UpdateTrailDto } from '../dto/update-trail.dto';
import * as fs from 'fs';
import { Trail } from '../trail.entity';

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
  };

  const mockRepository = {
    find: jest.fn(),
    findOne: jest.fn().mockResolvedValue(mockTrail),
    create: jest.fn(),
    save: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TrailsService,
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
      const trailsArray = [{ id: 1, name: 'Trail 1' }];
      mockRepository.find.mockResolvedValue(trailsArray);
      const result = await service.getTrails();
      expect(result).toEqual(trailsArray);
      expect(mockRepository.find).toHaveBeenCalled();
    });
  });

  describe('getTrailById', () => {
    it('should return a trail when given a valid id', async () => {
      const trail = await service.getTrailById(1);
      expect(trail).toEqual(mockTrail);
      expect(mockRepository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
    });

    it('should return null if no trail is found', async () => {
      jest.spyOn(mockRepository, 'findOne').mockResolvedValue(null);
      const trail = await service.getTrailById(999);
      expect(trail).toBeNull();
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
    };

    it('should create and save a trail successfully', async () => {
      const createdTrail = { id: 1, ...createTrailDto };
      mockRepository.create.mockReturnValue(createdTrail);
      mockRepository.save.mockResolvedValue(createdTrail);

      const result = await service.createTrail(createTrailDto);
      expect(mockRepository.create).toHaveBeenCalledWith(createTrailDto);
      expect(mockRepository.save).toHaveBeenCalledWith(createdTrail);
      expect(result).toEqual(createdTrail);
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
    const existingTrail = {
      id: 1,
      name: 'Old Trail',
      location: 'Old Location',
    };
    const updateTrailDto: UpdateTrailDto = {
      name: 'Updated Trail',
      location: 'New Location',
    };

    it('should update a trail successfully', async () => {
      mockRepository.findOne.mockResolvedValue(existingTrail);
      mockRepository.save.mockResolvedValue({
        ...existingTrail,
        ...updateTrailDto,
      });

      const result = await service.updateTrail(1, updateTrailDto);
      expect(mockRepository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
      expect(mockRepository.save).toHaveBeenCalledWith({
        ...existingTrail,
        ...updateTrailDto,
      });
      expect(result).toEqual({ ...existingTrail, ...updateTrailDto });
    });

    it('should throw NotFoundException if the trail does not exist', async () => {
      mockRepository.findOne.mockResolvedValue(null);
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

  describe('getTrailsFromJSON', () => {
    it('should return parsed JSON data from file', () => {
      const fakeData = JSON.stringify([{ id: 1, name: 'Trail from JSON' }]);
      jest.spyOn(fs, 'readFileSync').mockReturnValue(fakeData);
      const result = service.getTrailsFromJSON();
      expect(result).toEqual([{ id: 1, name: 'Trail from JSON' }]);
    });
  });
});
