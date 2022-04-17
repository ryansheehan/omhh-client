<script lang="ts">  
</script>

<section>
  <div class="content">
    <slot/>
  </div>
</section>

<style lang="postcss">
  section {
    background-color: var(--surface, var(--surface-1));    
    padding-block: var(--size-4);
    min-inline-size: 100%;    
  }

  .content {
    max-width: var(--size-xl);
    margin-inline: auto;
  }
</style>
