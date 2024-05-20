/* eslint-disable prettier/prettier */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Favorite } from '../favorite/favorite.entity';
import { Track } from '../tracks/tracks.entity'; // Corrected import path
import { Album } from '../album/album.entity'; // Corrected import path

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  login: string;

  @Column()
  password: string;

  @Column({ default: 1 })
  version: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @OneToMany(() => Track, (track) => track.user)
  tracks: Track[];

  @OneToMany(() => Album, (album) => album.user)
  albums: Album[];

  @OneToOne(() => Favorite)
  @JoinColumn()
  favorites: Favorite;

  @BeforeInsert()
  setInitialDates() {
    this.id = uuidv4();
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  @BeforeUpdate()
  updateTimestamp() {
    this.updatedAt = new Date();
  }
}
