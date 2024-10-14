<script lang="ts">
  import Card from "$lib/components/Card.svelte"
  import Container from "$lib/components/Container.svelte"

  function cardSend() {
    console.log(inputs)
  }
  let inputs: Record<string, string>
</script>

<Container>
  <Card bind:inputs/>

  <button class="mt-4" on:click={cardSend}>Submit</button>
</Container>

<style>
  button {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>