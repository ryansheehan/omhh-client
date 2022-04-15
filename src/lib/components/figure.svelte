<script lang="ts">  
  export let caption: string;
  export let fontSize = 1;
  export let lineHeight = 1;
</script>

<figure>
  <slot/>
  <figcaption style="--font-size: var(--font-size-{fontSize}); --line-height: var(--line-height-{lineHeight});">{caption}</figcaption>
</figure>

<style lang="postcss">
  figure {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  figcaption {
    font-family: var(--font-sans);   
    font-size: var(--font-size); 
    line-height: var(--line-height);
    padding: var(--size-4);
  }
</style>