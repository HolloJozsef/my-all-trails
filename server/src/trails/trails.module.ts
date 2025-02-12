import { Module } from '@nestjs/common';
import { TrailsController } from './trails.controller';
import { TrailsService } from './trails.service';
import { Trail } from 'src/trail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [TrailsController],
  providers: [TrailsService],
  exports: [TrailsService],
  imports: [TypeOrmModule.forFeature([Trail])],
})
export class TrailsModule {}
