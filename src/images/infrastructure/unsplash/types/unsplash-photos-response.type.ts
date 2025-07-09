export type UnsplashPhotosResponseType = {
  total: number;
  total_pages: number;
  results: UnsplashPhotoItem[];
}

export type UnsplashPhotoItem = {
  id: string;
  slug: string;
  alternative_slugs: AlternativeSlugs;
  created_at: string;
  updated_at: string;
  promoted_at: null | string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: null | string;
  alt_description: string;
  breadcrumbs: any[];
  urls: Urls;
  links: ResultLinks;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: null;
  topic_submissions: TopicSubmissions;
  asset_type: AssetType;
  user: User;
}

export type AlternativeSlugs = {
  en: string;
  es: string;
  ja: string;
  fr: string;
  it: string;
  ko: string;
  de: string;
  pt: string;
}

export type AssetType = "photo";

export type ResultLinks = {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export type TopicSubmissions = {
  film?: Film;
  "street-photography"?: Film;
  "food-drink"?: FoodDrink;
  wallpapers?: Film;
  "textures-patterns"?: Film;
}

export type Film = {
  status: string;
}

export type FoodDrink = {
  status: string;
  approved_on?: string;
}

export type Urls = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export type User = {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: null | string;
  twitter_username: null | string;
  portfolio_url: null | string;
  bio: null | string;
  location: null | string;
  links: UserLinks;
  profile_image: ProfileImage;
  instagram_username: null | string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  total_promoted_photos: number;
  total_illustrations: number;
  total_promoted_illustrations: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}

export type UserLinks = {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following?: string;
  followers?: string;
}

export type ProfileImage = {
  small: string;
  medium: string;
  large: string;
}

export type Social = {
  instagram_username: null | string;
  portfolio_url: null | string;
  twitter_username: null | string;
  paypal_email: null;
}
