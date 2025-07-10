import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { GetCollectionByIdUseCase } from 'src/collections/application/use-cases/get-collection-by-id.use-case';
import { GetCollectionsUseCase } from 'src/collections/application/use-cases/get-collections.use-case';

@Controller('collections')
export class CollectionsController {
  constructor(
    private readonly getCollectionsUseCase: GetCollectionsUseCase,
    private readonly getCollectionByIdUseCase: GetCollectionByIdUseCase
  ) { }

  @Get()
  findAll() {
    return this.getCollectionsUseCase.execute();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.getCollectionByIdUseCase.execute(id);
  }

  // @Post()
  // create(@Body() createCollectionDto: CreateCollectionDto) {
  //   return this.collectionsService.create(createCollectionDto);
  // }

  // @Post(':collectionId/images/:imageId')
  // addImageToCollection(
  //   @Param('collectionId', ParseUUIDPipe) collectionId: string,
  //   @Param('imageId', ParseUUIDPipe) imageId: string,
  // ) {
  //   return this.collectionsService.addImageToCollection(collectionId, imageId);
  // }
}
