<div class="wrapper">
  <div class="left"/>
  <div class="content">
    <slot/>
  </div>
  <div class="right"/>
</div>

<style lang="postcss">
  .wrapper {
    display: flex;
    flex-flow: row nowrap;
    min-inline-size: 100%;
    align-items: center;
    gap: 1ch;
  }

  .content {
    flex: none;
  }

  .left,.right {
    flex: 1;
    height: 1rem;
    background-image: url('/images/heart2.png');
    background-repeat: repeat-x;
    background-size: 10px;
  }

  .left {
    background-position: right;
  }

  .right {
    background-position: left;
  }
</style>