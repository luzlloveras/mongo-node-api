import { ApiProperty } from '@nestjs/swagger';

export class ArtistResponseDto {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  location: string;

  @ApiProperty({ type: [String] })
  discipline: string[];

  @ApiProperty()
  worksNumber: number;

  @ApiProperty()
  webSite: string;
}
