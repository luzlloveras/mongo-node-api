import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtistsModule } from './artists/artists.module';
import { RootController } from './root.controller';

const mongoUri =
  process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/luzlloveras';

@Module({
  imports: [MongooseModule.forRoot(mongoUri), ArtistsModule],
  controllers: [RootController],
  providers: [],
})
export class AppModule {}
