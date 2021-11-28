<script context="module">
  export function load({ error, status }) {
    return {
      props: {
        error,
        status
      }
    }
  }
</script>

<script>
  export let error;
  export let status;
</script>

<h1>An Error happened</h1>

<h3>{error.message}</h3>
<h3>{status}</h3>
