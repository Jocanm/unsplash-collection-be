import { CollectionEntity } from "../entities/collection.entity";

export abstract class CollectionRepository {
  abstract findAll(): Promise<CollectionEntity[]>;
  abstract findById(id: string): Promise<CollectionEntity | null>;
}