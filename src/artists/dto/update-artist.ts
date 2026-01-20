import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateArtistDto {
  @ApiPropertyOptional()
  readonly name?: string;

  @ApiPropertyOptional()
  readonly age?: number;

  @ApiPropertyOptional()
  readonly location?: string;

  @ApiPropertyOptional({ type: [String] })
  readonly discipline?: string[];

  @ApiPropertyOptional()
  readonly worksNumber?: number;

  @ApiPropertyOptional()
  readonly webSite?: string;
}
