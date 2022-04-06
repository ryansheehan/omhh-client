<script lang="ts">
  import Footer from './footer.svelte';
  import Banner from './banner/banner.svelte';
</script>

<Banner />
<main>
  <slot />
</main>
<Footer />

<style lang="postcss">

  main {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    
  }
</style>
