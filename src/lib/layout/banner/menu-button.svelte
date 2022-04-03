<script lang="ts">
  import MenuIcon from '$lib/icons/menu.svelte';    
  import SideNav from '../side-nav.svelte';
  import { modal } from '$lib/store/modal';
  import IconButton from '$lib/components/icon-button.svelte';
</script>

<IconButton onClick={() => modal.open(SideNav)} label="open side nav">
  <MenuIcon width="var(--menu-button-width)"/>  
</IconButton>
