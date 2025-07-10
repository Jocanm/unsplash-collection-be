import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { CreateCollectionUseCase } from 'src/collections/application/use-cases/create-collection.use-case';
import { DeleteCollectionUseCase } from 'src/collections/application/use-cases/delete-collection.use-case copy';
import { GetCollectionByIdUseCase } from 'src/collections/application/use-cases/get-collection-by-id.use-case';
import { GetCollectionsUseCase } from 'src/collections/application/use-cases/get-collections.use-case';
import { CreateCollectionDto } from '../dtos/create-collection.dto';

@Controller('collections')
export class CollectionsController {
  constructor(
    private readonly getCollectionsUseCase: GetCollectionsUseCase,
    private readonly getCollectionByIdUseCase: GetCollectionByIdUseCase,
    private readonly createCollectionUseCase: CreateCollectionUseCase,
    private readonly deleteCollectionUseCase: DeleteCollectionUseCase
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
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createCollectionDto: CreateCollectionDto) {
    return this.createCollectionUseCase.execute(createCollectionDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.deleteCollectionUseCase.execute(id);
  }
}
