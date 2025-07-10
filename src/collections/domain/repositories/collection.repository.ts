import { CollectionEntity } from "../entities/collection.entity";

export interface CreateCollectionDto {
  name: string;
  images?: string[];
}

export interface FindAllCollectionsOptions {
  order?: 'asc' | 'desc';
}

export abstract class CollectionRepository {
  abstract findAll(options: FindAllCollectionsOptions): Promise<CollectionEntity[]>;
  abstract findById(id: string): Promise<CollectionEntity | null>;
  abstract create(collection: CreateCollectionDto): Promise<CollectionEntity>;
  abstract delete(id: string): Promise<void>;
  abstract addImageToCollection(collectionId: string, image: string): Promise<CollectionEntity>;
}