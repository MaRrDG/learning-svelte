<script lang="ts">
  import Card from "$lib/components/+card.svelte";
  import MOVIES from "$lib/data/Movies";
  import Movies from "$lib/functions/Movies";
  import { onMount } from "svelte";

  let movies: IMovie[] = [];

  onMount(() => {
    const MovieClass = new Movies(import.meta.env.VITE_MOVIE_REST_API);

    [0, 1, 2].forEach(async (item) => {
      const movie = await MovieClass.getMovieByNameAndYear(MOVIES[item].title, MOVIES[item].year);
      movies = [...movies, movie];
    });
  });
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="What to Watch - Home Page" />
</svelte:head>

<section class="flex flex-col items-center justify-center font-roboto space-y-6">
  <div class="flex flex-col w-[48rem]">
    <h1 class="text-2xl text-[#05386B]">What is it?</h1>
    <div>
      <p>
        Discover and explore a world of movies with "What to Watch?" This user-friendly website offers personalized film recommendations based on your
        preferences. Easily search for movies across various genres and mark them as watched to keep track of your cinematic journey. Connect with a community
        of movie lovers, share recommendations, and dive into engaging discussions. Let "What to Watch?" be your guide to finding the perfect movie for every
        mood and occasion.
      </p>
    </div>
  </div>
  <div class="flex flex-wrap flex-col w-[48rem]">
    <h1 class="text-2xl text-[#05386B]">TOP 3 Star Wars Movies</h1>
    {#each movies as item}
      <Card data={item} />
    {/each}
  </div>
</section>
