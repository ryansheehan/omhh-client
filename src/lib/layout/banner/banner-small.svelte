<script lang="ts">
  import OmhhHome from './omhh-home-link.svelte';  
  import MenuButton from './menu-button.svelte';
  import SearchButton from './search-button.svelte';  
</script>

<div class="banner-small">
  <MenuButton/>
  <div class="center">
    <OmhhHome/>
  </div>
  <SearchButton/>
</div>

<style lang="postcss">
  .banner-small {
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;    
    padding-block: var(--size-2);
    padding-inline: var(--size-4);

    --menu-button-width: var(--size-7);
  }

  .center {
    margin-inline: auto;  
    height: var(--size-10);
    width: fit-content;      
  } 

  @media screen and (--md-n-above) {
    .banner-small {
      display: none;
    }
  }
</style>