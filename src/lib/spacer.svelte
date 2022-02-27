<script lang="ts">
  export let flex: string = '';
  export let width: string = '';
  export let height: string = '';
  export let color = 'transparent';
</script>

<div style="--flex:{flex};--width:{width};--height:{height};--background-color:{color}" />

<style lang="postcss">
  div {
    flex: var(--flex);
    width: var(--width);
    height: var(--height);
    background-color: var(--background-color);
  }
</style>
