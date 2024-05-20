import { IsNotEmpty, IsString, IsUUID, IsInt, Min } from 'class-validator';

export class CreateTrackDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsUUID()
  artistId: string;

  @IsNotEmpty()
  @IsUUID()
  albumId: string;

  @IsInt()
  @Min(1)
  duration: number;
}
