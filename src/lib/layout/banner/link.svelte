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
    min-width: 104px;
    text-align: center;
  }

  a, a:hover, a:visited, a:active {
    color: var(--text-1);
  }

  a:hover {
    text-decoration: underline;
  }
</style>