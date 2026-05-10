<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { rooms, propertyList } from '$lib/config.js';
	import BookingLinks from '$lib/components/BookingLinks.svelte';
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card/index.js';

	const hasAnyOta = $derived(
		propertyList.some((p) => p.booking.bookingCom || p.booking.expedia)
	);

	const amenities = [
		{
			title: 'Private Sandy Beach',
			body: "Step right out to our safe, shallow sandy beach on Osoyoos Lake. Walk 500 feet and still touch the bottom."
		},
		{
			title: '2 Outdoor Pools',
			body: "Two heated outdoor pools — one at each property — so there's always a spot in the sun."
		},
		{
			title: 'Hot Tub',
			body: 'Wind down in the hot tub after a day on the water or exploring the valley.'
		},
		{
			title: 'BBQ & Picnic Tables',
			body: 'Each property has a picnic area with tables and barbeques — perfect for al fresco dinners.'
		},
		{
			title: 'Air Conditioning',
			body: 'Every room is air conditioned. Essential for Osoyoos summers, which regularly top 38°C.'
		},
		{
			title: 'Prime Location',
			body: "Right on Main Street in downtown Osoyoos — restaurants, shops, and the marina are all within walking distance."
		}
	];
</script>

<svelte:head>
	<title>Motel Rooms in Osoyoos BC | Falcon Resort &amp; Spanish Fiesta Resort</title>
	<meta
		name="description"
		content="Comfortable, air-conditioned motel rooms on Osoyoos Lake, BC. Steps from a private sandy beach, 2 outdoor pools, and a hot tub. Family rooms, studio suites, and standard rooms available."
	/>
	<meta property="og:title" content="Motel Rooms in Osoyoos BC | Falcon Resort & Spanish Fiesta Resort" />
	<meta
		property="og:description"
		content="Comfortable motel rooms on Osoyoos Lake. Private beach, 2 pools, hot tub. Family rooms, suites, standard rooms."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://falcon-spanish.com/rooms" />
</svelte:head>

<!-- Page header -->
<section class="relative overflow-hidden bg-resort-dark py-24 text-white">
	<enhanced:img
		src="$lib/assets/images/room-placeholder.jpg"
		alt="Motel room at Falcon Resort, Osoyoos BC"
		class="absolute inset-0 h-full w-full object-cover opacity-25"
	/>
	<div class="relative mx-auto max-w-4xl px-6 text-center">
		<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-sand">
			Accommodations
		</p>
		<h1 class="font-serif text-5xl font-bold">Osoyoos Motel Rooms &amp; Amenities</h1>
		<p class="mt-4 font-sans text-lg text-white/75">
			Clean, comfortable rooms steps from Osoyoos Lake — at both properties.
		</p>
	</div>
</section>

<!-- Room cards -->
<section class="mx-auto max-w-6xl px-6 py-20">
	<div class="mb-12 text-center">
		<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-green">
			Accommodations
		</p>
		<h2 class="font-serif text-4xl font-bold text-resort-dark">Find your room.</h2>
		<p class="mx-auto mt-3 max-w-xl font-sans text-resort-dark/65">
			Both resorts offer the same quality and amenities. We'll place you in whichever property has
			availability — or your preferred one.
		</p>
	</div>

	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each rooms as room}
			<Card class="group flex flex-col overflow-hidden border-resort-sand/30">
				<div class="relative overflow-hidden">
					<enhanced:img
						src="$lib/assets/images/room-placeholder.jpg"
						alt="{room.name} at Falcon Resort and Spanish Fiesta Resort, Osoyoos BC"
						class="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
					/>
				</div>
				<CardHeader class="pb-2">
					<CardTitle class="font-serif text-xl text-resort-dark">{room.name}</CardTitle>
					<CardDescription class="font-sans text-resort-dark/65">{room.description}</CardDescription>
				</CardHeader>
				<CardContent class="flex-1">
					<div class="flex flex-wrap gap-1.5">
						{#each room.features as f}
							<Badge
								variant="outline"
								class="border-resort-green/30 font-sans text-xs text-resort-green"
							>
								{f}
							</Badge>
						{/each}
					</div>
				</CardContent>
			</Card>
		{/each}
	</div>

	<p class="mt-8 text-center font-sans text-sm text-resort-dark/50">
		Room types and availability may vary between properties — call us and we'll find the right fit.
	</p>
</section>

<!-- Amenities grid -->
<section class="bg-resort-green/8 py-16">
	<div class="mx-auto max-w-5xl px-6">
		<div class="mb-10 text-center">
			<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-green">
				Included
			</p>
			<h2 class="font-serif text-4xl font-bold text-resort-dark">Everything you need.</h2>
		</div>
		<div class="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
			{#each amenities as item}
				<Card class="border-resort-sand/30">
					<CardHeader class="pb-2">
						<CardTitle class="font-sans text-base font-semibold text-resort-dark">
							{item.title}
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p class="font-sans text-sm leading-relaxed text-resort-dark/65">{item.body}</p>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
</section>

<!-- Booking section -->
<section class="border-t border-resort-sand/30 py-16">
	<div class="mx-auto max-w-4xl px-6">
		<div class="mb-10 text-center">
			<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-green">
				Book Your Stay
			</p>
			<h2 class="font-serif text-4xl font-bold text-resort-dark">Ready to reserve?</h2>
			<p class="mx-auto mt-3 max-w-xl font-sans text-resort-dark/65">
				Call us directly and we'll find you the best available room across both properties — or book
				online through your preferred platform.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2">
			{#each propertyList as property}
				<div class="rounded-2xl border border-resort-sand/40 bg-white p-6">
					<p class="mb-1 font-sans text-xs font-semibold uppercase tracking-widest text-resort-green">
						{property.name}
					</p>
					<a
						href="tel:{property.phone.tel}"
						class="font-serif text-2xl font-bold text-resort-dark transition-colors hover:text-resort-brown"
					>
						{property.phone.display}
					</a>
					<p class="mt-1 font-sans text-sm text-resort-dark/50">{property.address.full}</p>

					{#if property.booking.bookingCom || property.booking.expedia}
						<div class="mt-4 border-t border-resort-sand/30 pt-4">
							<p class="mb-3 font-sans text-xs font-semibold text-resort-dark/50">Book online:</p>
							<BookingLinks {property} />
						</div>
					{/if}
				</div>
			{/each}
		</div>

		{#if !hasAnyOta}
			<p class="mt-6 text-center font-sans text-sm text-resort-dark/45">
				Online booking via Booking.com and Expedia coming soon. Call to reserve.
			</p>
		{/if}
	</div>
</section>
