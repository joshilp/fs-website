<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { properties } from '$lib/config.js';
	import { getProductsByCategory } from '$lib/data/products.js';
	import BookingLinks from '$lib/components/BookingLinks.svelte';

	const p = properties.falcon;
	const categories = getProductsByCategory('falcon');
</script>

<svelte:head>
	<title>Falcon Resort Rooms | Osoyoos BC Motel Rooms &amp; Suites</title>
	<meta
		name="description"
		content="Falcon Resort motel rooms in Osoyoos BC. Retro suites, beachside studios, and beachfront suites — all air-conditioned, steps from the beach and pool. Call (250) 495-7544 to book."
	/>
	<meta property="og:title" content="Falcon Resort Rooms | Osoyoos BC Motel Rooms & Suites" />
	<meta
		property="og:description"
		content="Falcon Resort motel rooms in Osoyoos BC. Retro suites, beachside studios, beachfront suites. Steps from the beach and pool. Call (250) 495-7544."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://falcon-spanish.com/falcon/rooms" />
</svelte:head>

<!-- Page header -->
<section class="pt-10 pb-6 text-center">
	<div class="mx-auto max-w-4xl px-6">
		<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-stone">
			Falcon Resort
		</p>
		<h1 class="font-serif text-5xl font-bold text-resort-dark">Rooms &amp; Accommodations</h1>
		<p class="mt-4 font-sans text-lg text-resort-dark/65">
			Clean, air-conditioned rooms steps from the pool and Osoyoos Lake beach.
		</p>
		<a
			href="tel:{p.phone.tel}"
			class="mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-resort-stone px-8 font-sans font-bold text-white transition-opacity hover:opacity-90"
		>
			Call to Book — {p.phone.display}
		</a>
	</div>
</section>

<!-- Product cards grouped by category -->
<section class="mx-auto max-w-6xl px-6 py-20">
	<div class="mb-12 text-center">
		<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-stone">
			Accommodations
		</p>
		<h2 class="font-serif text-4xl font-bold text-resort-dark">Choose your room.</h2>
		<p class="mx-auto mt-3 max-w-xl font-sans text-resort-dark/65">
			Call us and we'll match you to the best available room for your group and budget.
		</p>
	</div>

	<div class="space-y-16">
		{#each categories as group}
			<div>
				<h3 class="mb-8 font-serif text-2xl font-bold text-resort-dark">{group.categoryLabel}</h3>
				<div class="grid gap-8 md:grid-cols-2">
					{#each group.products as product}
						<div class="flex flex-col overflow-hidden rounded-xl border border-resort-sand/30 bg-white">
							<div class="relative overflow-hidden">
								{#if product.coverImage}
									<img
										src={product.coverImage}
										alt="{product.name} at Falcon Resort, Osoyoos BC"
										width="600"
										height="400"
										class="h-56 w-full object-cover"
										loading="lazy"
										decoding="async"
									/>
								{/if}
							</div>
							<div class="flex flex-1 flex-col p-6">
								<h4 class="font-serif text-xl font-bold text-resort-dark">{product.name}</h4>
								<p class="mt-2 flex-1 font-sans text-sm leading-relaxed text-resort-dark/65">
									{product.description.website}
								</p>
								<div class="mt-4 flex flex-wrap gap-1.5">
									{#each product.features as f}
										<Badge
											variant="outline"
											class="border-resort-stone/30 font-sans text-xs text-resort-stone"
										>
											{f}
										</Badge>
									{/each}
								</div>
								<div class="mt-5 flex flex-wrap gap-3">
									<a
										href="tel:{p.phone.tel}"
										class="inline-flex h-9 items-center rounded-lg bg-resort-stone px-4 font-sans text-sm font-semibold text-white transition-opacity hover:opacity-90"
									>
										Call to Book
									</a>
									{#if product.booking.onres}
										<a
											href={product.booking.onres}
											target="_blank"
											rel="noopener noreferrer"
											class="inline-flex h-9 items-center rounded-lg border border-resort-stone px-4 font-sans text-sm font-semibold text-resort-stone transition-colors hover:bg-resort-stone/5"
										>
											Book Online
										</a>
									{/if}
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- Amenities -->
<section class="bg-resort-stone/8 py-16">
	<div class="mx-auto max-w-5xl px-6">
		<div class="mb-10 text-center">
			<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-stone">
				Included
			</p>
			<h2 class="font-serif text-4xl font-bold text-resort-dark">Everything you need.</h2>
		</div>
		<div class="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
			{#each [
				{
					title: 'Private Sandy Beach',
					body: 'Step right out to our safe, shallow sandy beach on Osoyoos Lake. Walk 500 feet and still touch the sandy bottom.'
				},
				{
					title: '2 Outdoor Pools & Hot Tub',
					body: 'Falcon and Spanish Fiesta share connected grounds — guests have full access to both outdoor pools and the hot tub across the property.'
				},
				{
					title: 'BBQ & Picnic Area',
					body: 'Fire up the BBQ and enjoy an al fresco dinner on the grounds. Picnic tables available for guests.'
				},
				{
					title: 'Air Conditioning',
					body: 'Every room is fully air conditioned — essential for Osoyoos summers, which regularly top 38°C.'
				},
				{
					title: 'Free Parking',
					body: 'On-site parking included with your stay. No extra charge, no worries.'
				},
				{
					title: 'Prime Location',
					body: 'Right on Main Street in Osoyoos — restaurants, shops, the marina, and the beach are all within easy walking distance.'
				}
			] as item}
				<div class="rounded-xl border border-resort-sand/30 bg-white p-6">
					<h3 class="font-sans text-base font-semibold text-resort-dark">{item.title}</h3>
					<p class="mt-2 font-sans text-sm leading-relaxed text-resort-dark/65">{item.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Book CTA -->
<section class="border-t border-resort-sand/30 py-16">
	<div class="mx-auto max-w-2xl px-6 text-center">
		<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-stone">
			Reservations
		</p>
		<h2 class="font-serif text-4xl font-bold text-resort-dark">Ready to book?</h2>
		<p class="mt-3 font-sans text-resort-dark/65">
			Call us — we'll confirm your dates and room in under 2 minutes.
		</p>
		<a
			href="tel:{p.phone.tel}"
			class="mt-8 inline-flex h-14 items-center gap-3 rounded-lg bg-resort-stone px-10 font-sans text-lg font-bold text-white shadow-lg transition-opacity hover:opacity-90"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5 shrink-0"
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

		{#if p.booking.bookingCom || p.booking.expedia}
			<div class="mt-8 border-t border-resort-sand/30 pt-8">
				<p class="mb-4 font-sans text-sm text-resort-dark/50">Prefer to book online? We're also on:</p>
				<div class="flex justify-center">
					<BookingLinks property={p} />
				</div>
			</div>
		{/if}

		<div class="mt-8">
			<Button
				href="/falcon"
				variant="link"
				class="h-auto p-0 font-sans text-sm font-semibold text-resort-stone hover:text-resort-brown"
			>
				← Back to Falcon Resort
			</Button>
		</div>
	</div>
</section>
