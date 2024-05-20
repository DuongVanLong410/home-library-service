// album/album.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Album } from './album.entity';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';

@Injectable()
export class AlbumService {
  constructor(
    @InjectRepository(Album)
    private albumRepository: Repository<Album>,
  ) {}

  async findAll(): Promise<Album[]> {
    return this.albumRepository.find();
  }

  async findById(id: string): Promise<Album> {
    const album = await this.albumRepository.findOne({ where: { id } });
    if (!album) {
      throw new NotFoundException('Album not found');
    }
    return album;
  }

  async create(createAlbumDto: CreateAlbumDto): Promise<Album> {
    const album = this.albumRepository.create(createAlbumDto);
    return this.albumRepository.save(album);
  }

  async update(id: string, updateAlbumDto: UpdateAlbumDto): Promise<Album> {
    const album = await this.findById(id);
    Object.assign(album, updateAlbumDto);
    return this.albumRepository.save(album);
  }

  async delete(id: string): Promise<void> {
    await this.albumRepository.delete(id);
  }
}
