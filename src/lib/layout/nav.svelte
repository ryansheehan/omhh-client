<script lang="ts">
  import OmhhLogo from '$lib/icons/omhh.svelte';
  import Link from './link.svelte';
  import MenuButton from './menu-button.svelte';
  import Spacer from '$lib/spacer.svelte';
  import {mdAndAbove} from '$lib/store/media';
</script>

<nav aria-label="main navigation">
  {#if $mdAndAbove}
    <Link href="#"><h2>Recipes</h2></Link>
    <Link href="#"><h2>Lifestyle</h2></Link>
    <div class="center">
      <Link href="/" height="100%">
        <OmhhLogo />
      </Link>
    </div>
    <Link href="#"><h2>Shop</h2></Link>
    <Link href="#"><h2>About</h2></Link>
  {:else}
    <MenuButton />
    <div class="center">
      <Link href="/" height="100%">
        <OmhhLogo />
      </Link>
    </div>
    <!-- placeholder for search button -->
    <Spacer width="32px" height="32px"/>
  {/if}
</nav>

<style lang="postcss">
  .center {
    margin-inline: auto;  
    height: 100%;
    width: fit-content;  
  }  

  nav {        
    height: var(--size-10);
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    padding: 0 var(--size-2);
  }

  h2 {
    font-size: var(--font-size-fluid-1)
  }

  @media screen and (--md-n-above) {
    .center {
      margin-inline: 0;      
    }

    nav {
      justify-content: space-evenly;
      align-items: center;
    }
  }
</style>