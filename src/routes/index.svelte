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
  import Section from '$lib/components/section.svelte';
  import HeartWrapper from '$lib/components/heart-wrapper.svelte';

  export let pageData: LandingData;

  const {latestRecipes} = pageData;
  const [latestRecipe, ...recentRecipes] = latestRecipes;
</script>

<svelte:head>
  <title>Oh My Heart and Home</title>   
  <meta name="description" content="Find homemade vegetarian and vegan recipes with nutritial information. Discover the products that we use to make the recipes. Learn about cooking."> 
</svelte:head>

<Section>
  <HeartWrapper><h2>Taste the latest</h2></HeartWrapper>
</Section>

<Section surface="2">
  
</Section>

<style lang="postcss">
  h2 {
    color: var(--text-2);
    text-transform: uppercase;
    font-size: var(--font-size-fluid-1);
  }
</style>