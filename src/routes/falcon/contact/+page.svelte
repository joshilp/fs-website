<script lang="ts">
	import { properties } from '$lib/config.js';
	import PropertyContactCard from '$lib/components/PropertyContactCard.svelte';

	const p = properties.falcon;
	const sister = properties.spanish;
</script>

<svelte:head>
	<title>Book Falcon Resort | Osoyoos BC — Call (250) 495-7544</title>
	<meta
		name="description"
		content="Book a room at Falcon Resort in Osoyoos, BC. Call (250) 495-7544 — we'll confirm your dates and room in under 2 minutes. Also available on Booking.com and Expedia."
	/>
	<meta property="og:title" content="Book Falcon Resort | Osoyoos BC" />
	<meta
		property="og:description"
		content="Call Falcon Resort at (250) 495-7544 to book your Osoyoos lakeside stay. Rooms steps from the beach, 2 pools, and hot tub."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://falcon-spanish.com/falcon/contact" />
</svelte:head>

<!-- Header -->
<section class="pt-10 pb-6 text-center">
	<div class="mx-auto max-w-2xl px-6">
		<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-stone">
			Falcon Resort
		</p>
		<h1 class="font-serif text-5xl font-bold text-resort-dark">Book Your Stay</h1>
		<p class="mt-4 font-sans text-lg text-resort-dark/65">
			Call us — we'll confirm your dates and room in under 2 minutes.
		</p>
	</div>
</section>

<!-- Contact card -->
<section class="mx-auto max-w-lg px-6 py-20">
	<PropertyContactCard property={p} sisterProperty={sister} sisterHref="/spanish" />
</section>
