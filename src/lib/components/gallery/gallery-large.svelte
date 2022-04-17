<script lang="ts">
  import GalleryItem from './gallery-item.svelte';
  import type { GalleryData } from './gallery.model';

  export let gallery: GalleryData;
</script>

<div>
  {#each gallery as {_key, ...data} (_key)}
    <GalleryItem {data} />
  {/each}
</div>

<style lang="postcss">
  div {
    display: none;
    grid-template-columns: 1fr 1fr;
    gap: var(--size-fluid-2);

    @media (--sm-n-above) {
      display: grid;
    }

    @media (--md-n-above) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (--xl-n-above) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }  
</style>