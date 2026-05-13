<script lang="ts">
	import heroUrl from '$lib/assets/images/hero.jpg';
	import url1 from '$lib/assets/images/gallery-1.jpg';
	import url2 from '$lib/assets/images/gallery-2.jpg';
	import url3 from '$lib/assets/images/gallery-3.jpg';
	import url4 from '$lib/assets/images/gallery-4.jpg';
	import url5 from '$lib/assets/images/gallery-5.jpg';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Waves, Droplets, AirVent, Flame } from 'lucide-svelte';
	import { properties } from '$lib/config.js';
	import BookingLinks from '$lib/components/BookingLinks.svelte';

	const p = properties.spanish;
	const teaserPhotos = [url1, url2, url3, url4, url5];

	const highlights = [
		{ label: 'Private Sandy Beach', sub: 'Steps from your door', icon: Waves },
		{ label: '2 Pools & Hot Tub', sub: 'Across our connected grounds', icon: Droplets },
		{ label: 'Air Conditioned', sub: 'Every room, always', icon: AirVent },
		{ label: 'BBQ & Picnic Area', sub: 'On the grounds', icon: Flame }
	];

	const hasOta = $derived(!!(p.booking.bookingCom || p.booking.expedia));
</script>

<svelte:head>
	<title>Spanish Fiesta Resort Osoyoos BC | Lakeside Motel on Osoyoos Lake</title>
	<meta
		name="description"
		content="Book Spanish Fiesta Resort in Osoyoos, BC. Lakeside motel with private sandy beach, outdoor pool, hot tub, and air-conditioned rooms. Right on Main Street. Call (250) 495-6833."
	/>
	<meta
		property="og:title"
		content="Spanish Fiesta Resort Osoyoos BC | Lakeside Motel on Osoyoos Lake"
	/>
	<meta
		property="og:description"
		content="Lakeside motel in Osoyoos BC. Private sandy beach, outdoor pool, hot tub, air-conditioned rooms. Call (250) 495-6833."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://falcon-spanish.com/spanish" />
</svelte:head>

<!-- Hero -->
<section class="relative min-h-screen overflow-hidden">
	<enhanced:img
		src="$lib/assets/images/hero.jpg"
		alt="Osoyoos Lake waterfront at Spanish Fiesta Resort, Osoyoos BC"
		class="absolute inset-0 h-full w-full object-cover"
	/>
	<div class="absolute inset-0 bg-linear-to-b from-black/45 via-black/20 to-black/80"></div>

	<div
		class="relative flex min-h-screen flex-col items-center justify-center px-6 pb-16 pt-24 text-center text-white"
	>
		<p class="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-resort-sand">
			Osoyoos, British Columbia
		</p>
		<h1 class="font-serif text-5xl font-bold italic leading-[1.05] md:text-7xl">
			Spanish Fiesta Resort
		</h1>
		<span class="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 font-sans text-xs font-medium tracking-wide text-white/75 backdrop-blur-sm">
			Under new ownership — we're just getting started
		</span>
		<p class="mt-6 max-w-lg font-sans text-lg leading-relaxed text-white/75">
			A lakeside motel in the heart of Osoyoos — private sandy beach, outdoor pool, and Canada's
			warmest lake right outside your door.
		</p>

		<!-- Primary phone CTA -->
		<a
			href="tel:{p.phone.tel}"
			class="mt-10 inline-flex h-14 items-center gap-3 rounded-lg bg-resort-red px-10 font-sans text-lg font-bold text-white shadow-lg transition-opacity hover:opacity-90"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5 shrink-0"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
				/>
			</svg>
			{p.phone.display}
		</a>

		{#if hasOta}
			<div class="mt-6">
				<p class="mb-3 font-sans text-xs text-white/45">Prefer to book online? We're also on:</p>
				<div class="flex justify-center">
					<BookingLinks property={p} />
				</div>
			</div>
		{/if}

		<div class="mt-6">
			<Button
				href="/spanish/rooms"
				variant="link"
				class="h-auto p-0 font-sans text-sm font-semibold text-white/60 hover:text-white"
			>
				View rooms & amenities →
			</Button>
		</div>
	</div>

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

<!-- Amenity strip -->
<section class="bg-resort-red py-14 text-white">
	<div class="mx-auto grid max-w-5xl grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
		{#each highlights as feature}
			{@const Icon = feature.icon}
			<div class="flex flex-col items-center gap-4 bg-resort-red px-6 py-10 text-center">
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
			<p class="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-resort-red">
				About Spanish Fiesta Resort
			</p>
			<h2 class="font-serif text-5xl font-bold leading-tight text-resort-dark">
				Warmth, water,<br /><em>and Osoyoos sunshine.</em>
			</h2>
			<p class="mt-6 font-sans text-base leading-relaxed text-resort-dark/65">
				Spanish Fiesta Resort is a lakeside motel in the heart of Osoyoos, BC — right on Main
				Street with direct access to a private sandy beach on Osoyoos Lake. The warmest freshwater
				lake in Canada is steps away, and the Okanagan sunshine averages over 200 days a year.
			</p>
			<p class="mt-4 font-sans text-base leading-relaxed text-resort-dark/65">
				Spanish Fiesta and Falcon share connected grounds — guests enjoy 2 outdoor pools, a hot tub,
				BBQ areas, and a private beach all within the same property. Whether you're here for the wine
				country, the water sports, or just a quiet getaway — this is your home base.
			</p>
			<address class="mt-6 not-italic">
				<p class="font-sans text-sm text-resort-dark/60">
					<span class="font-semibold text-resort-dark">{p.address.street}</span><br />
					{p.address.city}, {p.address.province}&nbsp;&nbsp;{p.address.postalCode}
				</p>
			</address>
		</div>
		<div class="relative">
			<div class="overflow-hidden rounded-sm">
				<img
					src={heroUrl}
					alt="Osoyoos Lake waterfront at Spanish Fiesta Resort"
					width="1920"
					height="1080"
					class="h-96 w-full object-cover"
					loading="lazy"
					decoding="async"
				/>
			</div>
			<div
				class="absolute -bottom-5 -left-5 hidden rounded-sm bg-resort-dark px-6 py-4 shadow-xl md:block"
			>
				<p class="font-sans text-xs uppercase tracking-wider text-white/50">Osoyoos Lake</p>
				<p class="mt-0.5 font-serif text-sm font-semibold text-white">Steps from your door</p>
			</div>
		</div>
	</div>
</section>

<!-- Rooms -->
<section class="bg-resort-base py-20">
	<div class="mx-auto max-w-6xl px-6">
		<div class="mb-12 text-center">
			<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-red">
				Accommodations
			</p>
			<h2 class="font-serif text-4xl font-bold text-resort-dark">Find your <em>room.</em></h2>
			<p class="mx-auto mt-3 max-w-xl font-sans text-resort-dark/65">
				Clean, comfortable, and air-conditioned. Every room is steps from the pool and beach.
			</p>
		</div>

	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
		{#each p.rooms as room}
			<div class="rounded-xl border border-resort-sand/30 bg-white p-5">
				<div class="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-resort-red font-sans text-sm font-bold text-white">
					{room.letter}
				</div>
				<h3 class="font-serif text-base font-bold text-resort-dark">{room.name}</h3>
				<div class="mt-3 flex flex-wrap gap-1.5">
					{#each room.features as f}
						<Badge
							variant="outline"
							class="border-resort-red/30 font-sans text-xs text-resort-red"
						>
							{f}
						</Badge>
					{/each}
				</div>
			</div>
		{/each}
	</div>

	<div class="mt-8 text-center">
		<Button
			href="/spanish/rooms"
			variant="link"
			class="h-auto p-0 font-sans text-sm font-semibold text-resort-red hover:text-resort-red/70"
		>
			View all rooms & amenities →
		</Button>
	</div>
	</div>
</section>

<!-- Gallery -->
<section class="py-20">
	<div class="mx-auto max-w-6xl px-6">
		<div class="mb-10 flex items-end justify-between">
			<div>
				<p class="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-resort-red">
					Gallery
				</p>
				<h2 class="font-serif text-4xl font-bold text-resort-dark">See for yourself.</h2>
			</div>
			<Button
				href="/gallery"
				variant="link"
				class="hidden h-auto p-0 font-sans text-sm font-semibold text-resort-red hover:text-resort-red/70 md:inline-flex"
			>
				View all photos →
			</Button>
		</div>

		<div class="grid grid-cols-2 gap-3 md:grid-cols-3 md:grid-rows-2">
			{#each teaserPhotos as src, i}
				<a
					href="/gallery"
					aria-label="View photo gallery"
					class="group relative overflow-hidden rounded-sm {i === 0
						? 'col-span-2 row-span-2 md:col-span-1'
						: ''}"
				>
					<img
						{src}
						alt="Spanish Fiesta Resort, Osoyoos BC"
						width="475"
						height="350"
						class="h-full min-h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
						loading="lazy"
						decoding="async"
					/>
					<div
						class="absolute inset-0 bg-resort-dark/0 transition-colors duration-300 group-hover:bg-resort-dark/15"
					></div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Book CTA -->
<section class="bg-resort-red py-20 text-white">
	<div class="mx-auto max-w-3xl px-6 text-center">
		<p class="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
			Reservations
		</p>
		<h2 class="font-serif text-5xl font-bold italic">Ready to book?</h2>
		<p class="mt-5 font-sans text-lg text-white/80">
			Call us — we'll confirm your dates and room in under 2 minutes.
		</p>

		<a
			href="tel:{p.phone.tel}"
			class="mt-8 inline-flex h-14 items-center gap-3 rounded-lg bg-white px-10 font-sans text-lg font-bold text-resort-red shadow-lg transition-opacity hover:opacity-90"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5 shrink-0"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
				/>
			</svg>
			{p.phone.display}
		</a>

		<p class="mt-8 font-sans text-sm text-white/60">
			{p.address.full}
		</p>
	</div>
</section>
