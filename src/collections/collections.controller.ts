import { Body, Controller, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { CollectionsService } from './collections.service';
import { CreateCollectionDto } from './dto/create-collection.dto';

@Controller('collections')
export class CollectionsController {
  constructor(private readonly collectionsService: CollectionsService) { }

  @Post()
  create(@Body() createCollectionDto: CreateCollectionDto) {
    return this.collectionsService.create(createCollectionDto);
  }

  @Get()
  findAll() {
    return this.collectionsService.findAll();
  }

  @Post(':collectionId/images/:imageId')
  addImageToCollection(
    @Param('collectionId', ParseUUIDPipe) collectionId: string,
    @Param('imageId', ParseUUIDPipe) imageId: string,
  ) {
    return this.collectionsService.addImageToCollection(collectionId, imageId);
  }
}
