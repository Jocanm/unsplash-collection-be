import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsOptional, IsString } from "class-validator";

export class FindAllCollectionsDto {
  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    description: 'Search query for filtering collections',
  })
  query?: string;

  @IsString()
  @IsOptional()
  @IsIn(['asc', 'desc'])
  @ApiProperty({
    required: false,
    description: 'Order of the collections',
    enum: ['asc', 'desc'],
    default: 'desc',
  })
  order?: 'asc' | 'desc';
}