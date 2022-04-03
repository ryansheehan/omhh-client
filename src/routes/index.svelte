<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';
  import { 
    getLandingPage, 
    type LandingData,
  } from '$lib/api/sanity';

  export const load: Load = async ({ fetch }) => {
    const pageData = await getLandingPage(fetch);

    return {
      props: {
        pageData
      }
    }
  }
</script>

<script lang="ts">
  import Section from '$lib/layout/section.svelte';

  export let pageData: LandingData;

  const {latestRecipes} = pageData;
  const [latestRecipe, ...recentRecipes] = latestRecipes;
</script>

<svelte:head>
  <title>Oh My Heart and Home</title>
</svelte:head>

<Section>
  
</Section>

<Section surface="2">
  <pre>{JSON.stringify(latestRecipes, undefined, 2)}</pre>
</Section>

<style lang="postcss">
  
</style>