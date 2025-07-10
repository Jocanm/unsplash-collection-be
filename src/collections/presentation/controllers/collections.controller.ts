import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, Put, Query } from '@nestjs/common';
import { AddImageToCollectionUseCase } from 'src/collections/application/use-cases/add-image-to-collection.use-case';
import { CreateCollectionUseCase } from 'src/collections/application/use-cases/create-collection.use-case';
import { DeleteCollectionUseCase } from 'src/collections/application/use-cases/delete-collection.use-case copy';
import { GetCollectionByIdUseCase } from 'src/collections/application/use-cases/get-collection-by-id.use-case';
import { GetCollectionsUseCase } from 'src/collections/application/use-cases/get-collections.use-case';
import { CreateCollectionDto } from '../dtos/create-collection.dto';
import { FindAllCollectionsDto } from '../dtos/find-all-collections.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Unsplash Collections')
@Controller('collections')
export class CollectionsController {
  constructor(
    private readonly getCollectionsUseCase: GetCollectionsUseCase,
    private readonly getCollectionByIdUseCase: GetCollectionByIdUseCase,
    private readonly createCollectionUseCase: CreateCollectionUseCase,
    private readonly deleteCollectionUseCase: DeleteCollectionUseCase,
    private readonly addImageToCollectionUseCase: AddImageToCollectionUseCase
  ) { }

  @Get()
  @ApiOperation({
    summary: 'Get all collections',
    description: 'Fetches all collections from the database.',
  })
  findAll(
    @Query() options: FindAllCollectionsDto
  ) {
    return this.getCollectionsUseCase.execute({
      query: options.query?.trim(),
      order: options.order ?? 'desc',
    });
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get collection by ID',
    description: 'Fetches a specific collection by its ID.',
  })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.getCollectionByIdUseCase.execute(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new collection',
    description: 'Creates a new collection with the provided details.',
  })
  create(@Body() createCollectionDto: CreateCollectionDto) {
    return this.createCollectionUseCase.execute(createCollectionDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete a collection',
    description: 'Deletes a specific collection by its ID.',
  })
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.deleteCollectionUseCase.execute(id);
  }

  @Put(':collectionId/images/:image')
  @ApiOperation({
    summary: 'Add an image to a collection',
    description: 'Adds a new image to the specified collection.',
  })
  addImageToCollection(
    @Param('image') image: string,
    @Param('collectionId', ParseUUIDPipe) collectionId: string,
  ) {
    return this.addImageToCollectionUseCase.execute(collectionId, image);
  }
}
