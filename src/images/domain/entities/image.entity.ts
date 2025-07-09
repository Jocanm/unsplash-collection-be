export interface ImageEntityProps {
  id: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  width: number;
  height: number;
  altDescription: string;
  regularUrl: string;
  smallUrl: string;
  thumbUrl: string;
  downloadUrl: string;
  userName: string;
  userProfileImage: string;
}

export class ImageEntity {
  public readonly id: string;
  public readonly slug: string;
  public readonly createdAt: string;
  public readonly updatedAt: string;
  public readonly width: number;
  public readonly height: number;
  public readonly altDescription: string;
  public readonly regularUrl: string;
  public readonly smallUrl: string;
  public readonly thumbUrl: string;
  public readonly downloadUrl: string;
  public readonly userName: string;
  public readonly userProfileImage: string;

  constructor(props: ImageEntityProps) {
    Object.assign(this, props);
  }
}