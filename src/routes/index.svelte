<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';
  import { 
    getLandingPage, 
    type PostRecipeListing, 
    type TagListing, 
    type Contributor
  } from '$lib/api/sanity';

  export const load: Load = async ({ fetch }) => {
    const data = await getLandingPage(fetch);

    return {
      props: {
        ...data
      }
    }
  }
</script>

<script lang="ts">
  export let latestRecipes: PostRecipeListing[];
  export let latestPosts: PostRecipeListing[];
  export let categories: TagListing[];
  export let seasons: TagListing[];
  export let occasions: TagListing[];
  export let cuisines: TagListing[];
  export let diets: TagListing[];
  export let about: Contributor;
</script>

<pre>{JSON.stringify(latestRecipes, undefined, 2)}</pre>

<style lang="postcss">
  
</style>