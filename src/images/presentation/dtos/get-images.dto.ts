import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class GetImagesDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'cats',
    description: 'Search query for fetching images from Unsplash',
  })
  query: string;
}
