<div class="container">
  <slot/>
</div>

<style lang="scss">
  @use "$lib/config.scss";

  .container {
    @media (min-width: config.$screen-size-tablet) {
      max-width: config.$container-width-tablet;
    }
    
    @media (min-width: config.$screen-size-desktop) {
      max-width: config.$container-width-desktop;
    }

    margin: 0 auto;
  }
</style>