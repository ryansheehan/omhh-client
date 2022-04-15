<script lang="ts">
  import type { PostRecipeListing } from '$lib/api/sanity';
  import Section from '$lib/components/section.svelte';
  import RecipeHighlight from './recipe-highlight.svelte';

  export let latestRecipes: PostRecipeListing[];
  
  const [latestRecipe, ...recentRecipes] = latestRecipes;
</script>

<Section>
  <RecipeHighlight recipe={latestRecipe} />
</Section>
