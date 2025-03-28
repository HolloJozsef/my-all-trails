import { Module } from '@nestjs/common';
import { Trail } from 'src/trail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';

@Module({
  controllers: [SearchController],
  providers: [SearchService],
  exports: [SearchService],
  imports: [TypeOrmModule.forFeature([Trail])],
})
export class SearchModule {}
