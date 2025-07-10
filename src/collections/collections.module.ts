import { Module } from '@nestjs/common';
import { CreateCollectionUseCase } from './application/use-cases/create-collection.use-case';
import { DeleteCollectionUseCase } from './application/use-cases/delete-collection.use-case copy';
import { GetCollectionByIdUseCase } from './application/use-cases/get-collection-by-id.use-case';
import { GetCollectionsUseCase } from './application/use-cases/get-collections.use-case';
import { CollectionRepository } from './domain/repositories/collection.repository';
import { PrismaCollectionRepository } from './infrastructure/prisma/prisma-collection.repository';
import { CollectionsController } from './presentation/controllers/collections.controller';

@Module({
  controllers: [CollectionsController],
  providers: [
    GetCollectionsUseCase,
    GetCollectionByIdUseCase,
    CreateCollectionUseCase,
    DeleteCollectionUseCase,
    {
      provide: CollectionRepository,
      useClass: PrismaCollectionRepository,
    }
  ],
})
export class CollectionsModule {}
