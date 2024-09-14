<script>
  import '$lib/styles/global.scss'

  import GithubIcon from "$lib/icons/Github.svelte"
</script>

<a class="git_icon" href="https://github.com/SunderShadow/Tacker_game_front">
  <GithubIcon/>
</a>

<slot/>

<style lang="scss">
  @use "$lib/config.scss";

  .git_icon {
    display: flex;
    width: 40px;
    margin: .5rem 0 0 .5rem;
  }
</style>