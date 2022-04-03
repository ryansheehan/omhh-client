<div class="container">
  <div class="block red"></div>
  <div class="block green"></div>
</div>

<style lang="postcss">
  .container {
    flex: 1 1 auto;    
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: stretch;
    gap: 0px;
    background-color: var(--surface-1);
    position: relative;
  }

  .block {
    width: 100%;
    background-color: var(--surface-4);
    border: 1px solid var(--gray-9);    
  }
  
  .red {
    background-color: var(--red-7)
  }
  .pink {
    background-color: var(--pink-7)
  }
  .grape {
    background-color: var(--grape-7)
  }
  .violet {
    background-color: var(--violet-7)
  }
  .indigo {
    background-color: var(--indigo-7)
  }
  .blue {
    background-color: var(--blue-7)
  }
  .cyan {
    background-color: var(--cyan-7)
  }
  .teal {
    background-color: var(--teal-7)
  }
  .green {
    background-color: var(--green-7)
  }
  .lime {
    background-color: var(--lime-7)
  }
  .yellow {
    background-color: var(--yellow-7)
  }
  .orange {
    background-color: var(--orange-7)
  }

  .surface-1 {
    background-color: var(--surface-1);
  }

  .surface-2 {
    background-color: var(--surface-2);
  }

  .surface-3 {
    background-color: var(--surface-3);
  }

  .surface-4 {
    background-color: var(--surface-4);
  }
</style>