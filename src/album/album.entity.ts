/* eslint-disable prettier/prettier */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { Artist } from '../artist/artist.entity';
import { Track } from '../tracks/tracks.entity';
import { User } from '../user/user.entity'; // Adjusted import path

@Entity()
export class Album {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'int' }) // Specify column type for year
  year: number;

  @ManyToMany(() => Artist)
  @JoinTable()
  artists: Artist[];

  @ManyToMany(() => Track)
  @JoinTable()
  tracks: Track[];

  @ManyToOne(() => User, (user) => user.albums)
  user: User;
}
