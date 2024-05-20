// artist/artist.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Artist } from './artist.entity';
import { CreateArtistDto } from './dto/create-artist.dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto/update-artist.dto';

@Injectable()
export class ArtistService {
  constructor(
    @InjectRepository(Artist)
    private artistRepository: Repository<Artist>,
  ) {}

  async findAll(): Promise<Artist[]> {
    return this.artistRepository.find();
  }

  async findById(id: string): Promise<Artist> {
    const artist = await this.artistRepository.findOne({ where: { id } });
    if (!artist) {
      throw new NotFoundException('Artist not found');
    }
    return artist;
  }

  async create(createArtistDto: CreateArtistDto): Promise<Artist> {
    const artist = this.artistRepository.create(createArtistDto);
    return this.artistRepository.save(artist);
  }

  async update(id: string, updateArtistDto: UpdateArtistDto): Promise<Artist> {
    const artist = await this.findById(id);
    Object.assign(artist, updateArtistDto);
    return this.artistRepository.save(artist);
  }

  async delete(id: string): Promise<void> {
    await this.artistRepository.delete(id);
  }
}
