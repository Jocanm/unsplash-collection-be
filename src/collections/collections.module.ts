import { Module } from '@nestjs/common';
import { CollectionsController } from './presentation/controllers/collections.controller';
import { GetCollectionsUseCase } from './application/use-cases/get-collections.use-case';
import { GetCollectionByIdUseCase } from './application/use-cases/get-collection-by-id.use-case';
import { CollectionRepository } from './domain/repositories/collection.repository';
import { PrismaCollectionRepository } from './infrastructure/prisma/prisma-collection.repository';

@Module({
  controllers: [CollectionsController],
  providers: [
    GetCollectionsUseCase,
    GetCollectionByIdUseCase,
    {
      provide: CollectionRepository,
      useClass: PrismaCollectionRepository,
    }
  ],
})
export class CollectionsModule {}
