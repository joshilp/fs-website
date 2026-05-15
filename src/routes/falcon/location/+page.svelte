<script lang="ts">
	import { properties } from '$lib/config.js';

	const p = properties.falcon;
	const directionsUrl = `https://maps.google.com/?q=${encodeURIComponent(p.address.full)}`;
</script>

<svelte:head>
	<title>Falcon Resort — Location &amp; Directions | Osoyoos, BC</title>
	<meta
		name="description"
		content="Find Falcon Resort at {p.address.full}. Steps from Osoyoos Lake with free parking on site. Get directions and see what's nearby on Main Street."
	/>
	<meta property="og:title" content="Falcon Resort Location & Directions | Osoyoos, BC" />
	<meta property="og:description" content="Find us at {p.address.full} — steps from Osoyoos Lake, right on Main Street." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://falcon-spanish.com/falcon/location" />
</svelte:head>

<!-- Header -->
<section class="border-b border-resort-sand/15 py-20 text-center">
	<div class="mx-auto max-w-2xl px-6">
		<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-stone">
			Falcon Resort
		</p>
		<h1 class="font-serif text-4xl font-bold text-resort-dark">Location &amp; Directions</h1>
		<p class="mt-4 font-sans text-lg text-resort-dark/65">
			{p.address.street}, {p.address.city}, {p.address.province}
		</p>
		<a
			href={directionsUrl}
			target="_blank"
			rel="noopener noreferrer"
			class="mt-6 inline-flex h-11 items-center gap-2 rounded-lg bg-resort-stone px-6 font-sans text-sm font-semibold text-white transition-opacity hover:opacity-90"
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
			</svg>
			Get Directions
		</a>
	</div>
</section>

<!-- Map -->
<section class="mx-auto max-w-6xl px-6 py-12">
	<div class="overflow-hidden rounded-sm border border-resort-sand/30 shadow-sm">
		<iframe
			title="Falcon Resort location map"
			src={p.mapEmbedUrl}
			class="h-[420px] w-full border-0"
			allowfullscreen
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe>
	</div>
</section>

<!-- Practical info -->
<section class="mx-auto max-w-5xl px-6 pb-16">
	<div class="grid gap-8 md:grid-cols-3">
		<!-- Address & contact -->
		<div class="rounded-sm border border-resort-sand/30 bg-white p-6">
			<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-stone">
				Address
			</p>
			<address class="not-italic font-sans text-sm leading-relaxed text-resort-dark/70">
				{p.address.street}<br />
				{p.address.city}, {p.address.province}<br />
				{p.address.postalCode}
			</address>
			<a
				href="tel:{p.phone.tel}"
				class="mt-4 block font-sans text-sm font-semibold text-resort-stone transition-colors hover:text-resort-stone/75"
			>
				{p.phone.display}
			</a>
		</div>

		<!-- Parking & arrival -->
		<div class="rounded-sm border border-resort-sand/30 bg-white p-6">
			<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-stone">
				Parking & Arrival
			</p>
			<ul class="space-y-2 font-sans text-sm text-resort-dark/70">
				<li class="flex items-start gap-2">
					<span class="mt-0.5 text-resort-stone">✓</span>
					Free parking on site — no need to book a spot
				</li>
				<li class="flex items-start gap-2">
					<span class="mt-0.5 text-resort-stone">✓</span>
					Main Street entrance — look for our sign
				</li>
				<li class="flex items-start gap-2">
					<span class="mt-0.5 text-resort-stone">✓</span>
					Call us when you're close and we'll get you sorted quickly
				</li>
			</ul>
		</div>

		<!-- What's nearby -->
		<div class="rounded-sm border border-resort-sand/30 bg-white p-6">
			<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-stone">
				What's Nearby
			</p>
			<ul class="space-y-2 font-sans text-sm text-resort-dark/70">
				<li class="flex items-start gap-2">
					<span class="mt-0.5 text-resort-stone">·</span>
					Osoyoos Lake beach — steps away
				</li>
				<li class="flex items-start gap-2">
					<span class="mt-0.5 text-resort-stone">·</span>
					Restaurants, cafés & shops on Main Street
				</li>
				<li class="flex items-start gap-2">
					<span class="mt-0.5 text-resort-stone">·</span>
					Saturday Farmer's Market — walking distance
				</li>
				<li class="flex items-start gap-2">
					<span class="mt-0.5 text-resort-stone">·</span>
					Nk'Mip Desert Centre — 5 min drive
				</li>
				<li class="flex items-start gap-2">
					<span class="mt-0.5 text-resort-stone">·</span>
					30+ Okanagan wineries nearby
				</li>
			</ul>
		</div>
	</div>

	<!-- Getting here -->
	<div class="mt-8 rounded-sm border border-resort-sand/30 bg-resort-stone/5 p-6">
		<p class="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-resort-stone">
			Getting Here
		</p>
		<div class="grid gap-6 sm:grid-cols-3 font-sans text-sm text-resort-dark/70">
			<div>
				<p class="font-semibold text-resort-dark">From Kelowna</p>
				<p class="mt-1">~1.5 hours south on Hwy 97</p>
			</div>
			<div>
				<p class="font-semibold text-resort-dark">From Vancouver</p>
				<p class="mt-1">~4 hours east via Hwy 3 or Hwy 5</p>
			</div>
			<div>
				<p class="font-semibold text-resort-dark">From the US border</p>
				<p class="mt-1">~15 min north from Oroville, WA via Hwy 97</p>
			</div>
		</div>
	</div>

	<!-- Area guide nudge -->
	<p class="mt-8 text-center font-sans text-sm text-resort-dark/50">
		Planning what to do while you're here?
		<a href="/guides" class="font-semibold text-resort-stone underline-offset-2 hover:underline">
			Browse the Osoyoos Area Guide →
		</a>
	</p>
</section>

<!-- Call CTA -->
<section class="bg-resort-stone py-14 text-center text-white">
	<h2 class="font-serif text-3xl font-bold">Ready to book your stay?</h2>
	<p class="mt-3 font-sans text-white/80">We'll confirm your room in under 2 minutes.</p>
	<a
		href="tel:{p.phone.tel}"
		class="mt-6 inline-flex h-12 items-center gap-2 rounded-lg bg-white px-8 font-sans font-semibold text-resort-stone transition-opacity hover:opacity-90"
	>
		{p.phone.display}
	</a>
</section>
