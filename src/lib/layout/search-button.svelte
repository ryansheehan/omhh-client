<script lang="ts">
  import SearchIcon from '$lib/icons/search.svelte';
  import IconButton from './icon-button.svelte';
</script>

<IconButton onClick={() => {}}>
  <SearchIcon width="var(--menu-button-width)"/>
  <span slot="visually-hidden">search</span>
</IconButton> 