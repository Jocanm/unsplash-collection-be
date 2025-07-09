import { Injectable } from '@nestjs/common';
import { ImageEntity } from 'src/images/domain/entities/image.entity';
import { ImageRepository } from '../../domain/repositories/image.repository';

@Injectable()
export class GetImagesUseCase {
  constructor(private readonly imageRepository: ImageRepository) {}

  async execute(query: string): Promise<ImageEntity[]> {
    return await this.imageRepository.searchImages(query);
  }
}
