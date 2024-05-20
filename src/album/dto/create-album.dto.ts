// album/dto/create-album.dto.ts
import { IsNotEmpty, IsString, IsInt, Min } from 'class-validator';

export class CreateAlbumDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1900)
  year: number;

  @IsNotEmpty()
  @IsString()
  artistId: string;
}
