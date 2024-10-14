<script lang="ts">
  import {onMount} from "svelte";

  let shadowInput: HTMLInputElement
  export let value = ''
  let focus = false

  onMount(() => {
    shadowInput.addEventListener('focus', () => {focus = true})
    shadowInput.addEventListener('focusout', () => {focus = false})
    shadowInput.addEventListener('input', e => {
      // @ts-ignore
      value = e.target.value
    })
  })

  function emulateInput() {
    shadowInput.focus()
  }
</script>

<span class="input" class:focus on:click={emulateInput}>{value === ''? '___' : value}</span>

<input class="shadowInput" default bind:this={shadowInput}>

<style lang="scss">
  @use "$lib/config.scss";

  $input-focus-color: #1baadf;
  $input-color: #156785;
  .input {
    display: inline-block;
    height: 1em;
    color: $input-color;

    background-color: rgba(config.$color-main, 0);

    transition: color 200ms;

    cursor: pointer;

    &.focus {
      color: $input-focus-color
    }
  }

  .shadowInput {
    position: fixed;
    top: -100%;
  }
</style>