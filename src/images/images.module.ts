import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { GetImagesUseCase } from './application/use-cases/get-images.use-case';
import { ImageRepository } from './domain/repositories/image.repository';
import { UnsplashImageRepository } from './infrastructure/unsplash/unsplash-image.repository';
import { ImagesController } from './presentation/controllers/images.controller';

@Module({
  controllers: [ImagesController],
  providers: [
    GetImagesUseCase,
    {
      provide: ImageRepository,
      useClass: UnsplashImageRepository,
    },
  ],
  imports: [HttpModule],
})
export class ImagesModule { }
