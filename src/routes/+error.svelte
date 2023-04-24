<script>
    import { page } from '$app/stores';
</script>

<div class="text-center py-8">
    <h1 class="text-6xl font-bold">{$page.status} {$page.error.message}</h1>
    <br />
    <h3 class="text-2xl">4xx = You broke it</h3>
    <h3 class="text-2xl">5xx = I broke it</h3>
</div>