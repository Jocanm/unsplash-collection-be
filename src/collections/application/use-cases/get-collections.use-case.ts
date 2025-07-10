import { Injectable } from '@nestjs/common';
import { CollectionEntity } from '../../domain/entities/collection.entity';
import { CollectionRepository, FindAllCollectionsOptions } from '../../domain/repositories/collection.repository';

@Injectable()
export class GetCollectionsUseCase {
  constructor(private readonly collectionRepository: CollectionRepository) {}

  async execute(options: FindAllCollectionsOptions): Promise<CollectionEntity[]> {
    return await this.collectionRepository.findAll(options);
  }
}