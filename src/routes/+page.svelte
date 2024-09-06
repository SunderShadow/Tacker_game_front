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

  <button class="btn mt-5">
    Присоединится
  </button>

  <hr class="divider mt-2">

  <button class="btn mt-2">
    Создать лобби
  </button>
</Container>

<style>
  .title {
    width: max-content;
    margin: 0 auto;
    padding-top: 5rem;
  }

  .subtext {
    color: #FFF;
    font-family: "Caveat", sans-serif;
    text-align: center;
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
    width: 80%;
  }
</style>