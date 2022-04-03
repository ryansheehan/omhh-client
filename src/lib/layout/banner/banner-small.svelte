<script lang="ts">
  import Headline from './headline.svelte';  
  import MenuButton from './menu-button.svelte';
  import SearchButton from './search-button.svelte';  
</script>

<div class="banner-small">
  <MenuButton/>
  <div class="center">
    <Headline/>
  </div>
  <SearchButton/>
</div>

<style lang="postcss">
  .banner-small {
    height: var(--size-9);
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    padding: 0 var(--size-3);

    --menu-button-width: var(--size-7);
  }

  .center {
    margin-inline: auto;  
    height: 100%;
    width: fit-content;  
  } 

  @media screen and (--md-n-above) {
    .banner-small {
      display: none;
    }
  }
</style>