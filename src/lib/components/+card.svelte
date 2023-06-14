<script lang="ts">
  export let data: IMovie;
</script>

<div class="flex mt-2 font-roboto w-[48rem] h-[23rem] flex-row">
  <img src={data.Poster} alt="star" loading="lazy" />
  <div class="bg-[#8EE4AF] flex flex-col items-center justify-center text-center px-2">
    <span class="text-lg">{data.Title}</span>
    <span class="text-sm">{data.Genre}</span>
    <p>{data.Plot}</p>
  </div>
</div>
