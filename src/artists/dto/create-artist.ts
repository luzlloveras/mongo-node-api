import { ApiProperty } from '@nestjs/swagger';

export class CreateArtistDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly age: number;

  @ApiProperty()
  readonly location: string;

  @ApiProperty({ type: [String] })
  readonly discipline: string[];

  @ApiProperty()
  readonly worksNumber: number;

  @ApiProperty()
  readonly webSite: string;
}