import { Module } from '@nestjs/common';
import { TrailsController } from './trails.controller';
import { TrailsService } from './trails.service';
import { Trail } from 'src/trail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrailFactory } from './trail.factory';

@Module({
  controllers: [TrailsController],
  providers: [TrailsService,TrailFactory],
  exports: [TrailsService],
  imports: [TypeOrmModule.forFeature([Trail])],
})
export class TrailsModule {}
