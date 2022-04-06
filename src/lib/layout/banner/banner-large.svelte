<script lang="ts">
  import Headline from './headline.svelte';
  import Link from './link.svelte';
</script>

<nav class="banner-large" aria-label="main navigation">
  <Link href="#"><span class="nav-item">Recipes</span></Link>
  <Link href="#"><span class="nav-item">Lifestyle</span></Link>
  <div class="center">
    <Headline />
  </div>
  <Link href="#"><span class="nav-item">Shop</span></Link>
  <Link href="#"><span class="nav-item">About</span></Link>
</nav>

<style lang="postcss">
  .banner-large {
    display: none;
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
