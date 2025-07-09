import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CollectionsService {
  constructor(
    private readonly databaseService: DatabaseService,
  ) {}

  create(createCollectionDto: Prisma.CollectionCreateInput) {
    return this.databaseService.collection.create({
      data: createCollectionDto,
    });
  }

  findAll() {
    return this.databaseService.collection.findMany();
  }
}
