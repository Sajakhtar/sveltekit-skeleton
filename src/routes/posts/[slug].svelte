
<script context="module">
import { page } from "$app/stores";


  // context="module" necessary for code to run before render
  // we have access to in the load() input
    // page (host, path, params, query)
    //  fetch() on the server, usually this is only on the client
    // context()

  // What load() returns
    // status
    // error
    // redirect
    // props
    // context
    // maxage

 // goal of load function is to load data to make it available before it's been rendered on serverside

  export async function load({ page }) {

    try {
      const Post = (await import(`../../posts/${page.params.slug}.md`));
      // console.log(Hello.metadata.title);

      // const post = {
      //   title: page.params.slug,
      //   date: new Date(),
      //   body: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
      // };

      // common use case here is to hit an API and return the data as props

      return {
        // Props are data passed into svelte components
        props: {
          // post,
          Post: Post.default,
          // title: Post.metadata.title
        }
      }

    } catch(e) {

      // redirect example - return status and redirect path
      // return {
      //   status: 303,
      //   redirect: '/posts'
      // }

      // 404 example - return status and error message
      return {
        status: 404,
        error: 'Post not found'
      }
    }

  }
</script>

<script>
  // import Hello from '../../posts/hello.md';

  // need to export returned data to make it available to html
  // export let post;
  export let Post;
  // export let title;
</script>

<!-- <h3>{post.title}</h3> -->

<!-- <p>{post.body}</p> -->

<!-- <h2>{title}</h2> -->

<!-- <Hello /> -->

<!-- <Post /> -->
<svelte:component this={Post}/>
