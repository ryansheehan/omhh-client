<script lang="ts">
  import type { PostRecipeListing } from '$lib/api/sanity';
  import Section from '$lib/components/section.svelte';
  import RecipeHighlight from './recipe-highlight.svelte';
  import HeartWrapper from '$lib/components/heart-wrapper.svelte';

  export let latestRecipes: PostRecipeListing[];
  
  const [latestRecipe, ...recentRecipes] = latestRecipes;
</script>

<Section>
  <div class="section-title">
    <HeartWrapper><h2>Taste the Latest</h2></HeartWrapper>
  </div>
  <RecipeHighlight recipe={latestRecipe} />
</Section>

<style lang="postcss">
  .section-title {
    margin-block-end: var(--size-3); 

    & h2 {
      color: var(--text-2);
      text-transform: uppercase;
      font-size: var(--font-size-fluid-1);
    }
  }
</style>