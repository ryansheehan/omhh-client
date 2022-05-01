<script lang="ts">
  import { fade } from 'svelte/transition';
  import GalleryItem from './gallery-item.svelte';
  import type { GalleryData } from './gallery.model';
  import {mdAndAbove, xlAndAbove} from '$lib/store/media';

  export let gallery: GalleryData;  

  let rowCount = 1;

  function showMore() {
    rowCount++;
  }

  $: colCount = ($mdAndAbove ? $xlAndAbove ? 5 : 3 : 2);
  $: items = gallery.slice(0, colCount * rowCount);
  $: hasMore = items.length < gallery.length;
</script>

<div class="wrapper">
  <div class="gallery">
    {#each items as {_key, ...data} (_key)}
      <div class="item" transition:fade>
        <GalleryItem {data} />
      </div>
    {/each}
  </div>
  
  {#if hasMore}
    <button type="button" on:click={showMore}>Show More</button>
  {/if}
</div>

<style lang="postcss">
  button {
    padding-inline: var(--size-8);
    padding-block: var(--size-2);
    border-radius: var(--radius-3);
    background-color: var(--surface-3);
    color: var(--text-2);

    &:hover {
      background-color: var(--surface-4);
      text-decoration: underline;
    }
  }

  .wrapper {
    min-inline-size: 100%;
    display: flex;
    flex-flow: column nowrap;
    gap: var(--size-4);
    align-items: center;
  }

  .gallery {
    --items-after: 3;

    display: none;
    grid-template-columns: 1fr 1fr;
    column-gap: var(--size-fluid-2);
    row-gap: var(--size-fluid-3);      

    @media (--sm-n-above) {
      display: grid;            
    }

    @media (--md-n-above) {
      grid-template-columns: 1fr 1fr 1fr;            
    }

    @media (--lg-n-above) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media (--xl-n-above) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }  
</style>