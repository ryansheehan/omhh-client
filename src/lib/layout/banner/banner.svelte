<script lang="ts">
  import BannerSmall from './banner-small.svelte';
  import BannerLarge from './banner-large.svelte';  
  import {mdAndAbove} from '$lib/store/media';  

  let scrollY;
</script>

<svelte:window bind:scrollY={scrollY}/>

<header style="--box-shadow: {scrollY > 0 ? 'var(--shadow-4)' : 'none'}">
  {#if $mdAndAbove}
  <BannerLarge />
  {:else}
  <BannerSmall />
  {/if}
</header>

<style lang="postcss">
  header {    
    position: sticky;
    top: 0;
    left: 0;    
    /* min-height: var(--size-10);     */
    z-index: var(--layer-2);
    background-color: var(--surface-1);    
    /* padding-block: var(--size-2);
    margin-bottom: var(--size-2); */
    box-shadow: var(--box-shadow);
  }
</style>