<script>
  export let data;
  console.log(!!data);
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
  pagina de test slug: <p>{data.slug}</p>
</div>
