// artist/dto/create-artist.dto.ts
import { IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class CreateArtistDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsBoolean()
  grammy: boolean;
}
