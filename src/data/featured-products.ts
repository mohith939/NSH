import { rwdProducts } from "./rwd-catalogue";

export type FeaturedProduct = {
  name: string;
  manufacturer?: string;
  model?: string;
  category: string;
  description: string;
  highlights?: string[];
  image?: { src: string; alt: string };
  bestSeller?: boolean;
  sample?: boolean;
};

// Verified RWD Life Science flagship research equipment supported by NSH
export const featuredProducts: FeaturedProduct[] = rwdProducts
  .filter((p) => p.featured)
  .map((p) => ({
    name: p.name,
    manufacturer: p.manufacturer,
    model: p.model,
    category: p.categoryName,
    description: p.description,
    highlights: p.highlights.slice(0, 3),
    image: p.image,
    bestSeller: p.bestSeller,
    sample: false,
  }));
