<script lang="ts">
	import gallery1 from '$lib/assets/images/gallery-1.jpg?enhanced';
	import gallery2 from '$lib/assets/images/gallery-2.jpg?enhanced';
	import gallery3 from '$lib/assets/images/gallery-3.jpg?enhanced';
	import gallery4 from '$lib/assets/images/gallery-4.jpg?enhanced';
	import gallery5 from '$lib/assets/images/gallery-5.jpg?enhanced';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Waves, Droplets, AirVent, Flame } from 'lucide-svelte';
	import { properties, site } from '$lib/config.js';

	const teaserPhotos = [gallery1, gallery2, gallery3, gallery4, gallery5];

	const amenities = [
		{ label: 'Private Sandy Beach', sub: 'Walk 500 ft — still touch the bottom', icon: Waves },
		{ label: '2 Pools & Hot Tub', sub: 'Heated outdoor pools', icon: Droplets },
		{ label: 'Air Conditioned', sub: 'Every room, always', icon: AirVent },
		{ label: 'BBQ & Picnic Areas', sub: 'Both properties', icon: Flame }
	];
</script>

<svelte:head>
	<title>Osoyoos Lakeside Motels | Falcon Resort &amp; Spanish Fiesta Resort, BC</title>
	<meta
		name="description"
		content="Two adjacent lakeside motels on Osoyoos Lake, BC. Private sandy beach, 2 outdoor pools, hot tub, air-conditioned rooms. Right on Main Street in Canada's warmest, sunniest valley."
	/>
	<meta
		property="og:title"
		content="Osoyoos Lakeside Motels | Falcon Resort & Spanish Fiesta Resort"
	/>
	<meta
		property="og:description"
		content="Two adjacent lakeside motels on Osoyoos Lake. Private sandy beach, pools, hot tub. Right on Main Street in Canada's warmest valley."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://falcon-spanish.com" />
</svelte:head>

<!-- Hero — full screen, nav overlaps via fixed positioning -->
<section class="relative min-h-screen overflow-hidden">
		<enhanced:img
			src="$lib/assets/images/hero.jpg"
			alt="Osoyoos Lake beachfront at Falcon Resort and Spanish Fiesta Resort, Osoyoos BC"
			class="absolute inset-0 h-full w-full object-cover"
		/>
	<!-- Layered overlay: dark at bottom for text legibility, lighter at top for nav transparency -->
	<div class="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/75"></div>

	<div
		class="relative flex min-h-screen flex-col items-center justify-center px-6 pb-16 pt-24 text-center text-white"
	>
		<p class="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-resort-sand">
			Osoyoos, British Columbia
		</p>
		<h1 class="font-serif text-6xl font-bold leading-[1.05] md:text-8xl">
			Where the desert<br />meets the lake.
		</h1>
		<p class="mt-6 max-w-lg font-sans text-lg leading-relaxed text-white/75">
			Two adjacent lakeside motels on Osoyoos Lake. One private sandy beach. Right on Main Street in
			Canada's warmest valley.
		</p>
		<div class="mt-10 flex flex-wrap justify-center gap-4">
			<Button
				href="/contact"
				class="h-12 bg-resort-brown px-10 text-base font-semibold text-white hover:bg-resort-brown/85"
			>
				Book Your Stay
			</Button>
			<Button
				href="/rooms"
				variant="outline"
				class="h-12 border-white/50 bg-transparent px-10 text-base font-semibold text-white hover:border-white hover:bg-white/10 hover:text-white"
			>
				View Rooms
			</Button>
		</div>

		<!-- Phone numbers -->
		<div class="mt-8 flex flex-wrap justify-center gap-6 font-sans text-sm text-white/60">
			<a href="tel:{properties.falcon.phone.tel}" class="transition-colors hover:text-white">
				Falcon: {properties.falcon.phone.display}
			</a>
			<span class="text-white/30">·</span>
			<a href="tel:{properties.spanish.phone.tel}" class="transition-colors hover:text-white">
				Spanish Fiesta: {properties.spanish.phone.display}
			</a>
		</div>
	</div>

	<!-- Scroll indicator -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5 text-white/40"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7" />
		</svg>
	</div>
</section>

<!-- Stats strip -->
<section class="bg-resort-dark text-white">
	<div
		class="mx-auto grid max-w-5xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4"
	>
		{#each [
			{ stat: '200+', label: 'Sunshine days / year' },
			{ stat: '#1', label: 'Warmest lake in Canada' },
			{ stat: '2', label: 'Adjacent properties' },
			{ stat: '500ft', label: 'Sandy shallow beach' }
		] as item}
			<div class="flex flex-col items-center py-8 text-center px-4">
				<span class="font-serif text-3xl font-bold text-resort-sand">{item.stat}</span>
				<span class="mt-1 font-sans text-xs text-white/50 uppercase tracking-wide">{item.label}</span>
			</div>
		{/each}
	</div>
</section>

<!-- Amenity highlights -->
<section class="bg-resort-green py-14 text-white">
	<div class="mx-auto grid max-w-5xl grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
		{#each amenities as feature}
			{@const Icon = feature.icon}
			<div class="flex flex-col items-center gap-4 bg-resort-green px-6 py-10 text-center">
				<div class="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
					<Icon class="h-6 w-6" />
				</div>
				<div>
					<p class="font-sans font-semibold">{feature.label}</p>
					<p class="mt-1 font-sans text-sm text-white/65">{feature.sub}</p>
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- About -->
<section class="mx-auto max-w-6xl px-6 py-24">
	<div class="grid items-center gap-14 md:grid-cols-2">
		<div>
			<p class="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-resort-green">
				About the Resorts
			</p>
			<h2 class="font-serif text-5xl font-bold leading-tight text-resort-dark">
				Two properties,<br />one great stay.
			</h2>
			<p class="mt-6 font-sans text-base leading-relaxed text-resort-dark/65">
				The Falcon Resort and Spanish Fiesta Resort are adjacent lakeside motels on Main Street in
				Osoyoos, BC — operated as one from a shared office between them. Whether you book into one
				or the other, you get the same friendly service, the same private beach on Osoyoos Lake, and
				the same incredible Okanagan sunshine.
			</p>
			<p class="mt-4 font-sans text-base leading-relaxed text-resort-dark/65">
				Osoyoos is Canada's only pocket desert — but Osoyoos Lake is the warmest freshwater lake in
				Canada, right at your doorstep. Walk out 500 feet and still touch the sandy bottom.
			</p>
			<Button
				href="/rooms"
				variant="link"
				class="mt-6 h-auto p-0 font-sans text-sm font-semibold text-resort-green hover:text-resort-brown"
			>
				Explore our rooms →
			</Button>
		</div>
		<div class="relative">
			<div class="overflow-hidden rounded-sm">
		<enhanced:img
			src="$lib/assets/images/hero.jpg"
			alt="Osoyoos Lake shoreline viewed from the resort grounds"
			class="h-96 w-full object-cover"
		/>
			</div>
			<!-- Offset caption card -->
			<div
				class="absolute -bottom-5 -left-5 hidden rounded-sm bg-resort-dark px-6 py-4 shadow-xl md:block"
			>
				<p class="font-sans text-xs text-white/50 uppercase tracking-wider">Osoyoos Lake</p>
				<p class="mt-0.5 font-serif text-sm font-semibold text-white">Steps from your door</p>
			</div>
		</div>
	</div>
</section>

<!-- Gallery teaser -->
<section class="bg-resort-dark/4 py-20">
	<div class="mx-auto max-w-6xl px-6">
		<div class="mb-10 flex items-end justify-between">
			<div>
				<p class="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-resort-green">
					Gallery
				</p>
				<h2 class="font-serif text-4xl font-bold text-resort-dark">See for yourself.</h2>
			</div>
			<Button
				href="/gallery"
				variant="link"
				class="hidden h-auto p-0 font-sans text-sm font-semibold text-resort-green hover:text-resort-brown md:inline-flex"
			>
				View all photos →
			</Button>
		</div>

		<div class="grid grid-cols-2 gap-3 md:grid-cols-3 md:grid-rows-2">
			{#each teaserPhotos as src, i}
				<a
					href="/gallery"
					aria-label="View photo gallery"
					class="group relative overflow-hidden rounded-sm
					{i === 0 ? 'row-span-2 col-span-2 md:col-span-1' : ''}"
				>
					<enhanced:img
						{src}
						alt="Osoyoos Lake and resort grounds"
						class="h-full min-h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
					/>
					<div
						class="absolute inset-0 bg-resort-dark/0 transition-colors duration-300 group-hover:bg-resort-dark/15"
					></div>
				</a>
			{/each}
		</div>

		<div class="mt-6 text-center md:hidden">
			<Button
				href="/gallery"
				variant="link"
				class="h-auto p-0 font-sans text-sm font-semibold text-resort-green"
			>
				View all photos →
			</Button>
		</div>
	</div>
</section>

<!-- Location teaser -->
<section class="mx-auto max-w-6xl px-6 py-24">
	<div class="grid items-center gap-14 md:grid-cols-2">
		<div class="order-2 md:order-1 overflow-hidden rounded-sm border border-resort-sand/20">
			<iframe
				title="Osoyoos resort location map"
				src={site.mapEmbedUrl}
				class="h-72 w-full border-0 md:h-80"
				allowfullscreen
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
		<div class="order-1 md:order-2">
			<p class="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-resort-green">
				Location
			</p>
			<h2 class="font-serif text-5xl font-bold leading-tight text-resort-dark">
				Right in the<br />heart of Osoyoos.
			</h2>
			<p class="mt-6 font-sans text-base leading-relaxed text-resort-dark/65">
				Steps from the beach, the marina, and Main Street restaurants. Osoyoos is the gateway to the
				South Okanagan wine region — with over 200 days of sunshine a year.
			</p>
			<div class="mt-5 space-y-1">
				{#each [properties.falcon, properties.spanish] as p}
					<p class="font-sans text-sm text-resort-dark/60">
						<span class="font-semibold text-resort-dark">{p.name}:</span>
						{p.address.street}, {p.address.city}, {p.address.province}
					</p>
				{/each}
			</div>
			<Button
				href="/location"
				variant="link"
				class="mt-6 h-auto p-0 font-sans text-sm font-semibold text-resort-green hover:text-resort-brown"
			>
				Explore the area →
			</Button>
		</div>
	</div>
</section>

<!-- Book CTA banner -->
<section class="bg-resort-brown py-20 text-white">
	<div class="mx-auto max-w-3xl px-6 text-center">
		<p class="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
			Reservations
		</p>
		<h2 class="font-serif text-5xl font-bold">Ready to book?</h2>
		<p class="mt-5 font-sans text-lg text-white/75">
			Call either property directly — we'll find you the best available room.
		</p>
		<div class="mt-10 flex flex-wrap justify-center gap-4">
			<Button
				href="tel:2504957544"
				variant="outline"
				class="h-11 border-white/40 bg-transparent px-7 text-white hover:bg-white/10 hover:text-white"
			>
				Falcon: (250) 495-7544
			</Button>
			<Button
				href="tel:2504956833"
				variant="outline"
				class="h-11 border-white/40 bg-transparent px-7 text-white hover:bg-white/10 hover:text-white"
			>
				Spanish Fiesta: (250) 495-6833
			</Button>
		</div>
		<Button
			href="/contact"
			class="mt-6 h-12 bg-white px-10 text-base font-semibold text-resort-brown hover:bg-white/92"
		>
			View All Contact Info
		</Button>
	</div>
</section>
