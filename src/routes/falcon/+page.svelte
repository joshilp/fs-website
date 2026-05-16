<script lang="ts">
	import heroUrl from '$lib/assets/images/falcon/hero.jpg';
	// CTA background — replace src/lib/assets/images/falcon/cta-bg.jpg to change this photo
	import ctaBg from '$lib/assets/images/falcon/cta-bg.jpg';
	import falconLogoColor from '$lib/assets/falcon-logo-color-tight.png';
	import url1 from '$lib/assets/images/gallery-1.jpg';
	import url2 from '$lib/assets/images/gallery-2.jpg';
	import url3 from '$lib/assets/images/gallery-3.jpg';
	import url4 from '$lib/assets/images/gallery-4.jpg';
	import url5 from '$lib/assets/images/gallery-5.jpg';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Waves, Droplets, AirVent, Flame } from 'lucide-svelte';
	import { properties, site } from '$lib/config.js';
	import BookingLinks from '$lib/components/BookingLinks.svelte';

	const p = properties.falcon;
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
	<title>Falcon Resort Osoyoos BC | Lakeside Motel on Osoyoos Lake</title>
	<meta
		name="description"
		content="Book Falcon Resort in Osoyoos, BC. Lakeside motel with private sandy beach, outdoor pool, hot tub, and air-conditioned rooms. Right on Main Street. Call (250) 495-7544."
	/>
	<meta property="og:title" content="Falcon Resort Osoyoos BC | Lakeside Motel on Osoyoos Lake" />
	<meta
		property="og:description"
		content="Lakeside motel in Osoyoos BC. Private sandy beach, outdoor pool, hot tub, air-conditioned rooms. Call (250) 495-7544."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://falcon-spanish.com/falcon" />
</svelte:head>

<!-- Hero -->
<section class="relative min-h-screen overflow-hidden">
	<enhanced:img
		src="$lib/assets/images/hero.jpg"
		alt="Osoyoos Lake waterfront at Falcon Resort, Osoyoos BC"
		class="absolute inset-0 h-full w-full object-cover"
	/>
	<div class="absolute inset-0 bg-linear-to-b from-black/25 via-black/15 to-black/80"></div>

	<div
		class="relative flex min-h-screen flex-col items-center justify-center px-6 pb-16 pt-24 text-center text-white"
	>
		<img src={falconLogoColor} alt="Falcon Resort" height="144" width="432" class="mb-6 h-36 w-auto object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.45)] md:h-44" />
		<p class="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-resort-sand">
			Osoyoos, British Columbia
		</p>
		<h1 class="sr-only">Falcon Resort</h1>
		<span class="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 font-sans text-xs font-medium tracking-wide text-white/75 backdrop-blur-sm">
			Under new ownership — we're just getting started
		</span>
		<p class="mt-6 max-w-lg font-sans text-lg leading-relaxed text-white/75">
			A lakeside motel on Osoyoos Lake — private sandy beach, outdoor pool, and the warmest water in
			Canada right at your door.
		</p>

		<!-- Primary phone CTA -->
		<a
			href="tel:{p.phone.tel}"
			class="mt-10 inline-flex h-14 items-center gap-3 rounded-lg bg-resort-stone px-10 font-sans text-lg font-bold text-white shadow-lg transition-opacity hover:opacity-90"
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
				href="/falcon/rooms"
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

<!-- About -->
<section class="bg-resort-dark/3 py-24">
	<div class="mx-auto max-w-6xl px-6">
		<div class="grid items-center gap-14 md:grid-cols-2">
			<div>
				<p class="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-resort-stone">
					About Falcon Resort
				</p>
				<h2 class="font-serif text-5xl font-bold leading-tight text-resort-dark">
					Lakeside comfort<br />in Osoyoos.
				</h2>
				<p class="mt-6 font-sans text-base leading-relaxed text-resort-dark/65">
					Falcon Resort sits right on Main Street in Osoyoos, BC — steps from a private sandy beach on
					Osoyoos Lake. The warmest freshwater lake in Canada is practically at your door. Walk out
					500 feet and still touch the sandy bottom.
				</p>
				<p class="mt-4 font-sans text-base leading-relaxed text-resort-dark/65">
					Falcon and Spanish Fiesta share connected grounds — guests enjoy 2 outdoor pools, a hot tub,
					BBQ areas, and a private beach all within the same property. Clean, air-conditioned rooms and
					friendly service — everything you need for a great Osoyoos stay.
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
						alt="Osoyoos Lake waterfront at Falcon Resort"
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
	</div>
</section>

<!-- Amenity strip -->
<section class="border-y border-resort-sand/20 p-12">
	<div class="mx-auto grid max-w-5xl grid-cols-2 gap-px bg-resort-sand/20 md:grid-cols-4">
		{#each highlights as feature}
			{@const Icon = feature.icon}
			<div class="flex flex-col items-center gap-4 bg-white px-6 py-10 text-center">
				<div class="flex h-14 w-14 items-center justify-center rounded-full bg-resort-stone/12">
					<Icon class="h-6 w-6 text-resort-stone" />
				</div>
				<div>
					<p class="font-sans font-semibold text-resort-dark">{feature.label}</p>
					<p class="mt-1 font-sans text-sm text-resort-dark/55">{feature.sub}</p>
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- Rooms -->
<section class="border-y border-resort-sand/20 bg-gray-50 py-20">
	<div class="mx-auto max-w-6xl px-6">
		<div class="mb-12 text-center">
			<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-resort-stone">
				Accommodations
			</p>
			<h2 class="font-serif text-4xl font-bold text-resort-dark">Find your room.</h2>
			<p class="mx-auto mt-3 max-w-xl font-sans text-resort-dark/65">
				Clean, comfortable, and air-conditioned. Every room is steps from the pool and beach.
			</p>
		</div>

	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
		{#each p.rooms as room}
			<div class="rounded-xl border border-resort-sand/30 bg-white p-5">
				<div class="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-resort-stone font-sans text-sm font-bold text-white">
					{room.letter}
				</div>
				<h3 class="font-serif text-base font-bold text-resort-dark">{room.name}</h3>
				<div class="mt-3 flex flex-wrap gap-1.5">
					{#each room.features as f}
						<Badge
							variant="outline"
							class="border-resort-stone/30 font-sans text-xs text-resort-stone"
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
			href="/falcon/rooms"
			variant="link"
			class="h-auto p-0 font-sans text-sm font-semibold text-resort-stone hover:text-resort-stone/70"
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
				<p class="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-resort-stone">
					Gallery
				</p>
				<h2 class="font-serif text-4xl font-bold text-resort-dark">See for yourself.</h2>
			</div>
			<Button
				href="/gallery"
				variant="link"
				class="hidden h-auto p-0 font-sans text-sm font-semibold text-resort-stone hover:text-resort-stone/70 md:inline-flex"
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
						alt="Falcon Resort, Osoyoos BC"
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
<!-- Background: replace src/lib/assets/images/falcon/cta-bg.jpg to change this photo -->
<section class="relative overflow-hidden py-20 text-white">
	<img
		src={ctaBg}
		alt=""
		aria-hidden="true"
		class="absolute inset-0 h-full w-full object-cover"
		loading="lazy"
	/>
	<div class="absolute inset-0 bg-resort-dark/68"></div>
	<div class="relative z-10 mx-auto max-w-3xl px-6 text-center">
		<p class="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
			Reservations
		</p>
		<h2 class="font-serif text-5xl font-bold">Ready to book?</h2>
		<p class="mt-5 font-sans text-lg text-white/80">
			Call us — we'll confirm your dates and room in under 2 minutes.
		</p>

		<a
			href="tel:{p.phone.tel}"
			class="mt-8 inline-flex h-14 items-center gap-3 rounded-lg bg-white px-10 font-sans text-lg font-bold text-resort-stone shadow-lg transition-opacity hover:opacity-90"
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

		<p class="mt-8 font-sans text-sm text-white/45">
			{p.address.full}
		</p>
	</div>
</section>
