<script lang="ts">
    import { fly } from "svelte/transition";
    import { sectionIn } from "$lib/motion";
    import { SITE } from '$lib/site';
</script>

<svelte:head>
    <title>Blog | Hangar 84</title>
    <meta content="Blog | Hangar 84" property="og:title"/>
    <meta content="Enter: The Hangar 84 blog, uncovering the mysteries of robotics." property="og:description"/>
    <meta property="og:url" content={SITE.url + '/shop'} />
    <meta content="#32cd32" data-react-helmet="true" name="theme-color"/>
</svelte:head>

<main class="background-color text-white">
    <div class="mx-auto max-w-6xl px-6 py-16 text-center">
        <!-- Hero -->
        <section class="max-w-4xl mx-auto" in:fly={sectionIn(120)}>
            <h1 class="block text-6xl leading-tight heading-gradient">Shop</h1>

            <p class="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
                Hangar 84 merch is coming soon. We’re finalizing our first public items and will announce them here.
            </p>

            <div class="mt-10 flex flex-wrap justify-center gap-4">
                <a
                        href="/connect"
                        class="inline-block px-8 py-4 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition"
                >
                    Get Updates →
                </a>

                <a
                        href="mailto:hangar84robotics@gmail.com?subject=Hangar%2084%20Merch%20Inquiry"
                        class="inline-block px-8 py-4 rounded-xl bg-gray-800 text-white font-semibold hover:bg-gray-700 transition"
                >
                    Ask About Merch →
                </a>
            </div>
        </section>

        <!-- Coming soon card -->
        <section class="mt-16 max-w-5xl mx-auto text-left" in:fly={sectionIn(180)}>
            <div class="rounded-xl bg-gray-900 p-8 shadow-lg">
                <div class="flex items-start justify-between gap-4">
                    <h2 class="text-2xl font-semibold heading-gradient">Merch</h2>
                    <span class="text-xs font-semibold px-3 py-1 rounded-full bg-gray-700 text-gray-200">
            Coming soon
          </span>
                </div>

                <p class="mt-4 text-gray-300">
                    We don’t have public merch available yet, but we’re working on it. When it’s ready, we’ll announce it here
                    and through our team updates.
                </p>

                <ul class="mt-6 space-y-2 text-gray-300 list-disc list-inside">
                    <li>Items may include stickers, 3D prints/laser engravings, and other small merch</li>
                    <li>All proceeds support robot parts, tools, and competition travel</li>

                </ul>

                <p class="mt-3 text-sm text-gray-400">
                    Updates will be posted on this page and shared through our contact channel.
                </p>
            </div>
        </section>

        <!-- Ways to support -->
        <section class="mt-16" in:fly={sectionIn(220)}>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div class="rounded-xl bg-gray-900 p-6 shadow-lg">
                    <h3 class="text-xl font-semibold heading-gradient">Support the Team</h3>
                    <p class="mt-2 text-gray-300">
                        Merch sales help fund parts, materials, tools, and event costs.
                    </p>
                </div>

                <div class="rounded-xl bg-gray-900 p-6 shadow-lg">
                    <h3 class="text-xl font-semibold heading-gradient">Sponsorship</h3>
                    <p class="mt-2 text-gray-300">
                        Want to make a bigger impact? Sponsorships directly support students and the season.
                    </p>
                </div>

                <div class="rounded-xl bg-gray-900 p-6 shadow-lg">
                    <h3 class="text-xl font-semibold heading-gradient">Stay In Touch</h3>
                    <p class="mt-2 text-gray-300">
                        We’ll post updates as soon as merch becomes available.
                    </p>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="mt-16 text-center" in:fly={sectionIn(280)}>
            <div class="max-w-5xl mx-auto rounded-xl bg-gray-900 p-10 shadow-lg">
                <h2 class="text-3xl font-bold heading-gradient">Want first access?</h2>
                <p class="mt-4 text-gray-300">
                    Reach out and we’ll let you know when the first merch drop is ready.
                </p>

                <div class="mt-8 flex flex-wrap justify-center gap-4">
                    <a
                            href="/connect"
                            class="inline-block px-8 py-4 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition"
                    >
                        Connect →
                    </a>

                    <a
                            href="/why-sponsor-us"
                            class="inline-block px-8 py-4 rounded-xl bg-gray-800 text-white font-semibold hover:bg-gray-700 transition"
                    >
                        Sponsorship →
                    </a>
                </div>
            </div>
        </section>
    </div>
</main>