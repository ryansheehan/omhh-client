<script lang="ts" context="module">
  export type Surface = '1' | '2' | '3' | '4';
</script>

<script lang="ts">
  export let surface: Surface = '1';
</script>

<section style="--surface: var(--surface-{surface});">
  <slot/>
</section>

<style lang="postcss">
  section {
    background-color: var(--surface);
    padding-inline: var(--size-fluid-5);
    padding-block: var(--size-3);
    min-inline-size: 100%;
    min-block-size: var(--size-15);
  }
</style>
