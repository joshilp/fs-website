<script lang="ts">
	import { properties } from '$lib/config.js';
	import PropertyContactCard from '$lib/components/PropertyContactCard.svelte';

	const p = properties.spanish;
	const sister = properties.falcon;
</script>

<svelte:head>
	<title>Book Spanish Fiesta Resort | Osoyoos BC — Call (250) 495-6833</title>
	<meta
		name="description"
		content="Book a room at Spanish Fiesta Resort in Osoyoos, BC. Call (250) 495-6833 — we'll confirm your dates and room in under 2 minutes. Also available on Booking.com and Expedia."
	/>
	<meta property="og:title" content="Book Spanish Fiesta Resort | Osoyoos BC" />
	<meta
		property="og:description"
		content="Call Spanish Fiesta Resort at (250) 495-6833 to book your Osoyoos lakeside stay. Rooms steps from the lake, 2 pools, and hot tub."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://falcon-spanish.com/spanish/contact" />
</svelte:head>

<!-- Header -->
<section class="border-b border-resort-sand/15 py-24 text-center">
	<div class="mx-auto max-w-2xl px-6">
		<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-red">
			Spanish Fiesta Resort
		</p>
		<h1 class="font-serif text-5xl font-bold text-resort-dark">Book Your Stay</h1>
		<p class="mt-4 font-sans text-lg text-resort-dark/65">
			Call us — we'll confirm your dates and room in under 2 minutes.
		</p>
	</div>
</section>

<!-- Contact card -->
<section class="mx-auto max-w-lg px-6 py-20">
	<PropertyContactCard property={p} sisterProperty={sister} sisterHref="/falcon" />
</section>
