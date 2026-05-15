<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { properties, propertyList } from '$lib/config.js';
	import BookingLinks from '$lib/components/BookingLinks.svelte';

	const hasAnyOta = $derived(
		propertyList.some((p) => p.booking.bookingCom || p.booking.expedia)
	);
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
<section class="border-b border-resort-sand/15 py-24 text-center">
	<div class="mx-auto max-w-2xl px-6">
		<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-stone">
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
		<!-- Falcon Resort -->
		<div class="rounded-sm border border-resort-sand/30 bg-white p-8">
			<div
				class="mb-5 inline-flex items-center gap-2 rounded-full bg-resort-green/10 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-widest text-resort-green"
			>
				{properties.falcon.name}
			</div>
			<address class="not-italic">
				<p class="font-sans text-resort-dark/70">{properties.falcon.address.street}</p>
				<p class="font-sans text-resort-dark/70">
					{properties.falcon.address.city}, {properties.falcon.address.province}&nbsp;&nbsp;{properties
						.falcon.address.postalCode}
				</p>
			</address>
			<a
				href="tel:{properties.falcon.phone.tel}"
				class="mt-5 flex items-center gap-3 font-serif text-3xl font-semibold text-resort-dark transition-colors hover:text-resort-green"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 text-resort-green"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
					/>
				</svg>
				{properties.falcon.phone.display}
			</a>
			<Button
				href="tel:{properties.falcon.phone.tel}"
				class="mt-5 w-full bg-resort-green text-white hover:bg-resort-green/85"
			>
				Call Falcon Resort
			</Button>
		</div>

		<!-- Spanish Fiesta Resort -->
		<div class="rounded-sm border border-resort-sand/30 bg-white p-8">
			<div
				class="mb-5 inline-flex items-center gap-2 rounded-full bg-resort-brown/10 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-widest text-resort-brown"
			>
				{properties.spanish.name}
			</div>
			<address class="not-italic">
				<p class="font-sans text-resort-dark/70">{properties.spanish.address.street}</p>
				<p class="font-sans text-resort-dark/70">
					{properties.spanish.address.city}, {properties.spanish.address.province}&nbsp;&nbsp;{properties
						.spanish.address.postalCode}
				</p>
			</address>
			<a
				href="tel:{properties.spanish.phone.tel}"
				class="mt-5 flex items-center gap-3 font-serif text-3xl font-semibold text-resort-dark transition-colors hover:text-resort-brown"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 text-resort-brown"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
					/>
				</svg>
				{properties.spanish.phone.display}
			</a>
			<Button
				href="tel:{properties.spanish.phone.tel}"
				class="mt-5 w-full bg-resort-brown text-white hover:bg-resort-brown/85"
			>
				Call Spanish Fiesta
			</Button>
		</div>
	</div>

	<!-- Info note -->
	<div
		class="mt-8 rounded-sm border border-resort-green/20 bg-resort-green/5 p-6 text-center font-sans text-sm text-resort-dark/70"
	>
		<strong class="text-resort-dark">Not sure which property to book into?</strong> No problem —
		both resorts are managed from the same office. Call either number and we'll find you the best
		available room across both properties.
	</div>

	<!-- Online booking -->
	{#if hasAnyOta}
		<div class="mt-12 rounded-2xl border border-resort-sand/40 bg-resort-sand/10 p-8">
			<p class="mb-2 text-center font-sans text-xs font-semibold uppercase tracking-widest text-resort-sand">
				Book Online
			</p>
			<h2 class="mb-6 text-center font-serif text-2xl font-bold text-resort-dark">
				Prefer to book online?
			</h2>
			<div class="grid gap-6 md:grid-cols-2">
				{#each propertyList as property}
					{#if property.booking.bookingCom || property.booking.expedia}
						<div>
							<p class="mb-3 font-sans text-sm font-semibold text-resort-dark">{property.name}</p>
							<BookingLinks {property} />
						</div>
					{/if}
				{/each}
			</div>
			<p class="mt-6 text-center font-sans text-xs text-resort-dark/45">
				You'll be taken to the OTA's website to complete your booking. Prices may vary by platform.
			</p>
		</div>
	{/if}
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
