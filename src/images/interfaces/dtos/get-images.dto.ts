import { IsNotEmpty, IsString } from "class-validator";

export class GetImagesDto {
  @IsString()
  @IsNotEmpty()
  query: string;
}
