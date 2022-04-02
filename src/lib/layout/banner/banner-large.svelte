<script lang="ts">
  import OmhhLogo from '$lib/icons/omhh.svelte';
  import Link from '../link.svelte';
</script>

<nav class="banner-large" aria-label="main navigation">
  <Link href="#"><h2>Recipes</h2></Link>
  <Link href="#"><h2>Lifestyle</h2></Link>
  <div class="center">
    <Link href="/" height="100%">
      <OmhhLogo />
    </Link>
  </div>
  <Link href="#"><h2>Shop</h2></Link>
  <Link href="#"><h2>About</h2></Link>
</nav>

<style lang="postcss">
  .banner-large {
    display: none;
  }

  .center {
    margin-inline: 0; 
    height: 100%;
    width: fit-content;  
  }

  h2 {
    font-size: var(--font-size-fluid-1)
  }

  nav {        
    height: var(--size-10);    
    padding: 0 var(--size-2);
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
  }

  @media screen and (--md-n-above) {
    .banner-large {
      display: flex;
    }
  }
</style>
