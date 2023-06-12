<script lang="ts">
  export let data: IMovie;
</script>

<div class="flex mt-2 font-roboto">
  <img src={data.Poster} alt="star" class="w-[18rem] h-[80%] object-contain" />
  <div class="bg-[#8EE4AF] flex flex-col items-center justify-center text-center px-2">
    <span class="text-lg">{data.Title}</span>
    <span class="text-sm">{data.Genre}</span>
    <p>{data.Plot}</p>
  </div>
</div>
