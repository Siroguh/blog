import { githubSync } from 'svelte-git-cms'

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    await githubSync({
        github_repo: 'Siroguh/blog',
        github_token: process.env.GITHUB_TOKEN,
        label_prefix: '+',
        label_published: 'published',
        allowed_authors: 'Siroguh',
    })
    const response = await resolve(event);
    return response;
}