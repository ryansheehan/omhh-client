<script lang="ts" context="module">
  import type {ImageData} from '$lib/api/sanity';

  export interface ImageProps {
    source: ImageData;
    widths?: number[];
    sizes?: string[];
    quality?: number;
  }
</script>

<script lang="ts">
  import {imageBuilder} from '$lib/api/sanity';

  export let source: ImageData;  
  export let widths: number[] = [];
  export let sizes: string[] = [];
  export let quality: number = 80;

  const {alt} = source;

  const imgUrls = widths.map(width => imageBuilder.image(source).width(width).quality(quality).auto('format').url());
  const src = imgUrls.length > 0 ? imgUrls[imgUrls.length - 1] : imageBuilder.image(source).quality(quality).auto('format').url();
  const srcset = widths.map((width, i) => `${imgUrls[i]} ${width}w`).join(', ');
</script>

<img {src} {srcset} sizes={sizes.join(', ')} {alt} />

<style lang="postcss">
  img {
    max-block-size: 100%;
    max-inline-size: 100%;
    object-fit: contain;    
  }
</style>