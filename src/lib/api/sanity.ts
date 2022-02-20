import {dev} from '$app/env';
import imageUrlBuilder from '@sanity/image-url';
import type { 
  IngredientData,
  IngredientGroup,
  IngredientHeader,
  LandingData,
  RecipeData,
  RecipeDataInternal,
  RecipeLinkCollection,
  RelatedLink,
  Step,
  StepGroup,
  StepHeader,
  StepReference,
} from './models';

export type {SanityImageSource} from '@sanity/image-url/lib/types/types';
export * from './models';

const projectId = (import.meta.env.VITE_PUBLIC_SANITY_PROJECT_ID ?? 'no-project-id') as string;
const dataset = (import.meta.env.VITE_PUBLIC_SANITY_DATASET ?? 'development') as string;
const apiVersion = import.meta.env.VITE_PUBLIC_SANITY_API_VERSION || 'v1';
const useCdn = !dev;
const apiHost = 'https://api.sanity.io';
const sanityUrl = `https://${projectId}.${useCdn ? 'apicdn.sanity.io' : 'api.sanity.io'}/${apiVersion}/data/query/${dataset}`;

export const imageBuilder = imageUrlBuilder(
  {
    clientConfig: {
      dataset,
      projectId,
      apiHost,
    }
  }
);

const encodeQuery = query => encodeURIComponent(
  query
  // remove all whitespace
  .replace(/\s+/g, '')
  // repair _ref in tags due to white space removal
  .replace(/_refintags/g, '_ref in tags')
);

export async function getLandingPage(fetch: Fetch) {
  const query = encodeQuery(`
  {
    'latestRecipes': *[_type=='recipe' && defined(publishedAt)] | order(publishedAt desc)[0...5] {
      _id,
      name,
      mainImage,
      'slug': slug.current,
    },
    'latestPosts': *[_type=='post' && defined(publishedAt)] | order(publishedAt desc)[0...5] {
      _id,
      name,
      mainImage,
      'slug': slug.current,
    },
    'categories': *[_type=='tag' && category=='Category'] | order(value asc) { _id, value, image, },
    'seasons': *[_type=='tag' && category=='Season'] { _id, value, image, },
    'occasions': *[_type=='tag' && category=='Occasion'] { _id, value, image, }, 
    'cuisines': *[_type=='tag' && category=='Cuisine'] { _id, value, image, },
    'diets': *[_type=='tag' && category=='Dietary Restrictions'] { _id, value, image, },
    'about': *[_type=='contributor' && slug.current=='jadrien-sheehan'][0] {name, image, bio,},
  }
  `);
  const url = `${sanityUrl}?query=${query}`
  const data = await fetch(url);
  const json = await data.json();
  const landingData: LandingData = json.result;
  return landingData;
}

const richTextExpansion = `...,
children[]{
  ...,
  _type == 'affiliateProductReference' => {
    'data': *[_id == ^._ref][0]{
      name,
      imageUrl,
      productUrl,
    }, 
  },
},
markDefs[]{
  ...,
  _type == 'internalLink' => {
    reference {
      _type,
      _ref,
      _weak,
      'data': *[_id == ^._ref][0]{
        _type,
        'slug': slug.current,
      },
    },
  },
},`;

const foodExpansion = `_id,
description,
fdc_id,
nutrients[]{amount,name,unit_name},
portions,
productSuggestion->{imageUrl,name,productUrl},
notes[]{
  ${richTextExpansion}
},
`;

const richTextStepsExpansion = `
_type=='stepHeader' => {...},
_type=='step' => {
  ...,
  instructions[]{
    ${richTextExpansion}
  }
},
`;

const recipeReferenceExpansion = (tomorrow: string) => `
'recipes': *[_type=='recipe' && defined(publishedAt) && dateTime(publishedAt) < dateTime('${tomorrow}')  && ^._ref in tags[]._ref && $slug != slug.current]{
  'slug': slug.current,
  'image': mainImage,
  'name': name,
},`;

export async function getRecipeDataBySlug(slug: string, fetch: Fetch) {
  const todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);
  const tomorrow = new Date(todayDate);
  tomorrow.setDate(tomorrow.getDate() + 1);  
  const tomorrowIso = tomorrow.toISOString();
  const rawQuery = `
  *[_type=='recipe' && slug.current==$slug][0]{
    _type,

    _id,

    author->{name, bio, image, 'slug': slug.current},
    
    name,

    "headerTags": headerTags[]->value,

    mainImage,

    secondaryImage,

    description,

    pinterestImage,

    carbImage,

    post[]{
      ${richTextExpansion}
    },

    postClosing[]{
      ${richTextExpansion}
    },

    affiliateProducts[]->{_id,imageUrl,name,productUrl},

    'alsoLike': alsoLikeTags[]{
      ${recipeReferenceExpansion(tomorrowIso)}
    },

    'serveWith': serveWithTags[]{
      ${recipeReferenceExpansion(tomorrowIso)}
    },

    serveWithName,

    gallery,

    squareIGImage,

    publishedAt,

    tags[]->{category,value},

    prepTime, cookTime, totalTime,

    totalWeight, totalServings, yieldUnit,

    ingredients[]{
      _key,
      _type,
      _type == 'ingredientHeader' => { header, },
      _type == 'ingredient' => {
        ...,
        food->{
          _type,
          _type == 'food' => {
            ${foodExpansion}
          },
          _type == 'recipe' => {
            ingredients[]{
              _key,
              _type,
              _type == 'ingredientHeader' => { header, },
              _type == 'ingredient' => {
                ...,
                food->{
                  ${foodExpansion}
                },
              },
            }
          },
        },
      },
    },

    steps[]{
     ${richTextStepsExpansion}
      _type=='reference' => {
        _key,
        _type,
        "data": *[_id == ^._ref][0]{
          _id,
          _type,
          _type=='recipe' => {
            name,
            steps[]{
              ${richTextStepsExpansion}
            }
          }
        }
      }
    },

    'foodScale': {
      'nutrition': *[_id=='19a2dabd-4db8-4b1e-bb2a-0d792159ad0e'][0]{ imageUrl, productUrl },
      'postal': *[_id=='35407a6e-4ff0-4853-a795-8b3d44622ba8'][0]{ imageUrl, productUrl },
    },
  }
  `;

  const query = encodeQuery(rawQuery);
  const url = `${sanityUrl}?query=${query}&$slug="${slug}"`;    

  const data = await fetch(url);
  const json = await data.json();
  
  const {ingredients=[], steps=[], alsoLike=[], serveWith=[], ...restRecipe} = json.result as RecipeDataInternal;

  const recipe: RecipeData = {    
    ingredients: reduceIngredients(ingredients || []),
    steps: reduceSteps(steps || []),    
    alsoLike: reduceRecipeLinkCollection(alsoLike || []),
    serveWith: reduceRecipeLinkCollection(serveWith || []),
    ...restRecipe,
  };
  return recipe;
}

function reduceIngredients(
  data: (IngredientData | IngredientHeader)[], 
  scaleNumerator = 1,
  scaleDenominator = 1,
  groups: IngredientGroup[] = [],  
  currentGroup: IngredientGroup = {header: '', ingredients: [], key: 'empty'}
): IngredientGroup[] {
  for (let i = 0; i < data.length; i++) {
    const item = data[i];

    if (item._type === 'ingredientHeader') {
      currentGroup = {
        key: item._key,
        header: item.header,
        ingredients: [],
      }
      groups.push(currentGroup);
    } else {
      if (item.food._type === 'recipe') {
        // the api needs to convert recipe data internal to recipe data
        // this means that we need to process the ingredients of the internal representation
        const food = (item.food as unknown) as RecipeDataInternal; 
        
        // sub-recipes do not need garnish ingredients
        const foodIngredients = food.ingredients.filter(f => f._type === 'ingredient' && !f.isGarnish);     
        reduceIngredients(foodIngredients, item.amount, item.divisor, groups, currentGroup);
      } else {
        item.amount *= scaleNumerator;
        item.divisor *= scaleDenominator;              
        currentGroup.ingredients.push(item)
      }
    }
  }

  if (groups.length === 0) {
    groups.push(currentGroup);
  }

  return groups;
}

function reduceSteps(
  data: (Step | StepHeader | StepReference)[],
  groups: StepGroup[] = [],
  currentGroup: StepGroup = {header: '', steps: [], key: 'empty'}
): StepGroup[] {
  for (let i = 0; i < data.length; i++) {
    const item = data[i];

    if (item._type === 'stepHeader') {
      currentGroup = {
        key: item._key,
        header: item.header,
        steps: [],
      }
      groups.push(currentGroup);
    } else if(item._type === 'reference') {
      const ref = item.data;
      if (ref._type === 'recipe' && ref.steps.length > 0) {
        reduceSteps(ref.steps.slice(0, -1), groups, currentGroup);
      }
    } else {
      currentGroup.steps.push(item)
    }
  }

  if (groups.length === 0) {
    groups.push(currentGroup);
  }

  return groups;
}

function reduceRecipeLinkCollection(data: RecipeLinkCollection[]) {
  const uniqueSet = new Set<string>();
  const collection: RelatedLink[] = [];
  for(let col = 0; col < data.length; col++) {
    const {recipes} = data[col];
    for(let i = 0; i < recipes.length; i++) {
      const {image, slug, name} = recipes[i];      
      if (!uniqueSet.has(slug)) {
        uniqueSet.add(slug);
        collection.push({image, href: `/recipes/${slug}`, name: name});
      }      
    }
  }
  return collection;
}