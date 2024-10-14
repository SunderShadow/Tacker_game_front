<script lang="ts">
import ShadowInput from "$lib/components/ShadowInput.svelte"

export let template: string = "___ Some text ___ template ___"

function castTemplate() {
  return template.split('___')
}

$: castedTemplate = castTemplate()

export let inputs: Record<string, string> = {}
</script>

<div class="card">
  {#each castedTemplate as part, i}
    {#if i !== 0}
      {#key i}
        <ShadowInput bind:value={inputs[i]}/>
      {/key}
    {/if}

    {#if part !== ''}
      <span>{part}</span>
    {/if}
  {/each}
</div>


<style lang="scss">
@use "$lib/config.scss";
.card {
  background-color: #fff;
  font-size: 1.5rem;
  font-family: "Caveat", sans-serif;

  padding: 1.5rem;
  border-radius: .75rem;
  box-shadow: inset 0 0 10px config.$color-main;
}
</style>