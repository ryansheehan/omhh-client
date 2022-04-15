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
  import LatestRecipes from '$lib/layout/landing/latest-recipes.svelte';

  export let pageData: LandingData;

  const {latestRecipes} = pageData;   
</script>

<svelte:head>
  <title>Oh My Heart and Home</title>   
  <meta name="description" content="Find homemade vegetarian and vegan recipes with nutritial information. Discover the products that we use to make the recipes. Learn about cooking."> 
</svelte:head>

<LatestRecipes {latestRecipes} />

<style lang="postcss">

</style>