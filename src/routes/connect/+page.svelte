<svelte:head>
    <title>Connect | Hangar 84</title>
    <meta content="Connect | Hangar 84" property="og:title"/>
    <meta content="Keep in contact with Hangar 84 via social media and other methods!" property="og:description"/>
    <meta content="https://hangar84.org/connect" property="og:url"/>
    <meta content="#32cd32" data-react-helmet="true" name="theme-color"/>
</svelte:head>

<script lang="ts">
    import { fly } from "svelte/transition";
    import { sectionIn } from "$lib/motion";
</script>

<main class="background-color text-white">
    <div class="mx-auto max-w-6xl px-6 py-16 text-center">
        <!-- Hero -->
        <section class="max-w-4xl mx-auto" in:fly={sectionIn(120)}>
            <h1 class="block text-6xl leading-tight heading-gradient">Connect</h1>
            <p class="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
                Want to reach Hangar 84 (FRC Team 7271)? Use the team email for most inquiries, or contact our mentor/technical
                email for website + technical questions.
            </p>
        </section>

        <!-- Contact cards -->
        <section class="mt-16" in:fly={sectionIn(180)}>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <!-- Team email -->
                <article class="rounded-xl bg-gray-900 p-8 shadow-lg">
                    <h2 class="text-2xl font-semibold heading-gradient">Team Contact</h2>
                    <p class="mt-3 text-gray-300">
                        Use this for sponsorships, outreach, joining the team, event questions, and general communication.
                    </p>

                    <div class="mt-5 rounded-xl bg-gray-800 p-4">
                        <p class="text-sm text-gray-400">Email</p>
                        <a
                          class="text-blue-400 hover:underline break-all"
                          href="mailto:hangar84robotics@gmail.com"
                        >
                            hangar84robotics@gmail.com
                        </a>
                    </div>

                    <div class="mt-6 flex flex-wrap gap-3">
                        <a
                          class="inline-block px-6 py-3 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition"
                          href="mailto:hangar84robotics@gmail.com?subject=Hangar%2084%20Inquiry"
                        >
                            Email the Team →
                        </a>
                        <a
                          class="inline-block px-6 py-3 rounded-xl bg-gray-800 text-white font-semibold hover:bg-gray-700 transition"
                          href="/why-sponsor-us"
                        >
                            Sponsorship Info →
                        </a>
                    </div>
                </article>

                <!-- Mentor / technical email -->
                <article class="rounded-xl bg-gray-900 p-8 shadow-lg">
                    <h2 class="text-2xl font-semibold heading-gradient">Mentor / Technical Contact</h2>
                    <p class="mt-3 text-gray-300">
                        Use this for website issues, technical questions, and suggestions. This is also a secondary contact if you
                        don’t hear back right away.
                    </p>

                    <div class="mt-5 rounded-xl bg-gray-800 p-4">
                        <p class="text-sm text-gray-400">Email</p>
                        <a
                          class="text-blue-400 hover:underline break-all"
                          href="mailto:z.cyboron07@gmail.com"
                        >
                            z.cyboron07@gmail.com
                        </a>
                    </div>

                    <div class="mt-6 flex flex-wrap gap-3">
                        <a
                          class="inline-block px-6 py-3 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition"
                          href="mailto:z.cyboron07@gmail.com?subject=Hangar%2084%20Website%20%2F%20Technical%20Question"
                        >
                            Email Mentor/Tech →
                        </a>
                        <a
                          class="inline-block px-6 py-3 rounded-xl bg-gray-800 text-white font-semibold hover:bg-gray-700 transition"
                          href="mailto:z.cyboron07@gmail.com?subject=Hangar%2084%20Website%20Suggestion"
                        >
                            Suggest an Improvement →
                        </a>
                    </div>
                </article>
            </div>
        </section>

        <!-- What to contact us about -->
        <section class="mt-16" in:fly={sectionIn(220)}>
            <div class="max-w-5xl mx-auto rounded-xl bg-gray-900 p-8 shadow-lg text-left">
                <h2 class="text-2xl font-semibold heading-gradient">What can you contact us about?</h2>

                <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
                    <div class="rounded-xl bg-gray-800 p-6">
                        <h3 class="text-lg font-semibold text-white">Team + Community</h3>
                        <ul class="mt-3 space-y-2 list-disc list-inside">
                            <li>Joining the team (students in Roswell Independent School District)</li>
                            <li>Mentoring</li>
                            <li>Outreach / demos</li>
                            <li>Event questions</li>
                        </ul>
                    </div>

                    <div class="rounded-xl bg-gray-800 p-6">
                        <h3 class="text-lg font-semibold text-white">Sponsorship + Support</h3>
                        <ul class="mt-3 space-y-2 list-disc list-inside">
                            <li>Sponsorship inquiries</li>
                            <li>Donations / in-kind support</li>
                            <li>Partnership opportunities</li>
                            <li>Merch questions (when available)</li>
                        </ul>
                    </div>
                </div>

                <p class="mt-6 text-gray-400">
                    We’ll route your message to the right person on the team.
                </p>
            </div>
        </section>

        <section class="mt-16" in:fly={sectionIn(280)}>
            <div class="max-w-5xl mx-auto rounded-xl bg-gray-900 p-8 shadow-lg text-left">
                <h2 class="text-2xl font-semibold heading-gradient">Social Media</h2>
                <p class="mt-3 text-gray-300">
                    Our official social links will be posted here once finalized.
                </p>
                <p class="mt-2 text-sm text-gray-400">
                    For now, the fastest way to reach us is email.
                </p>
            </div>
        </section>

        <!-- Footer CTA -->
        <section class="mt-16 text-center" in:fly={sectionIn(320)}>
            <div class="max-w-5xl mx-auto rounded-xl bg-gray-900 p-10 shadow-lg">
                <h2 class="text-3xl font-bold heading-gradient">Thanks for reaching out</h2>
                <p class="mt-4 text-gray-300">
                    Whether you’re a student, mentor, sponsor, or supporter — we appreciate you.
                </p>

                <div class="mt-8 flex flex-wrap justify-center gap-4">
                    <a
                      href="mailto:hangar84robotics@gmail.com?subject=Hangar%2084%20Inquiry"
                      class="inline-block px-8 py-4 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition"
                    >
                        Contact the Team →
                    </a>

                    <a
                      href="/projects"
                      class="inline-block px-8 py-4 rounded-xl bg-gray-800 text-white font-semibold hover:bg-gray-700 transition"
                    >
                        View Projects →
                    </a>
                </div>
            </div>
        </section>
    </div>
</main>