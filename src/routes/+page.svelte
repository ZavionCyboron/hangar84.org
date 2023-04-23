<svelte:head>
    <title>Home | Hangar 84</title>
    <meta content="Home | Hangar 84" property="og:title" />
    <meta content="Official website for Hangar 84, FRC Team 7271" property="og:description" />
    <meta content="https://hangar84.org/" property="og:url" />
    <meta content="#32cd32" data-react-helmet="true" name="theme-color" />
</svelte:head>

<div class="navbar bg-base-200">
    <div class="dropdown lg:hidden">
        <label tabindex="0" class="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52">
            <li class="disabled bg-base-300"><span>Home</span></li>
            <li><a>About Us</a></li>
            <li><a>Projects</a></li>
            <li><a>Events</a></li>
            <li>
            <span class="justify-between">
                Sponsors
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
            </span>
                <ul class="p-2 bg-base-300">
                    <li><a>Potential Sponsors</a></li>
                    <li><a>Current Sponsors</a></li>
                    <li><a>Why Sponsor Us</a></li>
                </ul>
            </li>
            <li><a>Blog</a></li>
            <li><a>Shop</a></li>
            <li><a>Connect</a></li>
        </ul>
    </div>

    <div class="flex-1">
        <a href="/" class="btn btn-ghost normal-case text-xl">Hangar 84</a>
    </div>

    <ul class="menu menu-horizontal gap-x-2 hidden lg:flex flex-none">
        <li class="disabled bg-base-300"><span>Home</span></li>
        <li><a>About Us</a></li>
        <li><a>Projects</a></li>
        <li><a>Events</a></li>
        <li>
            <span class="justify-between">
                Sponsors
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
            </span>
            <ul class="p-2 bg-base-300">
                <li><a>Potential Sponsors</a></li>
                <li><a>Current Sponsors</a></li>
                <li><a>Why Sponsor Us</a></li>
           </ul>
        </li>
        <li><a>Blog</a></li>
        <li><a>Shop</a></li>
        <li><a>Connect</a></li>
    </ul>
</div>

<div class="flex flex-col items-center py-16">
    <div class="shrink text-center flex flex-col space-y-4">
        <h1 class="text-6xl font-bold">Hangar 84</h1>
        <h3 class="text-2xl">Coming Soon</h3>
    </div>
    <div class="text-center align-middle py-8">
        <label class="swap swap-flip text-9xl">
            <input type="checkbox" />

            <span class="swap-off">👽</span>
            <span class="swap-on">😺</span>
        </label>
    </div>
</div>