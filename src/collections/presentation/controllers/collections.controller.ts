import { Body, Controller, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { CreateCollectionUseCase } from 'src/collections/application/use-cases/create-collection.use-case';
import { GetCollectionByIdUseCase } from 'src/collections/application/use-cases/get-collection-by-id.use-case';
import { GetCollectionsUseCase } from 'src/collections/application/use-cases/get-collections.use-case';
import { CreateCollectionDto } from '../dtos/create-collection.dto';

@Controller('collections')
export class CollectionsController {
  constructor(
    private readonly getCollectionsUseCase: GetCollectionsUseCase,
    private readonly getCollectionByIdUseCase: GetCollectionByIdUseCase,
    private readonly createCollectionUseCase: CreateCollectionUseCase
  ) { }

  @Get()
  findAll() {
    return this.getCollectionsUseCase.execute();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.getCollectionByIdUseCase.execute(id);
  }

  @Post()
  create(@Body() createCollectionDto: CreateCollectionDto) {
    return this.createCollectionUseCase.execute(createCollectionDto);
  }

  // @Post(':collectionId/images/:imageId')
  // addImageToCollection(
  //   @Param('collectionId', ParseUUIDPipe) collectionId: string,
  //   @Param('imageId', ParseUUIDPipe) imageId: string,
  // ) {
  //   return this.collectionsService.addImageToCollection(collectionId, imageId);
  // }
}
