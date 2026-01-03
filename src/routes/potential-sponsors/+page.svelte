<script lang="ts">
	import { fly } from "svelte/transition";
	import { sectionIn } from "$lib/motion";
	import { SITE } from '$lib/site';
</script>

<svelte:head>
	<title>Blog | Hangar 84</title>
	<meta content="Blog | Hangar 84" property="og:title"/>
	<meta content="Enter: The Hangar 84 blog, uncovering the mysteries of robotics." property="og:description"/>
	<meta property="og:url" content={SITE.url + '/potential-sponsors'} />
	<meta content="#32cd32" data-react-helmet="true" name="theme-color"/>
</svelte:head>

<main class="background-color text-white">
	<div class="mx-auto max-w-6xl px-6 py-16 text-center">
		<!-- Hero -->
		<section class="max-w-4xl mx-auto" in:fly={sectionIn(120)}>
			<h1 class="text-6xl font-bold heading-gradient">Potential Sponsors</h1>

			<p class="mt-6 text-lg text-gray-300">
				Interested in supporting Hangar 84 (FRC Team 7271)? Sponsorships help fund competition travel,
				robot parts, tools, and student STEM opportunities.
			</p>

			<div class="mt-10 flex flex-wrap justify-center gap-4">
				<a
						href="/why-sponsor-us"
						class="inline-block px-8 py-4 rounded-xl bg-gray-800 text-white font-semibold hover:bg-gray-700 transition"
				>
					Why Sponsor Us →
				</a>

				<a
						href="mailto:hangar84robotics@gmail.com?subject=Hangar%2084%20Sponsorship%20Inquiry"
						class="inline-block px-8 py-4 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition"
				>
					Email Us →
				</a>
			</div>
		</section>

		<!-- Form placeholder -->
		<section class="mt-16 max-w-5xl mx-auto rounded-xl bg-gray-900 p-8 shadow-lg text-left" in:fly={sectionIn(180)}>
			<h2 class="text-2xl font-semibold heading-gradient">Sponsorship Form</h2>

			<p class="mt-3 text-gray-300">
				Our sponsorship form will be posted here soon. For now, email us and we’ll send sponsorship
				details and next steps.
			</p>

			<!-- When you get the form link, replace this block with your button or embed -->
			<div class="mt-6 rounded-xl bg-gray-800 p-5 text-gray-300">
				<!-- uncomment this and put the actual form when it is finished
				<a
						href="YOUR_GOOGLE_FORM_LINK"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-block mt-6 px-8 py-4 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition"
				>
					Fill Out Sponsorship Form →
				</a>
				-->

				<p class="font-semibold text-white">Coming soon</p>
				<p class="mt-1 text-sm text-gray-400">
					We’re finalizing the form and sponsorship tiers. Check back shortly.
				</p>
			</div>
		</section>

		<!-- What sponsors receive -->
		<section class="mt-16" in:fly={sectionIn(220)}>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
				<div class="rounded-xl bg-gray-900 p-6 shadow-lg">
					<h3 class="text-xl font-semibold heading-gradient">Recognition</h3>
					<p class="mt-2 text-gray-300">
						Website and social recognition, plus visibility at competitions and community demos.
					</p>
				</div>

				<div class="rounded-xl bg-gray-900 p-6 shadow-lg">
					<h3 class="text-xl font-semibold heading-gradient">Community Impact</h3>
					<p class="mt-2 text-gray-300">
						Supports hands-on STEM learning and helps students build real engineering skills.
					</p>
				</div>

				<div class="rounded-xl bg-gray-900 p-6 shadow-lg">
					<h3 class="text-xl font-semibold heading-gradient">Team Updates</h3>
					<p class="mt-2 text-gray-300">
						We can share season progress and milestones so sponsors see the impact of their support.
					</p>
				</div>
			</div>
		</section>

		<!-- FAQ -->
		<section class="mt-16 max-w-5xl mx-auto rounded-xl bg-gray-900 p-8 shadow-lg text-left" in:fly={sectionIn(280)}>
			<h2 class="text-2xl font-semibold heading-gradient">Quick Questions</h2>

			<div class="mt-6 space-y-6 text-gray-300">
				<div>
					<p class="font-semibold text-white">Do you have sponsorship tiers?</p>
					<p class="mt-1 text-gray-300">
						Yes — we’re finalizing the details. Email us and we’ll send current options.
					</p>
				</div>

				<div>
					<p class="font-semibold text-white">How do I sponsor?</p>
					<p class="mt-1 text-gray-300">
						Use the form when it goes live, or email us now to get started.
					</p>
				</div>

				<div>
					<p class="font-semibold text-white">Can you provide a receipt or documentation?</p>
					<p class="mt-1 text-gray-300">
						Yes — we can provide documentation for sponsorship support when needed.
					</p>
				</div>
			</div>
		</section>

		<!-- CTA -->
		<section class="mt-16 text-center" in:fly={sectionIn(320)}>
			<div class="max-w-5xl mx-auto rounded-xl bg-gray-900 p-10 shadow-lg">
				<h2 class="text-3xl font-bold heading-gradient">Ready to sponsor?</h2>
				<p class="mt-4 text-gray-300">
					Email us and we’ll reply with sponsorship details and next steps.
				</p>

				<a
						class="inline-block mt-6 px-8 py-4 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition"
						href="mailto:hangar84robotics@gmail.com?subject=Hangar%2084%20Sponsorship%20Inquiry"
				>
					Contact Hangar 84 →
				</a>
			</div>
		</section>
	</div>
</main>