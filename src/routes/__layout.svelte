<script>
  import Header from '$lib/Header.svelte';
</script>

<Header />

<main>
  <slot />
</main>


<footer>
  Copyright 2021
</footer>


<style>
  footer {
    background-color: gray;
  }
</style>
