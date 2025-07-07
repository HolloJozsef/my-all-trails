import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trail } from './trail.entity';
import { TrailsModule } from './trails/trails.module';
import * as dotenv from 'dotenv';
import { SearchModule } from './search/search.module';

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
    TrailsModule,
    SearchModule,
  ],
  controllers: [AppController], 
  providers: [AppService],
})
export class AppModule {}
