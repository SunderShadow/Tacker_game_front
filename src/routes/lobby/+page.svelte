<script lang="ts">
  import Container from "$lib/components/Container.svelte"
  import TitleBlock from "$lib/components/TitleBlock.svelte"
  import PlayerSlot from "$lib/components/PlayerSlot.svelte"

  import game from "$lib/store/game.js"
  import type {GameData} from "$lib/store/game.js";
  import {onDestroy} from "svelte";

  let gameData: GameData
  const unsubscribe = game.subscribe(function (v) {
    gameData = v
  })

  onDestroy(() => {
    unsubscribe()
  })
  const MAX_PLAYERS = 8
</script>

<Container>
  <TitleBlock title="Лобби" subtitle={"ID: " + gameData.lobby.id.toString()}/>

  <div class="players_slots mt-3">
    {#each gameData.players as player}
      <PlayerSlot {...player}/>
    {/each}
  {#each Array(MAX_PLAYERS - gameData.players.length) as i}
    <PlayerSlot name="Empty" empty/>
  {/each}
  </div>

  <button class="start_btn mt-5">Начать игру</button>
</Container>

<style lang="scss">
  .players_slots {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 200px;

    margin-left: auto;
    margin-right: auto;
  }

  .start_btn {
    display: block;
    font-size: 1.25rem;
    margin-left: auto;
    margin-right: auto;
  }
</style>