<script lang="ts">
  import { fly } from 'svelte/transition';
  import Link from './link.svelte';
</script>

<nav aria-label="side navigation" transition:fly={{x: -16*14, duration: 300}}>
  <Link href="/">Home</Link>
</nav>

<style lang="postcss">
  nav {
    display: flex;
    flex-flow: column nowrap;
    gap: var(--size-2);
    color: var(--text-1);
    background-color: var(--surface-2);
    width: var(--size-14);
    height: 100%;
  }
</style>
