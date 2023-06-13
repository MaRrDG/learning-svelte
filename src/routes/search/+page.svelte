<script lang="ts">
  import Movies from "$lib/functions/Movies";
  import MovieInfo from "./MovieInfo.svelte";

  let movieName: string;
  let movie: IMovie | string;

  const handleSubmit = async (e: Event) => {
    e.preventDefault();

    const MovieClass = new Movies(import.meta.env.VITE_MOVIE_REST_API);
    const response = await MovieClass.getMovieByName(movieName);

    if (response.Error === "Movie not found!") return (movie = response.Error);
    movie = response;
  };
</script>

<svelte:head>
  <title>Search</title>
  <meta name="description" content="What to Watch - Search Page" />
</svelte:head>

<section class="flex flex-col items-center justify-center font-roboto space-y-6">
  <form class="text-center flex flex-col items-center justify-center space-y-3" on:submit={handleSubmit}>
    <h1 class="text-xl">Search your favorite movie and get some information's about it.</h1>
    <input
      bind:value={movieName}
      type="text"
      name="search"
      id="search"
      placeholder="Search for a movie"
      class="h-12 w-[24rem] pl-2 capitalize placeholder:normal-case"
      required
    />
    <input type="submit" value="Search" class="px-12 py-4 bg-[#8EE4AF] uppercase text-[#05386B] font-medium cursor-pointer" />
  </form>

  {#if movie && typeof movie !== "string"}
    <MovieInfo data={movie} />
  {:else if movie === "Movie not found!"}
    <p>No movie found!</p>
  {/if}
</section>
