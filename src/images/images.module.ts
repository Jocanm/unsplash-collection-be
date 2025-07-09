import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { GetImagesUseCase } from './application/use-cases/get-images.use-case';
import { ImageRepository } from './domain/repositories/image.repository';
import { UnsplashService } from './infrastructure/unsplash/unsplash.service';
import { ImagesController } from './interfaces/controllers/images.controller';

@Module({
  controllers: [ImagesController],
  providers: [
    GetImagesUseCase,
    {
      provide: ImageRepository,
      useClass: UnsplashService,
    },
  ],
  imports: [HttpModule],
})
export class ImagesModule { }
