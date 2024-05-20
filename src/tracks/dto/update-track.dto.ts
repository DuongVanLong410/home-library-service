// src/tracks/dto/update-track.dto.ts
import { IsString, IsUUID, IsInt, Min, IsOptional } from 'class-validator';

export class UpdateTrackDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsUUID()
  artistId?: string;

  @IsOptional()
  @IsUUID()
  albumId?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  duration?: number;
}
