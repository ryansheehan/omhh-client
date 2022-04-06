<script lang="ts">
  import OmhhHome from './omhh-home-link.svelte';
  import Link from './link.svelte';
</script>

<nav class="banner-large" aria-label="main navigation">
  <Link href="#"><span class="nav-item">Recipes</span></Link>
  <Link href="#"><span class="nav-item">Lifestyle</span></Link>
  <div class="center">
    <OmhhHome />
  </div>
  <Link href="#"><span class="nav-item">Shop</span></Link>
  <Link href="#"><span class="nav-item">About</span></Link>
</nav>

<style lang="postcss">
  .banner-large {
    display: none;
    max-width: var(--size-xl);
    margin-inline: auto;
  }

  .center {
    margin-inline: 0; 
    height: var(--size-10);
    width: fit-content;    
  }

  .nav-item {
    font-family: var(--font-serif);
    font-size: var(--font-size-fluid-1)
  }

  nav {        
    height: auto;    
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    padding-block: var(--size-3);
  }

  @media screen and (--md-n-above) {
    .banner-large {
      display: flex;
    }
  }
</style>
