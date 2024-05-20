/* eslint-disable prettier/prettier */
// favorite.controller.ts

import { Controller, Post, Delete, Body, Param } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { AddFavoritesDto } from './dto/add-to-favorites.dto';
import { RemoveFavoriteDto } from './dto/remove-favorite.dto';

@Controller('favorites')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Post(':type/:id')
  async addToFavorites(
    @Param('type') type: string,
    @Param('id') id: string,
    @Body() dto: AddFavoritesDto,
  ) {
    return await this.favoriteService.addToFavorites(dto.id, type, id);
  }

  @Delete(':type/:id')
  async removeFromFavorites(
    @Param('type') type: string,
    @Param('id') id: string,
    @Body() dto: RemoveFavoriteDto,
  ) {
    return await this.favoriteService.removeFromFavorites(dto.id, type, id);
  }
}
