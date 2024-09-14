<script lang="ts">
  import AvatarIcon from "$lib/icons/Avatar.svelte"

  export let empty: boolean = false
  export let img: undefined|string = undefined
  export let name: string = "Пусто"
</script>

<div class="slot" class:empty={empty}>
  <div class="img">
    {#if img}
      <img src={img} alt="">
    {:else}
      <div class="avatar">
        <AvatarIcon />
      </div>
    {/if}
  </div>
  <div class="name">
    {name}
  </div>
</div>

<style lang="scss">
  .slot {
    display: flex;
    background: linear-gradient(90deg, #fff 22%, rgba(#fff, .5) 80%, rgba(#fff, 0) 100%);
    border-radius: .65em;

    font-family: "Caveat", sans-serif;

    transition: opacity 200ms;
  }

  .img {
    display: flex;
    width: 50px;
    height: 50px;

    border-radius: inherit;
    overflow: hidden;

    .avatar {
      display: flex;

      width: inherit;
      padding: 8px;
    }
  }

  .name {
    margin: auto;
    transform: translateX(-.5em);
  }

  .slot.empty {
    opacity: .5;
  }
</style>