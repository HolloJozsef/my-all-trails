import { IsString, IsNumber, IsNotEmpty, Min, Max } from 'class-validator';

export class CreateTrailDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  directions: string;

  @IsNumber()
  lat: number;

  @IsNumber()
  lon: number;

  @IsString()
  @IsNotEmpty()
  length: string;

  @IsString()
  difficulty: string;

  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number;

  @IsString()
  @IsNotEmpty()
  estimatedTime: string;

  @IsString()
  location: string;

  @IsString()
  imageUrl: string;
}
