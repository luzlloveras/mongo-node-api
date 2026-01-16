import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ArtistDocument = HydratedDocument<Artist>;

@Schema()
export class Artist {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Number, required: true })
  age: number;

  @Prop({ type: String, required: true })
  location: string;

  @Prop({ type: [String], required: true })
  discipline: string[];

  @Prop({ type: Number, required: true })
  worksNumber: number;

  @Prop({ type: String, required: true })
  webSite: string;

}

export const ArtistSchema = SchemaFactory.createForClass(Artist);