<script lang="ts">
  import OmhhLogo from '$lib/icons/omhh.svelte';
  import Link from '../link.svelte';
  import MenuButton from '../menu-button.svelte';
  import SearchButton from '../search-button.svelte';

  const buttonWidth = 'var(--size-7)';
</script>

<div class="banner-small">
  <MenuButton/>
  <div class="center">
    <Link href="/" height="100%">
      <OmhhLogo />
    </Link>
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