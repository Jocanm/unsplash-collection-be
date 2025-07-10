import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CollectionEntity } from "src/collections/domain/entities/collection.entity";
import { CollectionRepository } from "src/collections/domain/repositories/collection.repository";

@Injectable()
export class AddImageToCollectionUseCase {
  constructor(
    private readonly collectionRepository: CollectionRepository
  ) {}

  async execute(collectionId: string, image: string): Promise<CollectionEntity> {
    const collection = await this.collectionRepository.findById(collectionId);

    if (!collection) {
      throw new NotFoundException(`Collection with id ${collectionId} not found`);
    }

    const imageAlreadyExists = collection.images.includes(image);
    if (imageAlreadyExists) {
      throw new BadRequestException(`Image "${image}" already exists in collection ${collectionId}`);
    }

    return await this.collectionRepository.addImageToCollection(collectionId, image);
  }
}