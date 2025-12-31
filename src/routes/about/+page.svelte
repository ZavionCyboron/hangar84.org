<svelte:head>
    <title>About | Hangar 84</title>
    <meta content="About | Hangar 84" property="og:title"/>
    <meta content="Information about Hangar 84 and our goals." property="og:description"/>
    <meta content="https://hangar84.org/about" property="og:url"/>
    <meta content="#32cd32" data-react-helmet="true" name="theme-color"/>
</svelte:head>

<script lang="ts">
    import { fly } from "svelte/transition";
    import { sectionIn } from "$lib/motion";
</script>
<main class="background-color">
    <div class="flex flex-col items-center text-center mb-16">
        <div class="shrink text-center flex flex-col space-y-4">
            <section class="mt-20 max-w-4xl mx-auto" in:fly={sectionIn(120)}>
                <h1 class="pb-3 text-6xl font-bold heading-gradient">
                    About Us
                </h1>

                <p class="max-w-4xl text-lg text-gray-300 mt-4">
                    We are a student-led FIRST Robotics Competition (FRC) team based at
                    Early College High School in Roswell, New Mexico.
                </p>

                <p class="max-w-4xl text-lg text-gray-300 mt-4">
                    Founded in 2018, Hangar 84 has competed in every FRC season except
                    2021 and 2022. Our team focuses on designing reliable robots,
                    writing clean and modular software, and continuously improving
                    through testing and iteration.
                </p>

                <p class="max-w-4xl text-lg text-gray-300 mt-4">
                    We are always open to feedback, collaboration, and new members.
                    If you’re interested in our work or want to get involved, feel free
                    to reach out.
                </p>
            </section>

            <section class="mt-20 text-center flex flex-col items-center" in:fly={sectionIn(180)}>

                <h2 class="mt-20 text-3xl font-bold heading-gradient">
                    Our Mission
                </h2>

                <p class="mt-4 max-w-4xl text-lg text-gray-300">
                    Our mission is to give students hands-on experience in engineering,
                    software development, and teamwork by building competitive robots
                    and learning through real-world problem solving.
                </p>
            </section>

            <section class="mt-20 text-center flex flex-col items-center" in:fly={sectionIn(240)}>
                <!--put anything extra here such as images, videos, or links-->
                <div class="mt-10 py-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
                    <!-- Image -->
                    <div class="aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
                        <img
                          src="/images/Swerve%20Robot.jpg"
                          alt="Hangar 84 drivetrain"
                          class="w-full h-full object-cover"
                        />
                    </div>
                <div class="aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
                    <video
                      class="w-full h-full object-cover"
                      controls
                      preload="metadata"
                    >
                        <source src="/videos/SwerveRobotVid.mp4" type="video/mp4"/>
                        <track kind="captions"
                        src="/videos/SwerveRobotVid.vtt"
                        srclang="en"
                        label="English"
                        default/>
                    </video>
                </div>
                </div>
            </section>

            <section class="mt-20 text-center flex flex-col items-center" in:fly={sectionIn(300)}>
                <h2 class="mt-10 mb-4 text-3xl font-bold heading-gradient">
                    Featured Project
                </h2>

                <div class="mt-6  max-w-4xl mx-auto rounded-xl bg-gray-800 p-6 shadow-lg text-left">

                    <h3 class="text-xl font-semibold heading-gradient">
                        Hardware-Agnostic RobotMerge Framework
                    </h3>

                    <p class="mt-2 text-gray-300">
                        A modular RobotMerge for Swerve and Mecanum designed to run seamlessly
                        across real hardware and simulation, enabling faster iteration,
                        testing, and cleaner drivetrain code.
                    </p>

                    <div class="mt-4 flex flex-wrap gap-4">
                        <span class="text-sm bg-gray-700 px-3 py-1 rounded-full">Kotlin</span>
                        <span class="text-sm bg-gray-700 px-3 py-1 rounded-full">WPILib</span>
                        <span class="text-sm bg-gray-700 px-3 py-1 rounded-full">Simulation</span>
                    </div>

                    <a
                      href="https://github.com/Hangar-84/RobotMerge-Kt"
                      target="_blank"
                      class="inline-block mt-4 text-blue-400 hover:underline"
                    >
                        View on GitHub →
                    </a>
                </div>
            </section>

            <section class="mt-20 text-center flex flex-col items-center" in:fly={sectionIn(360)}>
                <h2 class="mt-20 text-3xl font-bold heading-gradient">
                    Connect With Us
                </h2>
                <div class="mt-6 mb-10 flex flex-col sm:flex-row gap-6 justify-center">

                    <!-- GitHub -->
                    <a
                      href="https://github.com/Hangar-84"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center gap-3 px-6 py-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition shadow-lg"
                    >
                        <span class="text-2xl">💻</span>
                        <div class="text-left">
                            <p class="font-semibold text-white">GitHub</p>
                            <p class="text-sm text-gray-400">Robot code & software projects</p>
                        </div>
                    </a>

                    <!-- Email -->
                    <a
                      href="mailto:hangar84robotics@gmail.com"
                      class="flex items-center gap-3 px-6 py-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition shadow-lg"
                    >
                        <span class="text-2xl">📧</span>
                        <div class="text-left">
                            <p class="font-semibold text-white">Email</p>
                            <p class="text-sm text-gray-400">Contact or join the team</p>
                        </div>
                    </a>
                </div>
            </section>
        </div>
    </div>
</main>