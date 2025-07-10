import { Injectable } from "@nestjs/common";
import { CollectionRepository } from "src/collections/domain/repositories/collection.repository";

@Injectable()
export class DeleteCollectionUseCase {
  constructor(
    private readonly collectionRepository: CollectionRepository
  ) {}

  async execute(id: string): Promise<void> {
    return await this.collectionRepository.delete(id);
  }
}