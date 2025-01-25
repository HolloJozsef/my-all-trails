import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTrailDto } from './dto/create-trail.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/trails')
  getAllTrails() {
    return this.appService.getTrails();
  }

  @Post('/trails')
  async createTrail(@Body() createTrailDto: CreateTrailDto) {
    return this.appService.createTrail(createTrailDto);
  }
}
