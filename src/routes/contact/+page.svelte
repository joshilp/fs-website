<script lang="ts">
	import { properties } from '$lib/config.js';
	import PropertyContactCard from '$lib/components/PropertyContactCard.svelte';
</script>

<svelte:head>
	<title>Book a Room in Osoyoos BC | Falcon Resort &amp; Spanish Fiesta Resort</title>
	<meta
		name="description"
		content="Book a motel room in Osoyoos, BC. Call Falcon Resort at (250) 495-7544 or Spanish Fiesta Resort at (250) 495-6833. Two adjacent lakeside motels on Osoyoos Lake — we'll find you the best available room."
	/>
	<meta property="og:title" content="Book a Room in Osoyoos BC | Falcon Resort & Spanish Fiesta Resort" />
	<meta
		property="og:description"
		content="Book a lakeside motel room in Osoyoos BC. Falcon Resort (250) 495-7544 or Spanish Fiesta Resort (250) 495-6833."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://falcon-spanish.com/contact" />
</svelte:head>

<!-- Page header -->
<section class="pt-16 pb-10 text-center">
	<div class="mx-auto max-w-2xl px-6">
		<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-green">
			Reservations
		</p>
		<h1 class="font-serif text-5xl font-bold text-resort-dark">Book Your Osoyoos Stay</h1>
		<p class="mt-4 font-sans text-lg text-resort-dark/65">
			Call Falcon Resort or Spanish Fiesta Resort — we're happy to find the right room at either
			lakeside motel.
		</p>
	</div>
</section>

<!-- Contact cards -->
<section class="mx-auto max-w-4xl px-6 py-20">
	<div class="grid gap-8 md:grid-cols-2">
		<PropertyContactCard property={properties.falcon} />
		<PropertyContactCard property={properties.spanish} />
	</div>

	<p class="mt-6 text-center font-sans text-sm text-resort-dark/50">
		<strong class="text-resort-dark">Not sure which property?</strong> Call either — we manage both from
		the same office.
	</p>
</section>

<!-- Hours note -->
<section class="bg-resort-dark/5 py-12">
	<div class="mx-auto max-w-2xl px-6 text-center">
		<p class="font-sans text-sm text-resort-dark/60">
			<strong class="text-resort-dark">Office hours:</strong> We're typically available daily during
			the season. If you can't reach us, leave a message and we'll call back promptly.
		</p>
	</div>
</section>
