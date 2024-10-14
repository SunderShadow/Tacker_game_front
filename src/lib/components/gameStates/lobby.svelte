<script lang="ts">
  import type {GameData} from "$lib/store/game"
  import type {Player}   from "$lib/store/game"

  import Container  from "$lib/components/Container.svelte"
  import TitleBlock from "$lib/components/TitleBlock.svelte"
  import PlayerSlot from "$lib/components/PlayerSlot.svelte"

  import gameStore from "$lib/store/game"
  import gameAPI   from "$lib/api/game"

  import {onDestroy, onMount} from "svelte"

  let gameData: GameData
  const unsubscribe = gameStore.subscribe(function (v) {
    gameData = v
  })

  function startGame() {
    gameAPI.sendAction('lobby:start')
  }

  onMount(() => {
    gameAPI.on('lobby:join:guest', function (data: {player: Player}) {
      gameStore.update(v => {
        v.players.push(data.player)
        return v
      })
    })
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

  {#if gameData.isOwner}
    <button class="start_btn mt-5" on:click={startGame}>Начать игру</button>
  {/if}
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