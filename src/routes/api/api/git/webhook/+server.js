import { handleWebhook } from 'svelte-git-cms';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    return handleWebhook(request)
}