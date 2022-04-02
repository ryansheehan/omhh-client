<script lang="ts">
  import Footer from './footer.svelte';
  import Banner from './banner/banner.svelte';
</script>

<div class="page-wrapper">
  <Banner />
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
    display: flex;
    flex-flow: column nowrap;
  }
</style>