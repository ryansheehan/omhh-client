<script lang="ts">
  import "../app.css";
  import { modal } from '$lib/store/modal';
  import Modal from '$lib/modal.svelte';
  import Page from '$lib/layout/page.svelte';
</script>

<Page>
  <slot />
</Page>

{#if $modal.open}
  <Modal />
{/if}

<style lang="postcss">
</style>
