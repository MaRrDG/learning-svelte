<script lang="ts">
  import MovieInfoCard from "../../lib/components/MovieInfoCard.svelte";
  import { movieList } from "$lib/store/movieList";
</script>

<svelte:head>
  <title>Watched</title>
  <meta name="description" content="What to Watch - Watched Page" />
</svelte:head>

<section class="flex flex-wrap items-center justify-center font-roboto gap-6">
  {#if $movieList.length > 0}
    {#each $movieList as item}
      <MovieInfoCard data={item} showStar={false} />
    {/each}
  {:else}
    You don't have any watched movie!
  {/if}
</section>
