<script context="module">
  export async function load() {
    const posts = import.meta.globEager('../../posts/*.md');
    // console.log('posts', Object.values(posts));
    const postsList = Object.values(posts);
    const postsMeta = postsList.map(post => {
      return post.metadata;
    });
    // console.log('postsMeta', postsMeta);
    return {
      props: {
        posts: postsMeta
      }
    };
  }

</script>

<script>
  export let posts;

</script>

<div>
  <slot />
  <aside>
    <h5>Archive</h5>
    <ul>
      <li><a href="/posts/">Home</a></li>
      <li><a href="/posts/about">About</a></li>
      {#each posts as post}
      <li><a sveltekit:noscroll href={`/posts/${post.slug}`}>{post.title}</a></li>
      {/each}
      <li><a rel="external" href="https://leveluptutorials.com">levelup</a></li>
    </ul>
  </aside>
</div>
