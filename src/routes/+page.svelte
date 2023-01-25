<script>
  import ArrowRightIcon from '$lib/components/ArrowRightIcon.svelte'
  import PostsList from '$lib/components/PostsList.svelte'
  import SocialLinks from '$lib/components/SocialLinks.svelte'
  import { avatar, bio, name } from '$lib/info.js'

  /** @type {import('./$types').PageData} */
  export let data
</script>

<svelte:head>
  <title>{name}</title>
  <meta name="description" content={bio} />
</svelte:head>

<div>
  <!-- bio -->
  <section>
    <div>
      <img
        src={avatar}
        alt={name}
      />
      <div>
        <SocialLinks />
      </div>
      <p>
        {bio}
      </p>
    </div>
  </section>
  <section>
    <div>
      <h2>
        Recently Published
      </h2>
      <a href="/posts">
        View All <ArrowRightIcon class="w-4 h-4" />
      </a>
    </div>
    <PostsList posts={data.posts} />
  </section>
</div>
