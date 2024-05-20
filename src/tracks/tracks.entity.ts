/* eslint-disable prettier/prettier */
// track.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity'; // Update the import path here
import { Artist } from '../artist/artist.entity';
import { Album } from '../album/album.entity';

@Entity()
export class Track {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.tracks)
  user: User;

  @ManyToOne(() => Artist, (artist) => artist.tracks)
  artist: Artist;

  @ManyToOne(() => Album, (album) => album.tracks)
  album: Album;

  @Column()
  duration: number;
}
