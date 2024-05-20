import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { TrackService } from './tracks.service';
import { Track } from './tracks.entity';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';

@Controller('tracks')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Get()
  async findAll(): Promise<Track[]> {
    return this.trackService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Track> {
    return this.trackService.findById(id);
  }

  @Post()
  async create(@Body() createTrackDto: CreateTrackDto): Promise<Track> {
    return this.trackService.create(createTrackDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTrackDto: UpdateTrackDto,
  ): Promise<Track> {
    return this.trackService.update(id, updateTrackDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.trackService.delete(id);
  }
}
