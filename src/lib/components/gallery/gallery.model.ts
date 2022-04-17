import type { ImageData } from "$lib/api/sanity";

export interface GalleryItem {
  _key: string;
  image: ImageData;
  title: string;
  href: string;
}

export type GalleryData = GalleryItem[];