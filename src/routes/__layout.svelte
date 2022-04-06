<script lang="ts">
  import "../app.css";
  import { modal } from '$lib/store/modal';
  import Modal from '$lib/modal.svelte';
  import Page from '$lib/layout/page.svelte';
</script>

<svelte:head>  
  <link rel="canonical" href={`${import.meta.env.VITE_BASE_URL}`}>
  <meta name="theme-color" content="#FFFFFF">  
  <title>Oh My Heart and Home</title>
</svelte:head>

<Page>
  <slot />
</Page>

{#if $modal.open}
  <Modal />
{/if}

<style lang="postcss">
</style>
