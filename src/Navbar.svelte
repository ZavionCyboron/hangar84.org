<script lang="ts">
    import { page } from '$app/stores';

    const normalize = (p: string) => (p === '/' ? '/' : p.replace(/\/$/, ''));

    $: currentPath = normalize($page.url.pathname);

    const directory = [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/about" },
        { name: "Projects", link: "/projects" },
        { name: "Events", link: "/events" },
        {
            name: "Sponsors",
            link: null,
            sub: [
                { name: "Why Sponsor Us", link: "/why-sponsor-us" },
                { name: "Potential Sponsors", link: "/potential-sponsors" },
                { name: "Current Sponsors", link: "/current-sponsors" }
            ]
        },
        { name: "Blog", link: "/blog" },
        { name: "Shop", link: "/shop" },
        { name: "Connect", link: "/connect" }
    ];

    // always current, updates automatically on navigation

    const sponsorLinks = directory.find(d => d.name === "Sponsors")?.sub?.map(s => s.link) ?? [];
    $: sponsorsActive = sponsorLinks.includes(currentPath);
</script>

<div class="navbar bg-gray-950">
    <div class="dropdown lg:hidden">
        <button tabindex="-1" class="btn btn-ghost no-animation">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </button>
        <ul tabindex="-1" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52">
            {#each directory as dir}
                {#if dir.sub == null && dir.link != null}
                    <li>
                        <a
                          href={dir.link}
                          class="nav-link {currentPath === normalize(dir.link) ? 'nav-active' : ''}"
                        >
                            {dir.name}
                        </a>
                    </li>
                {:else if dir.sub != null}
                    <li class="dropdown dropdown-hover">
                        <a
                          href="/why-sponsor-us"
                          class="nav-link flex items-center gap-1"
                          tabindex="0"
                        >
                        <span class="{sponsorsActive ? 'navbar-gradient' : ''}">
                          Sponsors
                        </span>

                            <svg
                              class="dropdown-arrow h-4 w-4 transition-transform duration-200
                                                {sponsorsActive ? 'rotate-180' : ''}"
                                   viewBox="0 0 24 24"
                                   fill="currentColor"
                                   aria-hidden="true"
                            >
                                <path d="M7.41 8.58 12 13.17l4.59-4.59L18 10l-6 6-6-6z"/>
                            </svg>
                        </a>

                        <ul class="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-56">
                            {#each dir.sub as sub}
                                <li>
                                    <a
                                      href={sub.link}
                                      class="nav-link {currentPath === normalize(sub.link) ? 'nav-active' : ''}"
                                    >
                                        {sub.name}
                                    </a>
                                </li>
                            {/each}
                        </ul>
                    </li>
                {/if}
            {/each}
        </ul>
    </div>

    <div class="flex-1">
        <a href="/" class="btn btn-ghost normal-case text-xl no-animation navbar-gradient">Hangar 84</a>
    </div>

    <ul class="menu menu-horizontal gap-x-2 hidden lg:flex flex-none">
        {#each directory as dir}
            {#if dir.sub == null && dir.link != null}
                <li>
                    <a
                      href={dir.link}
                      class="nav-link {currentPath === normalize(dir.link) ? 'nav-active' : ''}"
                    >
                        {dir.name}
                    </a>
                </li>
            {:else if dir.sub != null}
                <li class="dropdown dropdown-hover">
                    <a
                      href="/why-sponsor-us"
                      class="nav-link flex items-center gap-1"
                      tabindex="0"
                    >
                        <span class="{sponsorsActive ? 'navbar-gradient' : ''}">
                          Sponsors
                        </span>

                        <svg
                          class="dropdown-arrow h-4 w-4 transition-transform duration-200
                                        {sponsorsActive ? 'rotate-180' : ''}"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                            <path d="M7.41 8.58 12 13.17l4.59-4.59L18 10l-6 6-6-6z"/>
                        </svg>
                    </a>

                    <ul class="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-56">
                        {#each dir.sub as sub}
                            <li>
                                <a
                                  href={sub.link}
                                  class="nav-link {currentPath === normalize(sub.link) ? 'nav-active' : ''}"
                                >
                                    {sub.name}
                                </a>
                            </li>
                        {/each}
                    </ul>
                </li>
            {/if}
        {/each}
    </ul>
</div>