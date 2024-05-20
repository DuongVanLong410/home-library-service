/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Track } from './tracks.entity';
import { TrackController } from './tracks.controller';
import { TrackService } from './tracks.service';

@Module({
  imports: [TypeOrmModule.forFeature([Track])],
  controllers: [TrackController],
  providers: [TrackService],
})
export class TracksModule {}
