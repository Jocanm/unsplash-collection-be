import { Injectable } from '@nestjs/common';
import { CollectionRepository } from '../../domain/repositories/collection.repository';
import { CollectionEntity } from '../../domain/entities/collection.entity';

@Injectable()
export class GetCollectionsUseCase {
  constructor(private readonly collectionRepository: CollectionRepository) {}

  async execute(): Promise<CollectionEntity[]> {
    return await this.collectionRepository.findAll();
  }
}