import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNotEmpty, Min, Max, IsEnum } from 'class-validator';
import { TrailType } from '../trails/trail-type.enum';

export class CreateTrailDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Sunset Trail',
    description: 'The name of the trail',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'A beautiful sunset trail with scenic views.',
    description: 'Description of the trail',
  })
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '',
    description: 'directions',
  })
  directions: string;

  @IsNumber()
  @ApiProperty({
    example: '45.54',
    description: 'Latitude',
  })
  lat: number;

  @IsNumber()
  @ApiProperty({
    example: '45.54',
    description: 'Longitude',
  })
  lon: number;

  @IsString()
  @IsNotEmpty()
  length: string;

  @IsString()
  @ApiProperty({
    example: 'easy',
    description: 'Level of dificulty',
  })
  difficulty: string;

  @IsNumber()
  @Min(1)
  @Max(5)
  @ApiProperty({
    example: 4.5,
    description: 'Rating out of 5',
    minimum: 0,
    maximum: 5,
  })
  rating: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '2 hours',
    description: 'Estimated time to complete the trail',
  })
  estimatedTime: string;

  @IsString()
  @ApiProperty({
    example: 'Austria',
    description: 'Country/Region',
  })
  location: string;

  @IsString()
  @ApiProperty({
    example: 'https://example.com/trail.jpg',
    description: 'Image URL of the trail',
  })
  imageUrl: string;

  @IsEnum(TrailType) 
  @IsNotEmpty()
  @ApiProperty({
    enum: TrailType,
    example: TrailType.HIKING,
    description: 'The type of the trail',
  })
  type: TrailType;
}
