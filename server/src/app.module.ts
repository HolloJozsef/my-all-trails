import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trail } from './trail.entity';
import { TrailsModule } from './trails/trails.module';
import * as dotenv from 'dotenv';
import { TrailsService } from './trails/trails.service';
import { TrailsController } from './trails/trails.controller';
import { SearchController } from './search/search.controller';
import { SearchService } from './search/search.service';
import { SearchModule } from './search/search.module';
import { TrailFactory } from './trails/trail.factory';

dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Trail],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Trail]),
    TrailsModule,
    SearchModule,
  ],
  controllers: [AppController, TrailsController, SearchController],
  providers: [AppService, TrailsService, SearchService, TrailFactory],
})
export class AppModule {}
