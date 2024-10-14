<script lang="ts">
  import StartState from "$lib/components/gameStates/start.svelte"
  import LobbyState from "$lib/components/gameStates/lobby.svelte"

  import gameAPI from "$lib/api/game"
  import gameStore, {type LobbyID, type Player} from "$lib/store/game"

  import {onMount} from "svelte"

  let gameConn: null|Promise<void>
  onMount(() => {
    gameConn = gameAPI.connect()
    gameConn.then(
      () => {
        gameAPI.on('lobby:join:success', function (data: {lobby_id: LobbyID, players: Player[]}) {
          console.log(data)
          gameStore.update(v => {
            v.lobby.id = data.lobby_id
            v.players  = data.players
            return v
          })

          gameStore.update(v => ({
            ...v,
            state: 'lobby'
          }))
        })

        gameAPI.on('lobby:create:success', function (data: {id: LobbyID, players: Player[]}) {
          gameStore.update(v => {
            v.isOwner  = true
            v.lobby.id = data.id
            v.players  = data.players
            return v
          })

          gameStore.update(v => ({
            ...v,
            state: 'lobby'
          }))
        })
      }
    )
  })
</script>`

{#if gameConn}
  {#await gameConn}
    Waiting for connection...
  {:then val}
    Connection success
  {:catch val}
    Connection error
  {/await}
{/if}

{#if $gameStore.state === 'start'}
  <StartState />
{:else if $gameStore.state === 'lobby'}
  <LobbyState />
{/if}
