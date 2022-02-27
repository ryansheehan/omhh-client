<script lang="ts">
  import Footer from './footer.svelte';
  import Nav from './nav.svelte';
</script>

<div class="page-wrapper">
  <Nav />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style lang="postcss">
  .page-wrapper { 
    height: 100%;   
    display: flex;
    flex-direction: column;    
  }

  main {
    flex: 1;
  }
</style>