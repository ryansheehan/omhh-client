<script lang="ts">
  import MenuIcon from '$lib/icons/menu.svelte';    
  import SideNav from './side-nav.svelte';
  import { modal } from '$lib/store/modal';
  import IconButton from './icon-button.svelte';
</script>

<IconButton onClick={() => modal.open(SideNav)}>
  <MenuIcon width="var(--menu-button-width)"/>
  <span slot="visually-hidden">open side nav</span>
</IconButton>
