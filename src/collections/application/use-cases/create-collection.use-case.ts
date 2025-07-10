import { Injectable } from "@nestjs/common";
import { CollectionEntity } from "src/collections/domain/entities/collection.entity";
import { CollectionRepository, CreateCollectionDto } from "src/collections/domain/repositories/collection.repository";

@Injectable()
export class CreateCollectionUseCase {
  constructor(
    private readonly collectionRepository: CollectionRepository
  ) {}

  async execute(createCollectionDto: CreateCollectionDto): Promise<CollectionEntity> {
    return await this.collectionRepository.create(createCollectionDto);
  }
}