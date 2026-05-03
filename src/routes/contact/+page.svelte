<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<svelte:head>
	<title>Contact &amp; Reservations — Spanish Fiesta &amp; Falcon Resorts</title>
	<meta
		name="description"
		content="Contact Spanish Fiesta or Falcon Resort in Osoyoos, BC to make a reservation. Call us directly or use our online booking."
	/>
	<meta property="og:title" content="Book Your Stay — Spanish Fiesta & Falcon Resorts, Osoyoos" />
	<meta property="og:description" content="Make a reservation at our Osoyoos lakeside resorts. Call Falcon Resort at (250) 495-7544 or Spanish Fiesta at (250) 495-6833." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://falcon-spanish.com/contact" />
</svelte:head>

<!-- Page header -->
<section class="bg-resort-dark py-24 text-white text-center">
	<div class="mx-auto max-w-2xl px-6">
		<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-sand">
			Reservations
		</p>
		<h1 class="font-serif text-5xl font-bold">Book Your Stay</h1>
		<p class="mt-4 font-sans text-lg text-white/70">
			We're happy to find the right room for you — in either property.
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
				Falcon Resort
			</div>
			<address class="not-italic">
				<p class="font-sans text-resort-dark/70">7106 Main Street</p>
				<p class="font-sans text-resort-dark/70">Osoyoos, BC &nbsp;V0H 1V3</p>
			</address>
			<a
				href="tel:2504957544"
				class="mt-5 flex items-center gap-3 font-serif text-3xl font-semibold text-resort-dark hover:text-resort-green transition-colors"
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
				(250) 495-7544
			</a>
			<Button href="tel:2504957544" class="mt-5 w-full bg-resort-green text-white hover:bg-resort-green/85">
				Call Falcon Resort
			</Button>
		</div>

		<!-- Spanish Fiesta Resort -->
		<div class="rounded-sm border border-resort-sand/30 bg-white p-8">
			<div
				class="mb-5 inline-flex items-center gap-2 rounded-full bg-resort-brown/10 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-widest text-resort-brown"
			>
				Spanish Fiesta Resort
			</div>
			<address class="not-italic">
				<p class="font-sans text-resort-dark/70">7104 Main Street</p>
				<p class="font-sans text-resort-dark/70">Osoyoos, BC &nbsp;V0H 1V3</p>
			</address>
			<a
				href="tel:2504956833"
				class="mt-5 flex items-center gap-3 font-serif text-3xl font-semibold text-resort-dark hover:text-resort-brown transition-colors"
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
				(250) 495-6833
			</a>
			<Button href="tel:2504956833" class="mt-5 w-full bg-resort-brown text-white hover:bg-resort-brown/85">
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

	<!-- Online booking placeholder -->
	<div class="mt-12 rounded-sm border border-resort-sand/40 bg-resort-sand/10 p-8 text-center">
		<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-sand">
			Online Booking
		</p>
		<h2 class="font-serif text-2xl font-bold text-resort-dark">Book online</h2>
		<p class="mt-3 font-sans text-resort-dark/60">
			Online booking is coming soon. For now, please call either property directly to make a
			reservation.
		</p>
	</div>
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
