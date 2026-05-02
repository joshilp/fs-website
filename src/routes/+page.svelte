<script lang="ts">
	import gallery1 from '$lib/assets/images/gallery-1.jpg?enhanced';
	import gallery2 from '$lib/assets/images/gallery-2.jpg?enhanced';
	import gallery3 from '$lib/assets/images/gallery-3.jpg?enhanced';
	import { Button } from '$lib/components/ui/button/index.js';

	const teaserPhotos = [gallery1, gallery2, gallery3];
</script>

<svelte:head>
	<title>Spanish Fiesta &amp; Falcon Resorts — Osoyoos, BC</title>
	<meta
		name="description"
		content="Two lakeside resorts on the shores of Osoyoos Lake in British Columbia. Private sandy beach, pools, hot tub, and air-conditioned rooms in Canada's warmest valley."
	/>
</svelte:head>

<!-- Hero -->
<section class="relative h-[92vh] min-h-[520px] overflow-hidden">
	<enhanced:img
		src="$lib/assets/images/hero.jpg"
		alt="Osoyoos Lake"
		class="absolute inset-0 h-full w-full object-cover"
	/>
	<div
		class="absolute inset-0 bg-linear-to-t from-resort-dark/85 via-resort-dark/35 to-resort-dark/10"
	></div>
	<div class="relative flex h-full flex-col items-center justify-center px-6 text-center text-white">
		<p
			class="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-resort-sand"
		>
			Osoyoos, British Columbia
		</p>
		<h1 class="font-serif text-5xl font-bold leading-tight md:text-7xl">
			Where the desert<br />meets the lake.
		</h1>
		<p class="mt-5 max-w-lg font-sans text-lg text-white/80">
			Two adjacent properties. One private sandy beach. Right on Main Street in Canada's sunniest
			corner.
		</p>
		<div class="mt-8 flex flex-wrap justify-center gap-4">
			<Button
				href="/contact"
				size="lg"
				class="bg-resort-terra px-8 text-white hover:bg-resort-terra/85"
			>
				Book Your Stay
			</Button>
			<Button
				href="/rooms"
				variant="outline"
				size="lg"
				class="border-white/50 bg-transparent px-8 text-white hover:border-white hover:bg-white/10 hover:text-white"
			>
				View Rooms
			</Button>
		</div>
	</div>

	<!-- Scroll indicator -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6 text-white/50"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M19 9l-7 7-7-7"
			/>
		</svg>
	</div>
</section>

<!-- Amenity highlights -->
<section class="bg-resort-teal py-12 text-white">
	<div class="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
		{#each [
			{
				label: 'Private Sandy Beach',
				sub: '500 ft into the lake',
				icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 9c0 0 3-3 6-3s6 3 9 3M3 15c0 0 3-3 6-3s6 3 9 3M3 21c0 0 3-3 6-3s6 3 9 3"/></svg>`
			},
			{
				label: '2 Pools & Hot Tub',
				sub: 'Heated outdoor pools',
				icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="9" stroke-width="1.5"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 7v5l3 3"/></svg>`
			},
			{
				label: 'Air Conditioned',
				sub: 'Every room',
				icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4"/></svg>`
			},
			{
				label: 'BBQ & Picnic Areas',
				sub: 'Both properties',
				icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8C8 10 5.9 16.17 3.82 19M9 3L9 8M15 3L15 8M12 3L12 8M21 19H3M12 19v3"/></svg>`
			}
		] as feature}
			<div class="flex flex-col items-center gap-3 text-center">
				{@html feature.icon}
				<div>
					<p class="font-sans font-semibold">{feature.label}</p>
					<p class="mt-0.5 font-sans text-sm text-white/70">{feature.sub}</p>
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- About -->
<section class="mx-auto max-w-6xl px-6 py-20">
	<div class="grid items-center gap-12 md:grid-cols-2">
		<div>
			<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-teal">
				About Us
			</p>
			<h2 class="font-serif text-4xl font-bold leading-tight text-resort-dark">
				Two properties,<br />side by side.
			</h2>
			<p class="mt-5 font-sans leading-relaxed text-resort-dark/70">
				The Spanish Fiesta and Falcon Resorts sit side by side on Main Street in Osoyoos, BC —
				operated as one from a shared office between them. Whether you book into one property or the
				other, you get the same friendly service, the same private beach access, and the same
				incredible Okanagan sunshine.
			</p>
			<p class="mt-4 font-sans leading-relaxed text-resort-dark/70">
				Osoyoos is Canada's only pocket desert, but with a warm, crystal-clear lake right at your
				doorstep. It's a rare combination, and we're right in the middle of it.
			</p>
			<a
				href="/rooms"
				class="mt-6 inline-block font-sans text-sm font-semibold text-resort-teal underline underline-offset-4 hover:text-resort-terra transition-colors"
			>
				Explore our rooms &rarr;
			</a>
		</div>
		<div class="relative overflow-hidden rounded-sm">
			<enhanced:img
				src="$lib/assets/images/hero.jpg"
				alt="Resort view"
				class="h-80 w-full object-cover md:h-96"
			/>
			<div
				class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-resort-dark/60 to-transparent p-5"
			>
				<p class="font-sans text-sm text-white/90">Osoyoos Lake &mdash; steps from your door</p>
			</div>
		</div>
	</div>
</section>

<!-- Gallery teaser -->
<section class="bg-resort-dark/5 py-16">
	<div class="mx-auto max-w-6xl px-6">
		<div class="mb-8 flex items-end justify-between">
			<div>
				<p
					class="mb-2 font-sans text-xs font-semibold uppercase tracking-widest text-resort-teal"
				>
					Gallery
				</p>
				<h2 class="font-serif text-3xl font-bold text-resort-dark">See for yourself.</h2>
			</div>
			<a
				href="/gallery"
				class="hidden font-sans text-sm font-semibold text-resort-teal underline underline-offset-4 hover:text-resort-terra transition-colors md:block"
			>
				View all photos &rarr;
			</a>
		</div>

		<div class="grid grid-cols-2 gap-3 md:grid-cols-3">
		{#each teaserPhotos as src, i}
			<a
				href="/gallery"
				aria-label="View photo gallery"
				class="group relative overflow-hidden rounded-sm {i === 0 ? 'col-span-2 md:col-span-1 row-span-2' : ''}"
			>
				<enhanced:img
					{src}
					alt="View of Osoyoos Lake and the resort grounds"
					class="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 {i === 0 ? 'md:h-full' : ''}"
				/>
				<div
					class="absolute inset-0 bg-resort-dark/0 transition-colors group-hover:bg-resort-dark/20"
				></div>
			</a>
		{/each}
		</div>

		<div class="mt-6 text-center md:hidden">
			<a
				href="/gallery"
				class="font-sans text-sm font-semibold text-resort-teal underline underline-offset-4"
			>
				View all photos &rarr;
			</a>
		</div>
	</div>
</section>

<!-- Location teaser -->
<section class="mx-auto max-w-6xl px-6 py-20">
	<div class="grid items-center gap-12 md:grid-cols-2">
		<div class="order-2 md:order-1 overflow-hidden rounded-sm">
			<iframe
				title="Osoyoos map"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.5!2d-119.4677!3d49.0317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548417b56e8d8a1b%3A0x123456789!2s7105+Main+St%2C+Osoyoos%2C+BC!5e0!3m2!1sen!2sca!4v1"
				class="h-72 w-full border-0 md:h-80"
				allowfullscreen
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
		<div class="order-1 md:order-2">
			<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-teal">
				Location
			</p>
			<h2 class="font-serif text-4xl font-bold leading-tight text-resort-dark">
				The heart of<br />Osoyoos.
			</h2>
			<p class="mt-5 font-sans leading-relaxed text-resort-dark/70">
				Right on Main Street, steps from the beach, the marina, restaurants, and the Nk'Mip Desert
				Cultural Centre. Osoyoos is the gateway to the South Okanagan wine region — with over 200
				days of sunshine a year.
			</p>
			<a
				href="/location"
				class="mt-6 inline-block font-sans text-sm font-semibold text-resort-teal underline underline-offset-4 hover:text-resort-terra transition-colors"
			>
				Explore the area &rarr;
			</a>
		</div>
	</div>
</section>

<!-- Book CTA banner -->
<section class="bg-resort-terra py-16 text-white">
	<div class="mx-auto max-w-3xl px-6 text-center">
		<h2 class="font-serif text-4xl font-bold">Ready to book?</h2>
		<p class="mt-4 font-sans text-lg text-white/80">
			Give us a call or use our online booking — we'll place you in whichever property suits you
			best.
		</p>
		<div class="mt-8 flex flex-wrap justify-center gap-4">
			<Button
				href="tel:2504957544"
				variant="outline"
				class="border-white/60 bg-transparent text-white hover:bg-white/10 hover:text-white"
			>
				Falcon: (250) 495-7544
			</Button>
			<Button
				href="tel:2504956833"
				variant="outline"
				class="border-white/60 bg-transparent text-white hover:bg-white/10 hover:text-white"
			>
				Spanish Fiesta: (250) 495-6833
			</Button>
		</div>
		<Button
			href="/contact"
			size="lg"
			class="mt-6 bg-white px-8 text-resort-terra hover:bg-white/90"
		>
			Book Now Online
		</Button>
	</div>
</section>
