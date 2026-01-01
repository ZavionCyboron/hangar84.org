<script lang="ts">
    import { fly } from "svelte/transition";
    import { sectionIn, cardIn } from "$lib/motion";
    import { SITE } from '$lib/site';

    type TeamEvent = {
        name: string;
        type: string;
        start: string;   // "YYYY-MM-DD"
        end: string;     // "YYYY-MM-DD"
        venue: string;
        address1: string;
        city: string;
        state: string;
        zip: string;
        country: string;
    };

    const events: TeamEvent[] = [
        {
            name: "FIT District Belton Event",
            type: "District Event",
            start: "2026-03-05",
            end: "2026-03-07",
            venue: "Cadence Bank Center",
            address1: "301 West Loop 121",
            city: "Belton",
            state: "TX",
            zip: "76513",
            country: "USA"
        },
        {
            name: "FIT District Amarillo Event",
            type: "District Event",
            start: "2026-04-02",
            end: "2026-04-04",
            venue: "Amarillo Civic Center",
            address1: "401 S Buchanan Street",
            city: "Amarillo",
            state: "TX",
            zip: "79101",
            country: "USA"
        }
    ];

    const fmt = (iso: string): string => {
        const [y, m, d] = iso.split("-").map(Number);
        const date = new Date(y, m - 1, d);
        return date.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
    };

    const mapsLink = (e: TeamEvent): string => {
        const q = `${e.venue}, ${e.address1}, ${e.city}, ${e.state} ${e.zip}`;
        return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
    };
</script>

<svelte:head>
    <title>Blog | Hangar 84</title>
    <meta content="Blog | Hangar 84" property="og:title"/>
    <meta content="Enter: The Hangar 84 blog, uncovering the mysteries of robotics." property="og:description"/>
    <meta property="og:url" content={SITE.url + '/events'} />
    <meta content="#32cd32" data-react-helmet="true" name="theme-color"/>
</svelte:head>

<main class="background-color">
    <div class="mx-auto max-w-7xl px-6 py-16 text-center">
        <section class="max-w-3xl mx-auto" in:fly={sectionIn(120)}>
            <h1 class="block text-6xl leading-tight heading-gradient">Events</h1>

            <h2 class="mt-4 text-2xl font-semibold heading-gradient">Team Meetings</h2>
            <p class="mt-2 text-gray-300">
                Hangar 84 meets regularly during the school year for build,
                programming, and testing sessions.
            </p>

            <ul class="mt-3 text-gray-300 space-y-1">
                <li><span class="text-gray-400">When:</span> Weekdays after school</li>
                <li><span class="text-gray-400">Where:</span> University High School Rm 106</li>
                <li><span class="text-gray-400">Schedule:</span> Varies by season</li>
            </ul>

            <p class="mt-6 text-gray-300">
                If you're a Roswell Independent School District student and you're interested in attending a meeting or joining the team,
                contact us for the current schedule.
            </p>


            <p class="mt-12 text-gray-400 text-center">
                Additional events, outreach, and demos will be added throughout the season.
            </p>
        </section>

        <section class="max-w-3xl mx-auto"  in:fly={sectionIn(180)}>
            <div class="mt-10 h-px w-24 mx-auto bg-gray-700"></div>
            <h2 class="mt-8 text-3xl font-bold heading-gradient">
                2026 FRC Season Events
            </h2>

            <p class="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                Our upcoming competition schedule and team events.
            </p>

            <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {#each events as e, i}
                    <article class="rounded-xl bg-gray-900 p-6 shadow-lg"
                             in:fly={cardIn(i)}
                    >
                        <div class="flex items-start justify-between gap-4">
                            <h3 class="text-xl font-semibold heading-gradient">{e.name}</h3>

                            <span class="text-xs font-semibold px-3 py-1 rounded-full bg-gray-700 text-gray-200">
                  {e.type}
                </span>
                        </div>

                        <div class="mt-4 space-y-2 text-gray-300">
                            <p>
                                <span class="text-gray-400">Dates:</span>
                                {fmt(e.start)} – {fmt(e.end)}
                            </p>

                            <p>
                                <span class="text-gray-400">Venue:</span>
                                {e.venue}
                            </p>

                            <p>
                                <span class="text-gray-400">Address:</span>
                                {e.address1}, {e.city}, {e.state} {e.zip} {e.country}
                            </p>
                        </div>

                        <div class="mt-6 flex flex-wrap gap-3">
                            <a
                                    class="inline-block px-5 py-2 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition"
                                    href={mapsLink(e)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                            >
                                Directions →
                            </a>

                            <a
                                    class="inline-block px-5 py-2 rounded-xl bg-gray-800 text-white font-semibold hover:bg-gray-700 transition"
                                    href="https://frc-events.firstinspires.org/team/7271"
                                    target="_blank"
                                    rel="noopener noreferrer"
                            >
                                View on FIRST →
                            </a>
                        </div>
                    </article>
                {/each}
            </div>
        </section>

        <section class="max-w-3xl mx-auto" in:fly={sectionIn(160)}>
            <div class="mt-16 rounded-xl bg-gray-900 p-8 shadow-lg text-left">
                <h3 class="text-xl font-semibold text-white">Want to see everything?</h3>
                <p class="mt-2 text-gray-300">
                    Official event listings, updates, and schedules are always posted on FIRST’s site for Team 7271.
                </p>
                <a
                        class="inline-block mt-4 text-blue-400 hover:underline"
                        href="https://frc-events.firstinspires.org/team/7271"
                        target="_blank"
                        rel="noopener noreferrer"
                >
                    View Team events on FIRST →
                </a>
            </div>
        </section>
    </div>
</main>