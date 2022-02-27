<script lang="ts">
  import Link from './link.svelte';
</script>

<nav aria-label="side navigation">
  <Link href="/">Home</Link>
</nav>

<style lang="postcss">
  nav {
    display: flex;
    flex-flow: column nowrap;
    gap: var(--size-2);
    color: var(--gray-9);
    background-color: var(--gray-0);
    width: clamp(var(--size-14), 66vw, 90vw);
    height: 100%;
  }
</style>
