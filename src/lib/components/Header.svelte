<script>
  const headerItems = [
    {
      title: "Home",
      slug: "/",
    },
    {
      title: "Search",
      slug: "/search",
    },
    {
      title: "Recommendation",
      slug: "/recommendation",
    },
    {
      title: "Watched",
      slug: "/watched",
    },
  ];
</script>

<header class="flex flex-col items-center justify-center text-[#05386B] font-roboto mb-6">
  <h1 class="text-4xl font-medium">What to watch?</h1>
  <div class="flex space-x-2 text-md tracking-wideer mt-1">
    {#each headerItems as item}
      <a href={item.slug} class="cursor-pointer text-lg">{item.title}</a>
    {/each}
  </div>
</header>
