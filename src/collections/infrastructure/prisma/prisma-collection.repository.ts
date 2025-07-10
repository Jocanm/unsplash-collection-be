import { Injectable, NotFoundException } from "@nestjs/common";
import { Collection } from '@prisma/client';
import { CollectionEntity } from "src/collections/domain/entities/collection.entity";
import { CollectionRepository, CreateCollectionDto } from "src/collections/domain/repositories/collection.repository";
import { DatabaseService } from "src/database/database.service";

@Injectable()
export class PrismaCollectionRepository implements CollectionRepository {
  constructor(
    private readonly db: DatabaseService
  ) { }
  async findAll(): Promise<CollectionEntity[]> {
    const collections = await this.db.collection.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return collections.map(this.mapToCollectionEntity);
  }

  async findById(id: string): Promise<CollectionEntity | null> {
    const collection = await this.db.collection.findUnique({
      where: { id }
    });
    return collection ? this.mapToCollectionEntity(collection) : null;
  }

  async create(collection: CreateCollectionDto): Promise<CollectionEntity> {
    const createdCollection = await this.db.collection.create({
      data: {
        name: collection.name,
        images: collection.images,
      },
    });
    return this.mapToCollectionEntity(createdCollection);
  }

  async delete(id: string): Promise<void> {
    const collection = await this.findById(id);
    if (!collection) {
      throw new NotFoundException(`Collection with id ${id} not found`);
    }

    await this.db.collection.delete({
      where: { id }
    });
  }

  private mapToCollectionEntity(data: Collection): CollectionEntity {
    return new CollectionEntity({
      id: data.id,
      name: data.name,
      images: data.images,
      createdAt: data.createdAt.toISOString(),
      updatedAt: data.updatedAt.toISOString(),
    });
  }
}