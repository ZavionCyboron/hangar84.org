<script lang="ts">
    import { fly } from "svelte/transition";
    import { sectionIn } from "$lib/motion";
    import { SITE } from '$lib/site';

    const projects = [
        {
            title: "2025-Robot",
            status: "Completed",
            description:
              "A 2025 robot codebase and framework designed around a MAXSwerve drivetrain, used to develop, test, and validate drivetrain control, configuration, and iteration workflows.",
            tags: ["MAXSwerve", "Drivetrain", "Electrical", "Testing"],
            links: { github: "https://github.com/Hangar-84/2025-Robot"}
        },
        {
            title: "RobotMerge Framework",
            status: "Current",
            description:
              "A hardware-agnostic robotics framework supporting MAXSwerve and mecanum with real + simulation parity.",
            tags: ["Kotlin", "WPILib", "Simulation"],
            links: { github: "https://github.com/Hangar-84/RobotMerge-Kt" }
        },
        {
            title: "Website Revamp",
            status: "Current",
            description:
              "Refreshing the team site with modern pages, consistent styling, and improved navigation.",
            tags: ["SvelteKit", "Tailwind"],
            links: { github: "https://github.com/Hangar-84/hangar84.org" }
        },
        {
            title: "CTRE Hardware Migration",
            status: "Upcoming",
            description:
              "Transitioning drivetrain and subsystem hardware from Rev to CTRE motor controllers and CAN-based sensors, including Talon FXS controllers and CANcoder encoders, to improve reliability, diagnostics, and closed-loop control.",
            tags: ["Hardware", "CTRE", "CAN Bus", "Controls"],
            links: {}
        }
    ];

    let active = "Current";

    // ✅ reactive derived list (updates whenever `active` changes)
    $: filteredProjects = projects.filter((p) => p.status === active);

</script>

<svelte:head>
    <title>Blog | Hangar 84</title>
    <meta content="Blog | Hangar 84" property="og:title"/>
    <meta content="Enter: The Hangar 84 blog, uncovering the mysteries of robotics." property="og:description"/>
    <meta property="og:url" content={SITE.url + '/projects'} />
    <meta content="#32cd32" data-react-helmet="true" name="theme-color"/>
</svelte:head>

<main class="background-color">

    <div class="mx-auto max-w-6xl px-6 py-16 text-center">
        <section class="max-w-xl mx-auto" in:fly={sectionIn(120)}>
            <h1 class="block text-6xl leading-tight heading-gradient">
                Projects
            </h1>
            <p class="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                What we’re building right now — and what we’re planning next.
            </p>
        </section>

        <!-- Tabs -->
        <section class="max--w-xl mx-auto" in:fly={sectionIn(180)}>
            <div class="mt-10 flex justify-center gap-3">
                {#each ["Current", "Upcoming", "Completed"] as tab}
                    <button
                            type="button"
                            class="px-5 py-2 rounded-xl font-semibold transition
            {active === tab ? 'bg-green-500 text-black' : 'bg-gray-800 text-white hover:bg-gray-700'}"
                            on:click={() => (active = tab)}
                    >
                        {tab}
                    </button>
                {/each}
            </div>
        </section>

        {#if filteredProjects.length === 0}
            <p class="mt-12 text-gray-400">No {active.toLowerCase()} projects yet — check back soon.</p>
        {:else}
            <!-- Grid -->
            <section class="mt-12 max-w-4xl mx-auto" in:fly={sectionIn(220)}>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    {#each filteredProjects as p}
                        <div class="rounded-xl bg-gray-900 p-6 shadow-lg">
                            <div class="flex items-start justify-between gap-4">
                                <h2 class="text-xl font-semibold heading-gradient">{p.title}</h2>
                                <span
                                        class="text-xs font-semibold px-3 py-1 rounded-full
                    {p.status === 'Current'
                    ? 'bg-green-500 text-black'
                    : p.status === 'Upcoming'
                      ? 'bg-gray-700 text-gray-200'
                      : 'bg-blue-500 text-black'}"
                                >
                  {p.status}
                </span>
                            </div>

                            <p class="mt-3 text-gray-300">
                                {p.description}
                            </p>

                            <div class="mt-4 flex flex-wrap gap-2">
                                {#each p.tags as t}
                                    <span class="text-sm bg-gray-800 px-3 py-1 rounded-full">{t}</span>
                                {/each}
                            </div>

                            <div class="mt-5 flex gap-4">
                                {#if p.links?.github}
                                    <a
                                            class="text-blue-400 hover:underline"
                                            href={p.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                    >
                                        GitHub →
                                    </a>
                                {/if}
                            </div>
                        </div>
                    {/each}
                </div>
            </section>
        {/if}



        <!-- CTA -->
        <section class="max-w-4xl mx-auto" in:fly={sectionIn(300)}>
            <div class="mt-20 max-w-4xl rounded-xl bg-gray-900 p-10 shadow-lg">
                <h2 class="text-3xl font-bold">Want to collaborate?</h2>
                <p class="mt-4 text-gray-300">
                    If you’re a student, mentor, or sponsor interested in our work, reach out.
                </p>
                <div class="mt-8">
                    <a
                            href="/connect"
                            class="inline-block px-8 py-4 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition"
                    >
                        Connect →
                    </a>
                </div>
            </div>
        </section>
    </div>
</main>