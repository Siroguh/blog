<script>
  import { name } from '$lib/info.js'
  import ArrowLeftIcon from '$lib/components/ArrowLeftIcon.svelte'
  import ArrowRightIcon from '$lib/components/ArrowRightIcon.svelte'
  import PostsList from '$lib/components/PostsList.svelte'

  /** @type {import('./$types').PageData} */
  export let data

  $: isFirstPage = data.page === 1
  $: hasNextPage = data.posts[data.posts.length - 1]?.previous
</script>

<svelte:head>
  <title>{name} | Posts</title>
</svelte:head>

  <PostsList posts={data.posts} />
  {#if !isFirstPage}
    <a href={`/posts/${data.page - 1}`} data-sveltekit-prefetch>
      <ArrowLeftIcon/>
      Previous
    </a>
  {:else}
    <div />
  {/if}

  {#if hasNextPage}
    <a href={`/posts/${data.page + 1}`} data-sveltekit-prefetch
      >Next
      <ArrowRightIcon/>
    </a>
  {/if}