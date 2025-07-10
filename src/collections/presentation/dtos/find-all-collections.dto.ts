import { IsIn, IsOptional, IsString } from "class-validator";

export class FindAllCollectionsDto {
  @IsString()
  @IsOptional()
  query?: string;

  @IsString()
  @IsOptional()
  @IsIn(['asc', 'desc'])
  order?: 'asc' | 'desc';
}