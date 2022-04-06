<script lang="ts">
  import VisuallyHidden from "$lib/visually-hidden.svelte";
  export let onClick: () => void;  
  export let label: string;
</script>

<button on:click={onClick} type="button">
  <VisuallyHidden>{label}</VisuallyHidden>
  <slot/>  
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