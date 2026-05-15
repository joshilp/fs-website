<script lang="ts">
	import { properties } from '$lib/config.js';
	import BookingLinks from '$lib/components/BookingLinks.svelte';

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
		content="Call Spanish Fiesta Resort at (250) 495-6833 to book your Osoyoos lakeside stay. Rooms steps from the beach, 2 pools, and hot tub."
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

<!-- Booking section -->
<section class="mx-auto max-w-xl px-6 py-20 text-center">
	<!-- Phone -->
	<a
		href="tel:{p.phone.tel}"
		class="inline-flex h-16 items-center gap-3 rounded-xl bg-resort-red px-12 font-sans text-xl font-bold text-white shadow-lg transition-opacity hover:opacity-90"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6 shrink-0"
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

	<address class="mt-6 not-italic">
		<p class="font-sans text-sm text-resort-dark/60">{p.address.full}</p>
	</address>

	<div
		class="mt-4 rounded-lg border border-resort-red/20 bg-resort-red/5 px-5 py-3 font-sans text-sm text-resort-dark/70"
	>
		If we miss your call, leave a message and we'll call back promptly.
	</div>

	<!-- OTA links -->
	{#if p.booking.bookingCom || p.booking.expedia}
		<div class="mt-12 border-t border-resort-sand/30 pt-10">
			<p class="mb-4 font-sans text-sm text-resort-dark/50">
				Prefer to book online? We're also on:
			</p>
			<div class="flex justify-center">
				<BookingLinks property={p} />
			</div>
			<p class="mt-4 font-sans text-xs text-resort-dark/35">
				You'll be taken to the platform's website to complete your booking.
			</p>
		</div>
	{/if}

	<!-- Sister property note -->
	<div class="mt-12 border-t border-resort-sand/30 pt-10">
		<p class="font-sans text-sm text-resort-dark/50">Looking for our connected property?</p>
		<a
			href="/falcon"
			class="mt-2 inline-block font-sans text-sm font-semibold text-resort-green transition-colors hover:text-resort-red"
		>
			View Falcon Resort →
		</a>
		<p class="mt-1 font-sans text-xs text-resort-dark/35">
			{sister.phone.display} &mdash; same grounds, steps away
		</p>
	</div>
</section>
