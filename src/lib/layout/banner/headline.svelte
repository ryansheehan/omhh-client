<script lang="ts">
  import OmhhLogo from '$lib/icons/omhh.svelte';
  import VisuallyHidden from '$lib/visually-hidden.svelte';
  import Link from './link.svelte';
</script>

<Link href="/" height="100%">
  <h1>
    <OmhhLogo />
    <VisuallyHidden>Oh My Heart and Home</VisuallyHidden>
  </h1>
</Link>

<style lang="postcss">
  h1 {
    height: 100%;
  }
</style>