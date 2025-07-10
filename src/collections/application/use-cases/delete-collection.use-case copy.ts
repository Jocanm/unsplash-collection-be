import { Injectable, NotFoundException } from "@nestjs/common";
import { CollectionRepository } from "src/collections/domain/repositories/collection.repository";

@Injectable()
export class DeleteCollectionUseCase {
  constructor(
    private readonly collectionRepository: CollectionRepository
  ) {}

  async execute(id: string): Promise<void> {
    const collection = await this.collectionRepository.findById(id);

    if (!collection) {
      throw new NotFoundException(`Collection with id ${id} not found`);
    }

    return await this.collectionRepository.delete(id);
  }
}