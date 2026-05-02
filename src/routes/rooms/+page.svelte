<svelte:head>
	<title>Rooms &amp; Amenities — Spanish Fiesta &amp; Falcon Resorts</title>
	<meta
		name="description"
		content="Comfortable, air-conditioned rooms at our two Osoyoos lakeside resorts. Steps from a private sandy beach, two pools, and a hot tub."
	/>
</svelte:head>

<!-- Page header -->
<section class="relative overflow-hidden bg-resort-dark py-24 text-white">
	<enhanced:img
		src="$lib/assets/images/room-placeholder.jpg"
		alt="Resort rooms"
		class="absolute inset-0 h-full w-full object-cover opacity-25"
	/>
	<div class="relative mx-auto max-w-4xl px-6 text-center">
		<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-sand">
			Accommodations
		</p>
		<h1 class="font-serif text-5xl font-bold">Rooms &amp; Amenities</h1>
		<p class="mt-4 font-sans text-lg text-white/75">
			Clean, comfortable rooms steps from the lake — at both properties.
		</p>
	</div>
</section>

<!-- Room types -->
<section class="mx-auto max-w-6xl px-6 py-20">
	<div class="mb-12 text-center">
		<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-teal">
			Accommodations
		</p>
		<h2 class="font-serif text-4xl font-bold text-resort-dark">Find your room.</h2>
		<p class="mx-auto mt-3 max-w-xl font-sans text-resort-dark/65">
			Both resorts offer the same quality and amenities. We'll place you in whichever property has
			availability — or your preferred one.
		</p>
	</div>

	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each [
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
		] as room}
			<div
				class="group flex flex-col overflow-hidden rounded-sm border border-resort-sand/30 bg-white"
			>
				<div class="relative overflow-hidden">
					<enhanced:img
						src="$lib/assets/images/room-placeholder.jpg"
						alt={room.name}
						class="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
					/>
				</div>
				<div class="flex flex-1 flex-col p-6">
					<h3 class="font-serif text-xl font-semibold text-resort-dark">{room.name}</h3>
					<p class="mt-2 font-sans text-sm leading-relaxed text-resort-dark/65">{room.desc}</p>
					<ul class="mt-4 flex flex-wrap gap-2">
						{#each room.features as f}
							<li
								class="rounded-full border border-resort-teal/30 px-3 py-0.5 font-sans text-xs text-resort-teal"
							>
								{f}
							</li>
						{/each}
					</ul>
					<a
						href="/contact"
						class="mt-6 rounded bg-resort-terra px-5 py-2.5 text-center font-sans text-sm font-semibold text-white transition-colors hover:bg-resort-terra/85"
					>
						Book This Room
					</a>
				</div>
			</div>
		{/each}
	</div>

	<p class="mt-8 text-center font-sans text-sm text-resort-dark/50">
		Room types and availability may vary. Call us for details: Falcon (250) 495-7544 &nbsp;|&nbsp;
		Spanish Fiesta (250) 495-6833
	</p>
</section>

<!-- Amenities -->
<section class="bg-resort-teal/8 py-16">
	<div class="mx-auto max-w-5xl px-6">
		<div class="mb-10 text-center">
			<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-teal">
				Included
			</p>
			<h2 class="font-serif text-4xl font-bold text-resort-dark">Everything you need.</h2>
		</div>
		<div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
			{#each [
				{ title: 'Private Sandy Beach', body: 'Step right out to our safe, shallow sandy beach on Osoyoos Lake. Walk 500 feet and still touch the bottom.' },
				{ title: '2 Outdoor Pools', body: 'Two heated outdoor pools — one at each property — so there\'s always a spot in the sun.' },
				{ title: 'Hot Tub', body: 'Wind down in the hot tub after a day on the water or exploring the valley.' },
				{ title: 'BBQ & Picnic Tables', body: 'Each property has a picnic area with tables and barbeques — perfect for al fresco dinners.' },
				{ title: 'Air Conditioning', body: 'Every room is air conditioned. Essential for Osoyoos summers, which regularly top 38°C.' },
				{ title: 'Prime Location', body: 'Right on Main Street in downtown Osoyoos — restaurants, shops, and the marina are all within walking distance.' }
			] as item}
				<div class="rounded-sm border border-resort-sand/30 bg-white p-6">
					<h3 class="font-sans font-semibold text-resort-dark">{item.title}</h3>
					<p class="mt-2 font-sans text-sm leading-relaxed text-resort-dark/65">{item.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Book CTA -->
<section class="py-16 text-center">
	<div class="mx-auto max-w-xl px-6">
		<h2 class="font-serif text-3xl font-bold text-resort-dark">Ready to reserve?</h2>
		<p class="mt-3 font-sans text-resort-dark/65">
			Call or book online — we're happy to help find the right room for your group.
		</p>
		<a
			href="/contact"
			class="mt-6 inline-block rounded bg-resort-terra px-8 py-3.5 font-sans font-semibold text-white transition-colors hover:bg-resort-terra/85"
		>
			Book Now
		</a>
	</div>
</section>
