import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetImagesUseCase } from 'src/images/application/use-cases/get-images.use-case';
import { GetImagesDto } from '../dtos/get-images.dto';

@ApiTags('Unsplash Images')
@Controller('images')
export class ImagesController {
  constructor(
    private readonly getImagesUseCase: GetImagesUseCase,
  ) { }

  @Get()
  @ApiOperation({
    summary: 'Get images from Unsplash',
    description: 'Fetches images from Unsplash based on the provided query.',
  })
  async getImages(@Query() getImagesDto: GetImagesDto) {
    return await this.getImagesUseCase.execute(getImagesDto.query.trim());
  }
}
