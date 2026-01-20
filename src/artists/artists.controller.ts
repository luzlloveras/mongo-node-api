import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { CreateArtistDto } from './dto/create-artist';
import { ArtistResponseDto } from './dto/artist-response';
import { UpdateArtistDto } from './dto/update-artist';
import { Artist } from './interfaces/artist';
import { ArtistsService } from './artists.service';

@ApiTags('artists')
@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Get()
  @ApiOkResponse({ type: ArtistResponseDto, isArray: true })
  findAll(): Promise<Artist[]> {
    return this.artistsService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: 'MongoDB artist id' })
  @ApiOkResponse({ type: ArtistResponseDto })
  findOne(@Param('id') id: string): Promise<Artist> {
    return this.artistsService.findOne(id);
  }

  @Post()
  @ApiCreatedResponse({ type: ArtistResponseDto })
  create(@Body() createArtistDto: CreateArtistDto): Promise<Artist> {
    return this.artistsService.create(createArtistDto);
  }

  @Put(':id')
  @ApiParam({ name: 'id', description: 'MongoDB artist id' })
  @ApiOkResponse({ type: ArtistResponseDto })
  update(
    @Param('id') id: string,
    @Body() updateArtistDto: UpdateArtistDto,
  ): Promise<Artist> {
    return this.artistsService.update(id, updateArtistDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', description: 'MongoDB artist id' })
  @ApiOkResponse({ type: ArtistResponseDto })
  remove(@Param('id') id: string): Promise<Artist> {
    return this.artistsService.remove(id);
  }
}