<script>
  import Header from '$lib/Header.svelte';
  import '../tailwind.css';
</script>

<Header />

<main class="bg-blue-400">
  <slot />
</main>


<footer>
  Copyright 2021
</footer>


<style>

  /* :global(header) {
    background-color: gray;
  } */

  /* footer {
    background-color: gray;
  } */
</style>
