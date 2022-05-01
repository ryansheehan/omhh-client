<script lang="ts">
  import Image from '$lib/components/sanity-image.svelte';
  import type { GalleryItem } from './gallery.model';

  export let data: Omit<GalleryItem, '_key'>;

  const {href, image, title} = data;
</script>

<a {href}>
  <Image source={image} />
  <p>{title}</p>
</a>

<style lang="postcss">
  a {
    padding: 0;
    text-decoration-color: var(--text-2);
    text-decoration: none;
    height: fit-content;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    gap: var(--size-2);
  }

  p {
    text-align: center;
    font-size: var(--font-size-fluid-0);
    color: var(--text-2); 
    height: 2.2em;
    line-height: 1.1em;
    overflow: hidden;   
  }
</style>