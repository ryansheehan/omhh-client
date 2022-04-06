<script lang="ts" context="module">
  export type Color = 'red' | 'pink' | 'grape' | 'violet' | 'indigo' | 'blue' | 'cyan' | 'teal' | 'green' | 'lime' | 'yellow' | 'orange';
  const colors: Color[] = ['red', 'pink', 'grape', 'violet', 'indigo', 'blue', 'cyan', 'teal', 'green', 'lime', 'yellow', 'orange'];
  export function randomColors(count = 1) {    
    return Array.from({ length: count }, () => colors[Math.floor(Math.random() * colors.length)]);
  }
</script>

<script lang="ts">
  const [randomColor] = randomColors(1);
  export let color: Color = randomColor;
  export let width = 64;
  export let height = 64; 
</script>

<div class="color" style="--color: var(--{color}-7); width: {width}px; height: {height}px;"/>

<style lang="postcss">
  div {    
    background-color: var(--color);    
  }
</style>