<script>
    import '../app.css';
    import Navbar from "../Navbar.svelte";
    import {page} from "$app/stores";
</script>

<Navbar currentPath="{$page.url.pathname}"/>
<slot />