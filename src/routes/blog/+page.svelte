<script lang="ts">
    import { fly } from "svelte/transition";
    import { sectionIn } from "$lib/motion";
    import { SITE } from '$lib/site';
</script>

<svelte:head>
    <title>Blog | Hangar 84</title>
    <meta content="Blog | Hangar 84" property="og:title"/>
    <meta content="Enter: The Hangar 84 blog, uncovering the mysteries of robotics." property="og:description"/>
    <meta property="og:url" content={SITE.url + '/blog'} />
    <meta content="#32cd32" data-react-helmet="true" name="theme-color"/>
</svelte:head>

<main class="background-color text-white">
    <div class="mx-auto max-w-6xl px-6 py-16 text-center">
        <!-- Hero -->
        <section class="max-w-4xl mx-auto" in:fly={sectionIn(120)}>
            <h1 class="block text-6xl leading-tight heading-gradient">Blog</h1>

            <p class="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
                Updates, season highlights, and media related to Hangar 84 (FRC Team 7271).
                More written posts and official team links will be added as the season progresses.
            </p>
        </section>

        <!-- Featured video -->
        <section class="mt-16 max-w-5xl mx-auto text-left" in:fly={sectionIn(180)}>
            <div class="rounded-xl bg-gray-900 p-8 shadow-lg">
                <div class="flex flex-col gap-2">
                    <h2 class="text-2xl font-semibold heading-gradient">Featured: 2024 Season Video
                        <span class="text-xs font-semibold px-3 py-1 rounded-full bg-gray-700 text-gray-200 w-fit">
                            Archive
                        </span>
                    </h2>
                    <p class="text-gray-300">
                        A highlight video featuring Hangar 84’s 2024 FRC season.
                    </p>
                    <p class="text-sm text-gray-400">
                        Archive content — our current robots, software, and workflows
                        have changed significantly since this season.
                    </p>
                    <p class="text-sm text-gray-400">
                        Note: This video is hosted on YouTube and may be from an external channel.
                    </p>
                </div>

                <div class="mt-6 aspect-video w-full overflow-hidden rounded-xl bg-black shadow">
                    <iframe
                            class="h-full w-full"
                            src="https://www.youtube.com/embed/Vo9HBRpWLyA?si=i9LCvoaHGCOwnAru"
                            title="Hangar 84 — 2024 FRC Season"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                    ></iframe>
                </div>

                <a
                        class="text-blue-400 hover:underline text-sm"
                        href="https://www.youtube.com/watch?v=Vo9HBRpWLyA"
                        target="_blank"
                        rel="noopener noreferrer"
                >
                    Watch on YouTube →
                </a>
            </div>
        </section>

        <!-- Coming soon -->
        <section class="mt-16" in:fly={sectionIn(220)}>
            <div class="max-w-5xl mx-auto rounded-xl bg-gray-900 p-8 shadow-lg text-left">
                <h2 class="text-2xl font-semibold heading-gradient">Coming Soon</h2>

                <p class="mt-3 text-gray-300">
                    We’re building out this page with more content throughout the season.
                    Here’s what you can expect:
                </p>

                <ul class="mt-5 space-y-2 text-gray-300 list-disc list-inside">
                    <li>Build season updates and milestones</li>
                    <li>Competition recaps (photos, notes, and results)</li>
                    <li>Student-written technical posts and outreach highlights</li>
                    <li>Links to official team media once finalized</li>
                </ul>
            </div>
        </section>

        <!-- CTA -->
        <section class="mt-16 text-center" in:fly={sectionIn(280)}>
            <div class="max-w-5xl mx-auto rounded-xl bg-gray-900 p-10 shadow-lg">
                <h2 class="text-3xl font-bold heading-gradient">Stay Updated</h2>
                <p class="mt-4 text-gray-300">
                    Want to collaborate, sponsor, or connect with the team? Reach out anytime.
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