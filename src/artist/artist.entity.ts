/* eslint-disable prettier/prettier */
import { Track } from 'src/tracks/tracks.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Artist {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ default: false })
  grammy: boolean;

  @OneToMany(() => Track, (track) => track.artist)
  tracks: Track[];
}
