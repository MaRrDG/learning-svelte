<script lang="ts">
  import { movieList } from "$lib/store/movieList";

  export let data: IMovie;
  export let showStar: boolean = true;
  export let starred: boolean = false;

  const handleClick = () => {
    starred = !starred;
    $movieList = [...$movieList, data];
  };
</script>

<section class="flex flex-col items-center justify-center font-roboto space-y-3">
  <h1 class="text-2xl capitalize">{data.Title}</h1>

  <div class="w-[18rem] h-[80%] relative">
    <img src={data.Poster} alt="star" class="object-contain" />
    {#if showStar}
      <button on:click={handleClick} class="absolute top-1 right-1">
        <svg style={`color: ${starred ? "#FFCC00" : "white"}; `} width="35" height="35" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
            fill="currentColor"
          />
        </svg>
      </button>
    {/if}
  </div>

  <ul class="w-[42rem] text-center">
    <li class="text-[#40855a]">
      Year:
      <span class="text-[#05386B]">{data.Year}</span>
    </li>
    <li class="text-[#40855a]">
      Released:
      <span class="text-[#05386B]">{data.Released}</span>
    </li>
    <li class="text-[#40855a]">
      Genre:
      <span class="text-[#05386B]">{data.Genre}</span>
    </li>
    <li class="text-[#40855a]">
      Director:
      <span class="text-[#05386B]">{data.Director}</span>
    </li>
    <li class="text-[#40855a]">
      Plot:
      <span class="text-[#05386B]">{data.Plot}</span>
    </li>
    <li class="text-[#40855a]">
      imdbRating:
      <span class="text-[#05386B]">{data.imdbRating}</span>
    </li>
  </ul>
</section>
