<script>
  import '$lib/global.scss'

  import Container from "$lib/components/Container.svelte"
  import Title from "$lib/components/Title.svelte";
</script>

<Container>
  <div class="title">
    <Title>ПОДКАТЫ</Title>
    <div class="subtext mt-2">Бей в лунку!</div>
  </div>

  <div class="inputs">
    <input placeholder="Назови себя"/>
  </div>
</Container>

<style>
  .title {
    width: max-content;
    margin: 5rem auto 0;
  }

  .subtext {
    color: #FFF;
    font-family: "Caveat", sans-serif;
    text-align: center;
  }
</style>