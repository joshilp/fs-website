<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { propertyList } from '$lib/config.js';
	import { getProducts, type PropertyId } from '$lib/data/products.js';
	import falconLogoColor from '$lib/assets/falcon-logo-color-tight.png';
	import spanishLogoColor from '$lib/assets/spanish-logo-color-tight.png';

	const logoMap: Record<string, string> = {
		falcon: falconLogoColor,
		spanish: spanishLogoColor
	};
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
<section class="pt-10 pb-6 text-center">
	<div class="mx-auto max-w-4xl px-6">
		<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-green">
			Accommodations
		</p>
		<h1 class="font-serif text-5xl font-bold text-resort-dark">Osoyoos Motel Rooms</h1>
		<p class="mt-4 font-sans text-lg text-resort-dark/65">
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
			<div class="mb-10">
				<!-- Logo as section identity -->
				<a href="/{p.id}" class="mb-5 inline-block transition-opacity hover:opacity-80">
					<img
						src={logoMap[p.id]}
						alt={p.name}
						height="52"
						width="200"
						class="h-13 w-auto object-contain"
					/>
				</a>
				<!-- Address + phone / CTA row -->
				<div class="flex flex-wrap items-center justify-between gap-4">
					<div>
						<p
							class="mb-0.5 font-sans text-xs font-semibold uppercase tracking-widest
							{p.id === 'falcon' ? 'text-resort-green' : 'text-resort-brown'}"
						>
							{p.address.street}
						</p>
						<a
							href="tel:{p.phone.tel}"
							class="font-sans text-sm text-resort-dark/60 transition-colors hover:text-resort-dark"
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
						View Rooms →
					</Button>
				</div>
			</div>

			<!-- Room grid -->
			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{#each getProducts(p.id as PropertyId).slice(0, 4) as product}
					<div class="rounded-xl border border-resort-sand/30 bg-white p-5">
						<h3 class="font-serif text-base font-bold text-resort-dark">{product.name}</h3>
						<p class="mt-1.5 font-sans text-xs leading-relaxed text-resort-dark/60">
							{product.description.short}
						</p>
						<div class="mt-3 flex flex-wrap gap-1.5">
							{#each product.features as f}
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
