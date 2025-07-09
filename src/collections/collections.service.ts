import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CollectionsService {
  constructor(
    private readonly databaseService: DatabaseService,
  ) { }

  create(createCollectionDto: Prisma.CollectionCreateInput) {
    return this.databaseService.collection.create({
      data: createCollectionDto,
    });
  }

  findAll() {
    return this.databaseService.collection.findMany();
  }

  findImageInCollection(
    collectionId: string,
    imageId: string,
  ) {
    return this.databaseService.collection.findFirst({
      where: {
        id: collectionId,
        images: {
          has: imageId,
        },
      },
    });
  }

  async addImageToCollection(
    collectionId: string,
    imageId: string,
  ) {
    const hasImage = await this.findImageInCollection(collectionId, imageId);
    if (hasImage) {
      throw new BadRequestException(`Image ${imageId} already exists in collection ${collectionId}`);
    }

    return this.databaseService.collection.update({
      where: { id: collectionId },
      data: {
        images: {
          push: imageId,
        },
      },
    });
  }
}
