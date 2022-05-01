<script lang="ts">
  import { Splide, SplideSlide, SplideTrack, type Options } from '@splidejs/svelte-splide';
  import SkipNext from '$lib/icons/skip-next.svelte';
  import SkipPrev from '$lib/icons/skip-previous.svelte';
  import GalleryItem from './gallery-item.svelte';
  import VisuallyHidden from '$lib/visually-hidden.svelte';
  import type { GalleryData } from './gallery.model';
  import '@splidejs/svelte-splide/css/core';

  export let gallery: GalleryData;
  export let label: string;

  const options: Options = {
    label,    
    perPage: 2,
    perMove: 1,
    gap: 'var(--size-2)',
    // updateOnMove: true,
  }
</script>


<Splide class="container" {options} hasTrack={false}>
  <div class="internal-wrapper">
    <SplideTrack>
      {#each gallery as {_key, ...data} (_key)}
        <SplideSlide>
          <GalleryItem {data} />
        </SplideSlide>
      {/each}
    </SplideTrack>
    <div class="splide__arrows">
      <button type="button" class="splide__arrow splide__arrow--prev">
        <VisuallyHidden>Previous Item</VisuallyHidden>
        <SkipPrev/>
      </button>
      <ul class="splide__pagination paginator"></ul>
      <button type="button" class="splide__arrow splide__arrow--next">
        <VisuallyHidden>Next Item</VisuallyHidden>
        <SkipNext/>
      </button>
    </div>      
  </div>
</Splide>  


<style lang="postcss">
  :global(button.splide__arrow) {
    display: block;
    padding: 0; 
    min-height: 100%;   
  }

  :global(.splide__arrows) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: var(--size-fluid-2);
    min-inline-size: 100%;      
    padding-block-start: var(--size-2);
  }

  :global(.splide__arrow) {
    background-color: transparent;
    font-size: var(--font-size-6);
    color: var(--text-2);
    transition-property: opacity;
    transition-duration: 200ms;
  }

  :global(.splide__arrow:disabled) {
    opacity: 0.2;
  }
  
  :global(.splide__pagination.paginator) {        
    padding: 0;
    gap: var(--size-2);        
  }

  :global(.splide__pagination.paginator li) {        
    line-height: inherit;
    text-align: center;    
    display: grid;
    place-items: center;    
  }

  :global(.splide__pagination.paginator button) { 
    --inactive: var(--gray-4);
    --active: var(--text-2);

    @media (--OSdark) {
      --inactive: var(--gray-7);       
    }
    
    padding: 0;
    margin: 0;
    inline-size: var(--size-3);
    aspect-ratio: var(--ratio-square);
    border-radius: var(--radius-round);
    background-color: var(--inactive);           
    border: 4px solid var(--inactive);  
    transition-property: background-color;
    transition-duration: 300ms;
  }

  :global(.splide__pagination.paginator button.is-active) {    
    background-color: var(--active);
  }

  

  .internal-wrapper {
    /* display: flex;
    flex-flow: column nowrap;
    align-items: center; */
    overflow: hidden;
    max-block-size: 100%;

    & :global(.splide__track) {
      max-inline-size: 100%;
    }

    & :global(.splide__list) {
      align-items: flex-start;
    }
  }  

  @media (--sm-n-above) {
    :global(.splide.container) {
      display: none;
    }
  }
</style>