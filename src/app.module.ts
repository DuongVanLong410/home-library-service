/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TracksModule } from './tracks/tracks.module';
import { Track } from './tracks/tracks.entity';
import { ArtistModule } from './artist/artist.module';
import { Artist } from './artist/artist.entity';
import { AlbumModule } from './album/album.module';
import { Album } from './album/album.entity';
import { FavoriteModule } from './favorite/favorite.module';
import { Favorite } from './favorite/favorite.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      username: 'root',
      password: '123456',
      database: 'homelibrary',
      entities: [User, Track, Artist, Album, Favorite],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
    TracksModule,
    ArtistModule,
    AlbumModule,
    FavoriteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
