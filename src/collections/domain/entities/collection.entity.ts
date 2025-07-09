type CollectionEntityProps = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  images: string[];
}

export class CollectionEntity {
  public readonly id: string;
  public readonly name: string;
  public readonly createdAt: string;
  public readonly updatedAt: string;
  public readonly images: string[];

  constructor(props: CollectionEntityProps) {
    Object.assign(this, props);
  }
}