<script lang="ts">
  import Block, {randomColors} from './_block.svelte';
  import Section from '$lib/components/section.svelte';
  export let count = 400;
  const colors = randomColors(count);
  const size = 128;
  const width = size;
  const height = size;
</script>

<Section>
  <div class="container">
    {#each colors as color, i (i)}
      <Block {color} {width} {height} />
    {/each}
  </div>
</Section>

<style lang="postcss">
  .container {
    flex: 1 1 auto;    
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;    
    gap: 8px;
    background-color: var(--surface-1);
    position: relative;
    padding-inline: var(--size-4);    
  }
</style>