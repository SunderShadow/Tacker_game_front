<script lang="ts">
import Title from "$lib/components/Title.svelte"

export let title: string
export let subtitle: string
</script>

<div class="title">
  <Title>{title}</Title>
  <div class="subtext mt-2">{subtitle}</div>
</div>

<style lang="scss">
  .title {
    width: max-content;
    margin: 0 auto;
  }

  .subtext {
    color: #FFF;
    font-family: "Caveat", sans-serif;
    font-size: 1.25rem;
    text-align: center;
  }
</style>