<script lang="ts">
  import type { PostRecipeListing } from '$lib/api/sanity';
  import Section from '$lib/components/section.svelte';  
  import HeartWrapper from '$lib/components/heart-wrapper.svelte';
  import Gallery from '$lib/components/gallery/gallery.svelte';
  import type { GalleryData } from '$lib/components/gallery/gallery.model';
  import RecipeHighlight from './recipe-highlight.svelte';

  export let latestRecipes: PostRecipeListing[];
  
  const latestRecipe = latestRecipes[0];

  const gallery: GalleryData = latestRecipes.slice(1).map(({_id, mainImage, name, slug}) => ({
    _key: _id,
    href: `recipes/${slug}`,
    image: mainImage,
    title: name,
  }));


</script>

<Section>
  <div class="section-title">
    <HeartWrapper><h2>Taste the Latest</h2></HeartWrapper>
  </div>
  <div class="content-layout">
    <div class="highlight">
      <RecipeHighlight recipe={latestRecipe} />
    </div>
    <div class="gallery">
      <Gallery {gallery} label="Latest Recipes"/>
    </div>
  </div>
</Section>

<style lang="postcss">
  .section-title {    
    & h2 {
      color: var(--text-2);
      text-transform: uppercase;
      font-size: var(--font-size-fluid-1);
    }
  }  

  .content-layout {
    padding-top: var(--size-4);
    display: flex;
    flex-flow: column nowrap;
    gap: var(--size-4);
    padding-inline: var(--size-4);
  }
</style>