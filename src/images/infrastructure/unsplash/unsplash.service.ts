import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { getEnvName } from 'src/utils/getEnvName';
import { ImageEntity } from '../../domain/entities/image.entity';
import { ImageRepository } from '../../domain/repositories/image.repository';
import { UnsplashPhotoItem, UnsplashPhotosResponseType } from './types/unsplash-photos-response.type';

@Injectable()
export class UnsplashService implements ImageRepository {
  private readonly apiUrl: string;
  private readonly accessKey: string;
  private readonly imagesPerPage: number;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.apiUrl = this.configService.get(getEnvName('UNSPLASH_API_URL')) as string;
    this.accessKey = this.configService.get(getEnvName('UNSPLASH_CLIENT_ID')) as string;
    this.imagesPerPage = this.configService.get(getEnvName('IMAGES_PER_PAGE')) as number;
  }

  async searchImages(query: string): Promise<ImageEntity[]> {
    const response = await firstValueFrom(this.httpService.get<UnsplashPhotosResponseType>(`${this.apiUrl}/search/photos`, {
      params: {
        query,
        client_id: this.accessKey,
        per_page: this.imagesPerPage,
      },
    }));

    return response.data.results.map(photo => this.mapToImageEntity(photo));
  }

  private mapToImageEntity(photo: UnsplashPhotoItem): ImageEntity {
    return new ImageEntity({
      id: photo.id,
      slug: photo.slug,
      width: photo.width,
      height: photo.height,
      smallUrl: photo.urls.small,
      thumbUrl: photo.urls.thumb,
      createdAt: photo.created_at,
      updatedAt: photo.updated_at,
      regularUrl: photo.urls.regular,
      downloadUrl: photo.links.download,
      altDescription: photo.alt_description,

      userName: photo.user.name,
      userProfileImage: photo.user.profile_image.medium,
    });
  }
}
