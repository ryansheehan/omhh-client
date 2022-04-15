<script lang="ts">
  const currentYear = new Date().getFullYear();
</script>


<footer>
  <span>Copyright &copy; {currentYear} Oh My Heart and Home, LLC.</span>
  <span>All rights reserved.</span>
</footer>

<style lang="postcss">
  footer {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding-block: var(--size-2);
    font-size: var(--font-size-0);
    background-color: var(--surface-1);
  }
</style>