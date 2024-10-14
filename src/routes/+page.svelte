<script lang="ts">
  import {goto} from '$app/navigation'
  import game from "$lib/store/game"

  import '$lib/styles/global.scss'

  import Container from "$lib/components/Container.svelte"
  import TitleBlock from "$lib/components/TitleBlock.svelte"
  import type {GameData} from "$lib/store/game"
  import {onDestroy} from "svelte";

  let player = {
    name: ""
  }

  let gameData: GameData
  const unsubscribe = game.subscribe((v) => {
    gameData = v
  })

  onDestroy(() => {
    unsubscribe()
  })
  function joinLobby() {
    goto('/lobby')
  }

  function createLobby() {
    goto('/lobby')
  }
</script>`

<Container>
  <div class="title_container">
    <TitleBlock title="Подкаты" subtitle="Бей в лунку!"/>
  </div>

  <div class="inputs mt-5">
    <input placeholder="Назови себя" bind:value={player.name}/>
    <input class="mt-2" placeholder="Код комнаты"/>
  </div>

  <button class="btn mt-5" on:click={joinLobby}>
    Присоединится
  </button>

  <div class="or_divider mt-2">
    <hr class="divider mt-2">
    Или
    <hr class="divider mt-2">
  </div>

  <button class="btn mt-2" on:click={createLobby}>
    Создать лобби
  </button>
</Container>

<style lang="scss">
  @use "$lib/config.scss";

  .title_container {
    padding-top: 2rem;

    @media (min-width: config.$screen-size-desktop) {
      padding-top: 5rem;
    }
  }

  .inputs {
    width: 300px;

    margin-left: auto;
    margin-right: auto;
  }

  .btn {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .divider {
    border-color: #fff;
    border-width: 2px;
    width: 80%;
    margin: 0;
  }

  .or_divider {
    display: flex;
    gap: 1rem;
    align-items: center;

    width: min(80%, 500px);
    margin-left: auto;
    margin-right: auto;

    color: #fff;
    text-transform: uppercase;
    font-family: "Caveat", sans-serif;
  }
</style>