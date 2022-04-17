<script lang="ts">
  import GalleryLarge from './gallery-large.svelte';
  import GallerySmall from './gallery-small.svelte';
  import type {GalleryData} from './gallery.model';
  import {smAndAbove} from '$lib/store/media';

  export let gallery: GalleryData;
  export let label: string;
</script>

{#if $smAndAbove}
  <GalleryLarge {gallery} />
{:else}
  <GallerySmall {gallery} {label} />
{/if}
