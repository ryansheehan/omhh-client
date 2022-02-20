<script lang="ts">
  import "../app.css";
  import { modal } from '$lib/store/modal';
  import Modal from '$lib/modal.svelte';
</script>

<slot />

{#if $modal.open}
  <Modal />
{/if}

<style lang="postcss">
</style>
