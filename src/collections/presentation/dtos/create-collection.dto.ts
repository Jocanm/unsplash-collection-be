import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateCollectionDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty({
    maxLength: 100,
    description: 'Name of the collection',
    example: 'My Favorite Cats',
  })
  name: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @MaxLength(255, { each: true })
  @ApiProperty({
    maxLength: 255,
    description: 'List of image URLs',
    example: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'],
  })
  images?: string[];
}