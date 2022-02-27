<script lang="ts">
  export let href: string;
  export let height = 'fit-content';
</script>

<a {href} style="--height:{height}"><slot/></a>

<style lang="postcss">
  a {      
    display: block;     
    height: var(--height); 
    width: fit-content; 
    text-decoration: none; 
  }

  a, a:hover, a:visited, a:active {
    color: var(--gray-9)
  }

  a:hover {
    text-decoration: underline;
  }
</style>