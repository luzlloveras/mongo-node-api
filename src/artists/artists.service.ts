import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Artist } from './schemas/artist.schema';
import { CreateArtistDto } from './dto/create-artist';
import { UpdateArtistDto } from './dto/update-artist';

@Injectable()
export class ArtistsService {
  constructor(
    @InjectModel(Artist.name) private readonly artistModel: Model<Artist>,
  ) {}

  async findAll(): Promise<Artist[]> {
    return this.artistModel.find().select('-__v').lean();
  }

  async findOne(id: string): Promise<Artist> {
    return this.artistModel.findOne({ _id: id }).select('-__v').lean();
  }

  async create(createArtistDto: CreateArtistDto): Promise<Artist> {
    const createdArtist = new this.artistModel(createArtistDto);
    const savedArtist = await createdArtist.save();
    return savedArtist.toObject({ versionKey: false });
  }

  async update(
    id: string,
    updateArtistDto: UpdateArtistDto,
  ): Promise<Artist> {
    return this.artistModel
      .findByIdAndUpdate(id, updateArtistDto, { new: true })
      .select('-__v')
      .lean();
  }

  async remove(id: string): Promise<Artist> {
    return this.artistModel.findByIdAndDelete(id).select('-__v').lean();
  }
}