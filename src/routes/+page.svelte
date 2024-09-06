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

  <div class="inputs mt-5">
    <input placeholder="Назови себя"/>
    <input class="mt-2" placeholder="Код комнаты"/>
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

  .inputs {
    width: 200px;

    margin-left: auto;
    margin-right: auto;
  }
</style>