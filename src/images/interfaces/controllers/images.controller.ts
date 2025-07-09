import { Controller, Get, Query } from '@nestjs/common';
import { GetImagesUseCase } from 'src/images/application/use-cases/get-images.use-case';
import { GetImagesDto } from '../dtos/get-images.dto';

@Controller('images')
export class ImagesController {
  constructor(
    private readonly getImagesUseCase: GetImagesUseCase,
  ) { }

  @Get()
  async getImages(@Query() getImagesDto: GetImagesDto) {
    return await this.getImagesUseCase.execute(getImagesDto.query);
  }
}
