// tracks/track.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Track } from './tracks.entity';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';

@Injectable()
export class TrackService {
  constructor(
    @InjectRepository(Track)
    private trackRepository: Repository<Track>,
  ) {}

  async findAll(): Promise<Track[]> {
    return this.trackRepository.find();
  }

  async findById(id: string): Promise<Track> {
    const track = await this.trackRepository.findOne({ where: { id } });
    if (!track) {
      throw new NotFoundException('Track not found');
    }
    return track;
  }

  async create(createTrackDto: CreateTrackDto): Promise<Track> {
    const track = this.trackRepository.create(createTrackDto);
    return this.trackRepository.save(track);
  }

  async update(id: string, updateTrackDto: UpdateTrackDto): Promise<Track> {
    const track = await this.findById(id);
    Object.assign(track, updateTrackDto);
    return this.trackRepository.save(track);
  }

  async delete(id: string): Promise<void> {
    await this.trackRepository.delete(id);
  }
}
