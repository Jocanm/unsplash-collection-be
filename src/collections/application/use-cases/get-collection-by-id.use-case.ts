import { Injectable, NotFoundException } from "@nestjs/common";
import { CollectionEntity } from "src/collections/domain/entities/collection.entity";
import { CollectionRepository } from "src/collections/domain/repositories/collection.repository";

@Injectable()
export class GetCollectionByIdUseCase {
  constructor(private readonly collectionRepository: CollectionRepository) { }

  async execute(id: string): Promise<CollectionEntity> {
    const collection = await this.collectionRepository.findById(id);
    if (!collection) {
      throw new NotFoundException(`Collection with id ${id} not found`)
    }

    return collection;
  }
}