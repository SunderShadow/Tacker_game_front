<script>
  import '$lib/styles/global.scss'

  import Container from "$lib/components/Container.svelte"
  import Title from "$lib/components/Title.svelte"
  import GithubIcon from "$lib/icons/Github.svelte"
</script>

<a href="https://github.com/SunderShadow/Tacker_game_front" class="git_icon">
  <GithubIcon/>
</a>

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

  <div class="or_divider mt-2">
    <hr class="divider mt-2">
    Или
    <hr class="divider mt-2">
  </div>

  <button class="btn mt-2">
    Создать лобби
  </button>
</Container>

<style lang="scss">
  @use "$lib/config.scss";

  .git_icon {
    display: flex;
    width: 40px;
    margin: .5rem 0 0 .5rem;
  }

  .title {
    width: max-content;
    margin: 0 auto;

    padding-top: 2rem;

    @media (min-width: config.$screen-size-desktop) {
      padding-top: 5rem;
    }
  }

  .subtext {
    color: #FFF;
    font-family: "Caveat", sans-serif;
    font-size: 1.25rem;
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