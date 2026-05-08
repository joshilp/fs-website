<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { properties } from '$lib/config.js';

	const { falcon, spanish } = properties;
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card/index.js';

	const rooms = [
		{
			name: 'Standard Room',
			desc: 'A comfortable, well-appointed room with two queen beds, air conditioning, and all the essentials for a great stay.',
			features: ['2 Queen Beds', 'Air Conditioning', 'Private Bathroom', 'Mini Fridge', 'TV']
		},
		{
			name: 'Studio Suite',
			desc: 'A spacious room with a kitchenette area — ideal for longer stays or families who want the convenience of cooking.',
			features: ['Queen Bed', 'Kitchenette', 'Air Conditioning', 'Sitting Area', 'TV']
		},
		{
			name: 'Family Room',
			desc: 'Extra space for the whole family, with multiple beds and easy access to the pools and beach area.',
			features: ['Multiple Beds', 'Air Conditioning', 'Private Bathroom', 'Beach Views', 'TV']
		}
	];

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
					<CardDescription class="font-sans text-resort-dark/65">{room.desc}</CardDescription>
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
				<CardFooter>
					<Button
						href="/contact"
						class="w-full bg-resort-brown text-white hover:bg-resort-brown/85"
					>
						Book This Room
					</Button>
				</CardFooter>
			</Card>
		{/each}
	</div>

	<p class="mt-8 text-center font-sans text-sm text-resort-dark/50">
		Room types and availability may vary. Call us for details:
		<a href="tel:{falcon.phone.tel}" class="hover:text-resort-dark transition-colors"
			>Falcon Resort {falcon.phone.display}</a
		>
		&nbsp;|&nbsp;
		<a href="tel:{spanish.phone.tel}" class="hover:text-resort-dark transition-colors"
			>Spanish Fiesta Resort {spanish.phone.display}</a
		>
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

<!-- CTA -->
<section class="py-16 text-center">
	<div class="mx-auto max-w-xl px-6">
		<h2 class="font-serif text-3xl font-bold text-resort-dark">Ready to reserve?</h2>
		<p class="mt-3 font-sans text-resort-dark/65">
			Call or book online — we're happy to help find the right room for your group.
		</p>
		<Button
			href="/contact"
			size="lg"
			class="mt-6 bg-resort-brown px-8 text-white hover:bg-resort-brown/85"
		>
			Book Now
		</Button>
	</div>
</section>
