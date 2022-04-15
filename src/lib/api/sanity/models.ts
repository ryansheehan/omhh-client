import type {SanityImageSource } from '@sanity/image-url/lib/types/types';
import type { PortableTextBlocks, } from '@portabletext/svelte/ptTypes';

export interface FoodScale {
  nutrition: { imageUrl: string; productUrl: string };
  postal: { imageUrl: string; productUrl: string };
}

export interface Contributor {
  name: string;
  bio: BlockData;
  image: ImageData;
  slug: string;
}

export interface StepGroup {
  key: string;
  header: string;
  steps: Step[];
}

export interface RecipeLinkCollection {
  recipes: {
    image: ImageData;
    slug: string;
    name: string;
  }[];
}

export interface RecipeDataInternal {
  _type: 'recipe';
  author: Contributor;
  cookTime: number;
  description: string;
  publishedAt: string;
  ingredients: (IngredientData|IngredientHeader)[];
  mainImage: ImageData;
  name: string;
  pinterestImage: ImageData;
  carbImage: ImageData;
  squareIGImage: ImageData;
  portions: PortionData[];
  post: BlockData;
  postClosing: BlockData;
  prepTime: number;    
  secondaryImage: ImageData;
  slug: { current: string };
  steps: (StepHeader | Step | StepReference)[];
  tags: {category: string; value: string}[];
  headerTags: string[];
  totalTime: number;
  totalWeight: number;
  totalServings: number; 
  yieldUnit: string; 
  affiliateProducts: AffiliateData[];
  alsoLike: RecipeLinkCollection[];
  serveWith: RecipeLinkCollection[];
  serveWithName: string;
  gallery: ImageData[];
  foodScale: FoodScale;
}

type RecipeInternalExcludeProps = 'ingredients' | 'steps' | 'alsoLike' | 'serveWith';
export interface RecipeData extends Omit<RecipeDataInternal, RecipeInternalExcludeProps> {
  ingredients: IngredientGroup[];
  steps: StepGroup[];
  serveWith: RelatedLink[];
  alsoLike: RelatedLink[];
}

export type BlockData = PortableTextBlocks;

export interface ImageData {
  alt: string;
  caption: string;
  asset: SanityImageSource;
  crop: {
    _type: string;
    bottom: number;
    left: number;
    right: number;
    top: number;
  },
  hotspot: {
    _type: string;
    height: number;
    width: number;
    x: number;
    y: number;
  }
}

export interface PortionData {
  amount: number;
  gram_weight: number;
  modifier?: string;
  portion_description?: string;
  unit: string;
}

export interface NutrientData {
  amount: number;
  name: string;
  unit_name: string;
}

export interface IngredientHeader {
  _type: 'ingredientHeader';
  _key: string;
  header: string;
}

export interface FoodData {
  _type: 'food';
  description: string;
  fdc_id: number;
  nutrients: NutrientData[];
  portions: PortionData[];
  optional: boolean;
  unit: string;
  productSuggestion?: AffiliateData;
  notes?: BlockData;
}

export interface IngredientData {
  _type: 'ingredient';
  _key: string;
  amount: number;
  displayName: string;
  displayModifier: string;  
  hideDisplayUnit: boolean;
  divisor: number;
  modifier: string;
  isGarnish: boolean;  
  toTaste: boolean;
  unit: string;
  food: FoodData | RecipeData;
}

export interface Tag {
  category: string;
  value: string;
}

export interface Step {
  _key: string;
  _type: 'step';
  instructions: BlockData;
}

export interface StepReference {
  _key: string;
  _type: 'reference';
  data: {
    _id: string;
    _type: 'recipe';
    name: string;
    steps: Step[];
  }
}

export interface StepHeader {
  _key: string;
  _type: 'stepHeader';
  header: string;
}

export interface StepGroup {
  key: string;
  header: string;
  steps: Step[];
}

export interface IngredientGroup {
  key: string;
  header: string;
  ingredients: IngredientData[];
}

export interface RecipeListing {
  mainImage: ImageData;
  slug: string;
  name: string;
  description: string;
  _id: string;
}

export interface AffiliateData {
  _id: string;   
  imageUrl: string; // actually html code here
  name: string;
  productUrl: string;
}

export interface RelatedLink {
  image: ImageData;
  href: string;
  name: string;
}

export interface PostRecipeListing {
  name: string;
  _id: string;
  mainImage: ImageData;
  description: string;
  slug: string;
}

export interface TagListing {
  _id: string;
  value: string;
  image: ImageData;
}
export interface LandingData {
  latestRecipes: PostRecipeListing[];
  latestPosts: PostRecipeListing[];
  categories: TagListing[];
  seasons: TagListing[];
  occasions: TagListing[];
  cuisines: TagListing[];
  diets: TagListing[];
  about: Omit<Contributor, 'slug'>;
}