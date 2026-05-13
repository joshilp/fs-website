<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { propertyList } from '$lib/config.js';
</script>

<svelte:head>
	<title>Motel Rooms in Osoyoos BC | Falcon Resort &amp; Spanish Fiesta Resort</title>
	<meta
		name="description"
		content="Compare rooms at Falcon Resort and Spanish Fiesta Resort in Osoyoos, BC. Family rooms, kitchen rooms, and queen rooms — all air-conditioned, steps from the beach and pools."
	/>
	<meta property="og:title" content="Motel Rooms in Osoyoos BC | Falcon Resort & Spanish Fiesta Resort" />
	<meta
		property="og:description"
		content="Rooms at two adjacent lakeside motels in Osoyoos BC. Family rooms, kitchen rooms, queen rooms. Private beach, 2 pools, hot tub."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://falcon-spanish.com/rooms" />
</svelte:head>

<!-- Page header -->
<section class="relative overflow-hidden bg-resort-dark py-24 text-white">
	<enhanced:img
		src="$lib/assets/images/room-placeholder.jpg"
		alt="Motel rooms at Falcon Resort and Spanish Fiesta Resort, Osoyoos BC"
		class="absolute inset-0 h-full w-full object-cover opacity-20"
	/>
	<div class="relative mx-auto max-w-4xl px-6 text-center">
		<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-sand">
			Accommodations
		</p>
		<h1 class="font-serif text-5xl font-bold">Osoyoos Motel Rooms</h1>
		<p class="mt-4 font-sans text-lg text-white/75">
			Two adjacent properties, each with their own rooms and character. Call us to find the best
			fit.
		</p>
	</div>
</section>

<!-- Both properties -->
{#each propertyList as p}
	<section class="border-b border-resort-sand/20 py-20">
		<div class="mx-auto max-w-6xl px-6">
			<!-- Property heading -->
			<div class="mb-10 flex flex-wrap items-end justify-between gap-4">
				<div>
					<p
						class="mb-2 font-sans text-xs font-semibold uppercase tracking-widest
						{p.id === 'falcon' ? 'text-resort-green' : 'text-resort-brown'}"
					>
						{p.address.street}
					</p>
					<h2 class="font-serif text-3xl font-bold text-resort-dark">{p.name}</h2>
					<a
						href="tel:{p.phone.tel}"
						class="mt-1 font-sans text-sm text-resort-dark/60 transition-colors hover:text-resort-dark"
					>
						{p.phone.display}
					</a>
				</div>
				<Button
					href="/{p.id}/rooms"
					class="{p.id === 'falcon'
						? 'bg-resort-green hover:bg-resort-green/85'
						: 'bg-resort-brown hover:bg-resort-brown/85'} text-white"
				>
					View {p.name} Rooms →
				</Button>
			</div>

			<!-- Room grid -->
			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{#each p.rooms as room}
					<div class="rounded-xl border border-resort-sand/30 bg-white p-5">
						<div
							class="mb-3 flex h-8 w-8 items-center justify-center rounded-full font-sans text-sm font-bold text-white
							{p.id === 'falcon' ? 'bg-resort-green' : 'bg-resort-brown'}"
						>
							{room.letter}
						</div>
						<h3 class="font-serif text-base font-bold text-resort-dark">{room.name}</h3>
						<p class="mt-1.5 font-sans text-xs leading-relaxed text-resort-dark/60">
							{room.description}
						</p>
						<div class="mt-3 flex flex-wrap gap-1.5">
							{#each room.features as f}
								<Badge
									variant="outline"
									class="font-sans text-xs
									{p.id === 'falcon'
										? 'border-resort-green/30 text-resort-green'
										: 'border-resort-brown/30 text-resort-brown'}"
								>
									{f}
								</Badge>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
{/each}

<!-- Book CTA -->
<section class="py-16 text-center">
	<div class="mx-auto max-w-xl px-6">
		<h2 class="font-serif text-3xl font-bold text-resort-dark">Not sure which property?</h2>
		<p class="mt-3 font-sans text-resort-dark/65">
			Call either number — both properties are managed together and we'll find the best available
			room across both.
		</p>
		<div class="mt-8 flex flex-wrap justify-center gap-4">
			{#each propertyList as p}
				<a
					href="tel:{p.phone.tel}"
					class="inline-flex h-12 items-center gap-2 rounded-lg border px-6 font-sans font-semibold transition-colors
					{p.id === 'falcon'
						? 'border-resort-green bg-resort-green text-white hover:bg-resort-green/85'
						: 'border-resort-brown bg-resort-brown text-white hover:bg-resort-brown/85'}"
				>
					{p.name}: {p.phone.display}
				</a>
			{/each}
		</div>
	</div>
</section>
