<script lang="ts">
  import MenuIcon from '$lib/icons/menu.svelte';  
  import VisuallyHidden from '$lib/visually-hidden.svelte';
  import SideNav from './side-nav.svelte';
  import { modal } from '$lib/store/modal';
</script>

<button on:click={() => modal.open(SideNav)}>
  <MenuIcon />
  <VisuallyHidden>Navigation Menu</VisuallyHidden>
</button>

<style lang="postcss">
  button {
    background: transparent;
    border: none;
    padding: var(--size-1);
    height: fit-content;    
  }
</style>