<script lang="ts">
    import { fly } from "svelte/transition";
    import { sectionIn } from "$lib/motion";
    import { SITE } from '$lib/site';
</script>

<svelte:head>
    <title>Blog | Hangar 84</title>
    <meta content="Blog | Hangar 84" property="og:title"/>
    <meta content="Enter: The Hangar 84 blog, uncovering the mysteries of robotics." property="og:description"/>
    <meta property="og:url" content={SITE.url + '/current-sponsors'} />
    <meta content="#32cd32" data-react-helmet="true" name="theme-color"/>
</svelte:head>

<main class="background-color">
    <div class="flex flex-col items-center mb-16">
        <div class="shrink text-center flex flex-col space-y-12">
            <section class="max-w-4xl mx-auto" in:fly={sectionIn(120)}>
                <h1 class="pb-3 text-6xl font-bold heading-gradient">
                    Current Sponsors
                </h1>
                <p class="mt-6 max-w-3xl text-lg text-gray-300">
                    We are currently finalizing our sponsor listings for this season.
                    In the meantime, you can learn more about how sponsorships support
                    our team and students.
                </p>
            </section>

            <section class="mt-16 max-w-4xl mx-auto rounded-xl bg-gray-900 p-8 shadow-lg text-left" in:fly={sectionIn(180)}>
                <h2 class="text-2xl font-semibold heading-gradient">How We Recognize Sponsors</h2>

                <ul class="mt-4 space-y-2 text-gray-300 list-disc list-inside">
                    <li>Logo placement on team shirts and pit displays (when applicable)</li>
                    <li>Recognition on our website and social media</li>
                    <li>Shoutouts at competitions and community events</li>
                    <li>Direct impact on student STEM opportunities</li>
                </ul>
            </section>


            <section class="max-w-3xl mx-auto" in:fly={sectionIn(220)}>
                <div class="max-w-4xl mx-auto rounded-xl bg-gray-900 p-10 shadow-lg">

                    <h2 class="text-2xl font-bold heading-gradient">
                        Why Sponsor Hangar 84?
                    </h2>

                    <p class="mt-4 text-gray-300">
                        Sponsorships directly support competition travel, robot development,
                        and hands-on STEM education for students.
                    </p>

                    <a
                            href="/why-sponsor-us"
                            class="inline-block mt-6 mb-10 px-8 py-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition font-semibold"
                    >
                        Learn More →
                    </a>

                    <h2 class="text-2xl font-bold heading-gradient">Interested in Sponsoring?</h2>

                    <p class="mt-4 text-gray-300">
                        Sponsorships help fund competition travel, robot parts, and student learning.
                        If you’re interested in supporting Hangar 84, we’d love to hear from you.
                    </p>

                    <div class="mt-8">
                        <a
                                href="/potential-sponsors"
                                class="inline-block px-8 py-4 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition"
                        >
                            Become a Sponsor →
                        </a>
                    </div>
                </div>
            </section>
        </div>
    </div>
</main>