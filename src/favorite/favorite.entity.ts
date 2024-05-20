/* eslint-disable prettier/prettier */
// favorite.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Favorite {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  userId: string;

  @Column('simple-array', { default: [] })
  artists: string[];

  @Column('simple-array', { default: [] })
  albums: string[];

  @Column('simple-array', { default: [] })
  tracks: string[];
}
