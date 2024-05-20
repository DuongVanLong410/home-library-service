// album/album.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { AlbumService } from './album.service';
import { Album } from './album.entity';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';

@Controller('albums')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Get()
  async findAll(): Promise<Album[]> {
    return this.albumService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Album> {
    return this.albumService.findById(id);
  }

  @Post()
  async create(@Body() createAlbumDto: CreateAlbumDto): Promise<Album> {
    return this.albumService.create(createAlbumDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAlbumDto: UpdateAlbumDto,
  ): Promise<Album> {
    return this.albumService.update(id, updateAlbumDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.albumService.delete(id);
  }
}
