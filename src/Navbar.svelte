<script>
    export let currentPath = "";

    const directory = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "About Us",
            link: "/about"
        },
        {
            name: "Projects",
            link: "/projects"
        },
        {
            name: "Events",
            link: "/events"
        },
        {
            name: "Sponsors",
            link: null,
            sub: [
                {
                    name: "Potential Sponsors",
                    link: "/potential-sponsors"
                },
                {
                    name: "Current Sponsors",
                    link: "/current-sponsors"
                },
                {
                    name: "Why Sponsor Us",
                    link: "/why-sponsor-us"
                }
            ]
        },
        {
            name: "Blog",
            link: "/blog"
        },
        {
            name: "Shop",
            link: "/shop"
        },
        {
            name: "Connect",
            link: "/connect"
        }
    ];
</script>

<div class="navbar bg-base-200">
    <div class="dropdown lg:hidden">
        <button tabindex="-1" class="btn btn-ghost no-animation">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </button>
        <ul tabindex="-1" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52">
            {#each directory as dir}
                {#if dir.sub == null && dir.link != null}
                    <li class="{currentPath === dir.link ? 'disabled bg-primary-500' : ''}"><a href="{dir.link}">{dir.name}</a></li>
                {:else if dir.sub != null}
                    <li >
                        <span class="justify-between">
                            {dir.name}
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </span>
                        <ul class="p-2 bg-base-300">
                            {#each dir.sub as sub}
                                <li class="{currentPath === sub.link ? 'disabled bg-primary-500' : ''}"><a href="{sub.link}">{sub.name}</a></li>
                            {/each}
                        </ul>
                    </li>
                {/if}
            {/each}
        </ul>
    </div>

    <div class="flex-1">
        <a href="/" class="btn btn-ghost normal-case text-xl no-animation">Hangar 84</a>
    </div>

    <ul class="menu menu-horizontal gap-x-2 hidden lg:flex flex-none">
        {#each directory as dir}
            {#if dir.sub == null && dir.link != null}
                <li class="{currentPath === dir.link ? 'disabled bg-primary-500' : ''}"><a href="{dir.link}">{dir.name}</a></li>
            {:else if dir.sub != null}
                <li>
                    <span class="justify-between">
                        {dir.name}
                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                    </span>
                    <ul class="p-2 bg-base-300">
                        {#each dir.sub as sub}
                            <li class="{currentPath === sub.link ? 'disabled bg-primary-500' : ''}"><a href="{sub.link}">{sub.name}</a></li>
                        {/each}
                    </ul>
                </li>
            {/if}
        {/each}
    </ul>
</div>