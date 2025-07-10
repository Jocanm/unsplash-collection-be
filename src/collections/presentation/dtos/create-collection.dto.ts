import { ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateCollectionDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  @MaxLength(255, { each: true })
  images?: string[];
}