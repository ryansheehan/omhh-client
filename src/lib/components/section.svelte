<script lang="ts" context="module">
  export type Surface = '1' | '2' | '3' | '4';
</script>

<script lang="ts">
  export let surface: Surface = '1';
</script>

<section style="--surface: var(--surface-{surface});">
  <div class="content">
    <slot/>
  </div>
</section>

<style lang="postcss">
  section {
    background-color: var(--surface);    
    padding-block: var(--size-4);
    min-inline-size: 100%;    
  }

  .content {
    max-width: var(--size-lg);
    margin-inline: auto;
  }
</style>
