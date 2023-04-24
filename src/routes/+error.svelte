<script>
    import { page } from '$app/stores';
</script>

<svelte:head>
    <title>{$page.status} {$page.error.message} | Hangar 84</title>
    <meta content="{$page.status} {$page.error.message} | Hangar 84" property="og:title" />
    {#if $page.status === 404}
        <script>
            import {error} from "@sveltejs/kit";

            throw error(200, {
                message: 'Not found'
            });
        </script>
        <meta content="You shared a non-existant page. How awkward..." property="og:description" />
    {:else}
        <meta content="You shared a broken page. How very awkward..." property="og:description" />
    {/if}
    <meta content="https://hangar84.org/" property="og:url" />
    <meta content="#ff0000" data-react-helmet="true" name="theme-color" />
</svelte:head>

<div class="text-center py-8">
    <h1 class="text-6xl font-bold">{$page.status} {$page.error.message}</h1>
    <br />
    <h3 class="text-2xl">4xx = You broke it</h3>
    <h3 class="text-2xl">5xx = I broke it</h3>
</div>