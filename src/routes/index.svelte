<p>lorem ipsum</p>
<br/>
<div class="container">
  <div class="block"></div>
  <div class="block"></div>
  <div class="block"></div>
  <div class="block"></div>
</div>

<style lang="postcss">
  p {
    color: var(--red-5);
  }

  .container {
    --size: 100%;
    --gap:4px;   
    flex: 1 1 auto;     
    width: var(--size);    
    background-color: var(--gray-9);
    display: flex;
    flex-flow: row nowrap;
    align-items: stretch;
    gap: var(--gap);
  }

  .block {    
    width: 100%;    
  }

  .block:nth-child(1) {
    background-color: var(--red-5);
  }

  .block:nth-child(2) {
    background-color: var(--orange-5);
  }

  .block:nth-child(3) {
    background-color: var(--green-5);
  }

  .block:nth-child(4) {
    background-color: var(--blue-5);
  }
</style>