<script lang="ts" context="module">
  import type {Load} from '@sveltejs/kit';

  export const load: Load = async ({params}) => {
    const slug = params.slug;

    return {
      props: {
        slug
      }
    }
  }
</script>

<script lang="ts">
  export let slug;
</script>

<div>Coming soon... {slug}</div>

<style lang="postcss">
  
</style>