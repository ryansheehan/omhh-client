<script lang="ts">
  import VisuallyHidden from '$lib/visually-hidden.svelte';
  
  export let onClick: () => void;  
</script>

<button on:click={onClick}>
  <slot/>
  <VisuallyHidden><slot name="visually-hidden"/></VisuallyHidden>
</button>

<style lang="postcss">
  button {
    background: transparent;
    border: none;
    padding: var(--size-1);
    height: fit-content; 
    color: var(--text-1);
  }
</style>