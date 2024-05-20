// album/dto/update-album.dto.ts
import { IsString, IsInt, Min, IsOptional } from 'class-validator';

export class UpdateAlbumDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsInt()
  @Min(1900)
  year?: number;

  @IsOptional()
  @IsString()
  artistId?: string;
}
