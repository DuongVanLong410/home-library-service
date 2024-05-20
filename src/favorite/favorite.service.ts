/* eslint-disable prettier/prettier */
// favorite.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Favorite } from './favorite.entity';

@Injectable()
export class FavoriteService {
  constructor(
    @InjectRepository(Favorite)
    private favoriteRepository: Repository<Favorite>,
  ) {}

  async addToFavorites(
    userId: string,
    type: string,
    id: string,
  ): Promise<void> {
    const favorite = await this.favoriteRepository.findOne({
      where: { id: userId },
    });

    if (!favorite) {
      throw new NotFoundException(`User favorites not found`);
    }

    let favorites: string[];

    switch (type) {
      case 'artist':
        favorites = favorite.artists;
        break;
      case 'album':
        favorites = favorite.albums;
        break;
      case 'track':
        favorites = favorite.tracks;
        break;
      default:
        throw new NotFoundException(`Invalid favorite type`);
    }

    if (!favorites.includes(id)) {
      favorites.push(id);
    }

    await this.favoriteRepository.save(favorite);
  }

  async removeFromFavorites(
    userId: string,
    type: string,
    id: string,
  ): Promise<void> {
    const favorite = await this.favoriteRepository.findOne({
      where: { id: userId },
    });

    if (!favorite) {
      throw new NotFoundException(`User favorites not found`);
    }

    let favorites: string[];

    switch (type) {
      case 'artist':
        favorites = favorite.artists;
        break;
      case 'album':
        favorites = favorite.albums;
        break;
      case 'track':
        favorites = favorite.tracks;
        break;
      default:
        throw new NotFoundException(`Invalid favorite type`);
    }

    const index = favorites.indexOf(id);
    if (index !== -1) {
      favorites.splice(index, 1);
    }

    await this.favoriteRepository.save(favorite);
  }
}
