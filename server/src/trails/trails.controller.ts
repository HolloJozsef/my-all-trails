import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { TrailsService } from './trails.service';
import { CreateTrailDto } from '../dto/create-trail.dto'; // Keep for input DTO
import { UpdateTrailDto } from '../dto/update-trail.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TrailResponseDto } from '../dto/trail-response.dto';

@ApiTags('trails')
@Controller('trails')
export class TrailsController {
  constructor(private readonly trailsService: TrailsService) {}

  @Get(':id')
  @ApiResponse({ status: 200, description: 'One trail', type: TrailResponseDto })
  async getTrailById(@Param('id', ParseIntPipe) id: number) {
    const trail = await this.trailsService.getTrailById(id);
    if (!trail) {
      throw new NotFoundException(`Trail with ID ${id} not found`);
    }
    return trail;
  }

  @Get()
  @ApiOperation({ summary: 'Get all trails' })
  @ApiResponse({ status: 200, description: 'List of trails', type: [TrailResponseDto] })
  getAllTrails() {
    return this.trailsService.getTrails();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new trail' })
  @ApiResponse({
    status: 201,
    description: 'Trail created successfully',
    type: TrailResponseDto,
  })
  async createTrail(@Body() createTrailDto: CreateTrailDto) {
    return this.trailsService.createTrail(createTrailDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an existing trail' })
  @ApiResponse({ status: 200, description: 'Trail updated', type: TrailResponseDto })
  async updateTrail(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTrailDto: UpdateTrailDto,
  ) {
    return this.trailsService.updateTrail(id, updateTrailDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a trail' })
  @ApiResponse({ status: 200, description: 'Trail deleted successfully' })
  async deleteTrail(@Param('id', ParseIntPipe) id: number) {
    return this.trailsService.deleteTrail(id);
  }
}
