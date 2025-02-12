import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TrailsService } from './trails.service';
import { CreateTrailDto } from '../dto/create-trail.dto';
import { UpdateTrailDto } from '../dto/update-trail.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Trail } from '../trail.entity';

@ApiTags('trails')
@Controller('trails')
export class TrailsController {
  constructor(private readonly trailsService: TrailsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all trails' })
  @ApiResponse({ status: 200, description: 'List of trails', type: [Trail] })
  getAllTrails() {
    return this.trailsService.getTrails();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new trail' })
  @ApiResponse({
    status: 201,
    description: 'Trail created successfully',
    type: Trail,
  })
  async createTrail(@Body() createTrailDto: CreateTrailDto) {
    return this.trailsService.createTrail(createTrailDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an existing trail' })
  @ApiResponse({ status: 200, description: 'Trail updated', type: Trail })
  async updateTrail(
    @Param('id') id: string,
    @Body() updateTrailDto: UpdateTrailDto,
  ) {
    return this.trailsService.updateTrail(Number(id), updateTrailDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a trail' })
  @ApiResponse({ status: 200, description: 'Trail deleted successfully' })
  async deleteTrail(@Param('id') id: string) {
    return this.trailsService.deleteTrail(Number(id));
  }
}
