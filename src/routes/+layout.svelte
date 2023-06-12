<script>
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<div class="bg-[#5CDB95] min-h-[100vh] flex flex-col p-2">
  <Header />

  <main class="flex-1 flex flex-col p-[1rem] w-full mr-0 mt-auto box-border">
    <slot />
  </main>

  <Footer />
</div>
