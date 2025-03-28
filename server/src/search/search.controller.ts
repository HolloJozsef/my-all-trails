import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Trail } from '../trail.entity';
import { SearchService } from './search.service';

@ApiTags('search')
@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('')
  @ApiOperation({ summary: 'Search trails by name' })
  @ApiResponse({
    status: 200,
    description: 'List of matching trails',
    type: [Trail],
  })
  async searchTrails(@Query('message') query: string) {
    return this.searchService.searchTrails(query);
  }
}
