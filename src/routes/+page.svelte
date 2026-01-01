<svelte:head>
    <title>Home | Hangar 84</title>
    <meta content="Home | Hangar 84" property="og:title"/>
    <meta content="Official website for Hangar 84, FRC Team 7271" property="og:description"/>
    <meta content="https://hangar84.org/" property="og:url"/>
    <meta content="#32cd32" data-react-helmet="true" name="theme-color"/>
</svelte:head>

<script lang="ts">
    import { fly } from "svelte/transition";
    import { sectionIn } from "$lib/motion";
</script>

<main class="background-color">
        <div class="mx-auto max-w-6xl px-6 py-16 text-center">
            <!-- HERO -->
            <section class="text-center flex flex-col items-center" in:fly={sectionIn(120)}>
                <h1 class="text-6xl leading-[1.4] heading-gradient">
                    Hangar 84 Robotics
                </h1>

                <p class="mt-6 text-4xl text-gray-400 font-semibold tracking-wide">
                    FRC Team 7271
                </p>

                <p class="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                    A student-led FIRST Robotics Competition (FRC) team building competitive robots
                    and real-world engineering skills through design, software, and iteration.
                </p>

                <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/about"
                      class="inline-block px-8 py-4 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition"
                    >
                        Learn More →
                    </a>

                    <a
                      href="https://github.com/Hangar84"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-block px-8 py-4 rounded-xl bg-gray-800 text-white font-semibold hover:bg-gray-700 transition"
                    >
                        View Our Code
                    </a>
                </div>
            </section>
        <!-- HIGHLIGHTS -->
        <section class="flex flex-col items-center" in:fly={sectionIn(180)}>
            <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                <div class="rounded-xl bg-gray-900 p-6 shadow-lg">
                    <p class="text-2xl">🤖</p>
                    <h2 class="mt-3 font-semibold">Competitive FRC Team</h2>
                    <p class="mt-2 text-sm text-gray-400">
                        We design and build robots for FIRST Robotics Competition events.
                    </p>
                </div>

                <div class="rounded-xl bg-gray-900 p-6 shadow-lg">
                    <p class="text-2xl">💻</p>
                    <h2 class="mt-3 font-semibold">Modular Software</h2>
                    <p class="mt-2 text-sm text-gray-400">
                        Clean, maintainable robot code with strong iteration workflows.
                    </p>
                </div>

                <div class="rounded-xl bg-gray-900 p-6 shadow-lg">
                    <p class="text-2xl">🧪</p>
                    <h2 class="mt-3 font-semibold">Testing & Simulation</h2>
                    <p class="mt-2 text-sm text-gray-400">
                        We validate changes quickly with sim-friendly architecture and testing.
                    </p>
                </div>

                <div class="rounded-xl bg-gray-900 p-6 shadow-lg">
                    <p class="text-2xl">🧑‍🤝‍🧑</p>
                    <h2 class="mt-3 font-semibold">Student-Led</h2>
                    <p class="mt-2 text-sm text-gray-400">
                        Students learn engineering, teamwork, and leadership through hands-on work.
                    </p>
                </div>
            </div>
        </section>

        <!-- MEDIA -->
        <section class="text-center flex flex-col items-center" in:fly={sectionIn(220)}>
            <h2 class="mt-20 text-3xl font-bold heading-gradient">See the Robot</h2>
            <p class="mt-4 text-gray-300 max-w-3xl mx-auto">
                Build progress, drive testing, and real-world iteration.
            </p>

            <div class="mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
                <!-- Image (put your robot photo in /static/images/robot.jpg) -->
                <div class="aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
                    <img
                      src="/images/Swerve%20Robot.jpg"
                      alt="Hangar 84 robot"
                      class="w-full h-full object-cover"
                    />
                </div>

                <!-- Video (put your video in /static/videos/robot.mp4) -->
                <div class="aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
                    <video class="w-full h-full object-cover" controls preload="metadata">
                        <source src="/videos/SwerveRobotVid.mp4" type="video/mp4" />
                        <track kind="captions"
                               src="/videos/SwerveRobotVid.vtt"
                               srclang="en"
                               label="English"
                               default/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>

        <!-- FEATURED PROJECT -->
        <section class="text-center flex flex-col items-center" in:fly={sectionIn(280)}>
            <h2 class="mt-20 text-3xl font-bold heading-gradient">Featured Project</h2>

            <div class="mt-8 max-w-4xl mx-auto rounded-xl bg-gray-900 p-8 shadow-lg text-left">
                <h3 class="text-2xl font-semibold heading-gradient">Hardware-Agnostic RobotMerge Framework</h3>
                <p class="mt-3 text-gray-300">
                    A modular RobotMerge for Swerve and Mecanum designed to run seamlessly
                    across real hardware and simulation, enabling faster iteration,
                    testing, and cleaner drivetrain code.
                </p>

                <div class="mt-5 flex flex-wrap gap-3">
                    <span class="text-sm bg-gray-800 px-3 py-1 rounded-full">Kotlin</span>
                    <span class="text-sm bg-gray-800 px-3 py-1 rounded-full">WPILib</span>
                    <span class="text-sm bg-gray-800 px-3 py-1 rounded-full">Simulation</span>
                    <span class="text-sm bg-gray-800 px-3 py-1 rounded-full">Telemetry</span>
                </div>

                <div class="mt-6 flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://github.com/Hangar-84"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-block px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition font-semibold"
                    >
                        View on GitHub →
                    </a>
                    <a
                      href="/projects"
                      class="inline-block px-6 py-3 rounded-xl bg-green-500 text-black hover:bg-green-400 transition font-semibold"
                    >
                        Explore Projects
                    </a>
                </div>
            </div>
        </section>

        <!-- CTA -->
            <section class="text-center flex flex-col items-center" in:fly={sectionIn(320)}>
                <div class="mt-20 max-w-4xl mx-auto rounded-xl bg-gray-900 p-10 shadow-lg">
                    <h2 class="text-3xl font-bold heading-gradient">Want to get involved?</h2>
                    <p class="mt-4 text-gray-300">
                        Whether you’re a student, mentor, or sponsor, we’d love to connect.
                    </p>

                    <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                          href="/connect"
                          class="inline-block px-8 py-4 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition"
                        >
                            Connect →
                        </a>
                        <a
                          href="/about"
                          class="inline-block px-8 py-4 rounded-xl bg-gray-800 text-white font-semibold hover:bg-gray-700 transition"
                        >
                            About the Team
                        </a>
                    </div>
                </div>
            </section>
    </div>
</main>