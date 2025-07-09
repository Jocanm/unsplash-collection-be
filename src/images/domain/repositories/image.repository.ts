import { ImageEntity } from "../entities/image.entity";

export abstract class ImageRepository {
  abstract searchImages(query: string): Promise<ImageEntity[]>;
}
