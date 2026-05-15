<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { properties, site } from '$lib/config.js';
</script>

<svelte:head>
	<title>Osoyoos BC Location &amp; Things To Do | Falcon Resort &amp; Spanish Fiesta Resort</title>
	<meta
		name="description"
		content="Falcon Resort and Spanish Fiesta Resort are on Main Street in Osoyoos, BC — steps from Osoyoos Lake. Gateway to Okanagan wine country, 200+ sunshine days, Canada's warmest freshwater lake."
	/>
	<meta
		property="og:title"
		content="Osoyoos BC Location & Things To Do | Falcon Resort & Spanish Fiesta Resort"
	/>
	<meta
		property="og:description"
		content="Right on Main Street in Osoyoos, BC — steps from the warmest freshwater lake in Canada, Okanagan wineries, and the Nk'Mip Desert."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://falcon-spanish.com/location" />
</svelte:head>

<!-- Page header -->
<section class="pt-16 pb-10 text-center">
	<div class="mx-auto max-w-3xl px-6">
		<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-green">
			Osoyoos, BC
		</p>
		<h1 class="font-serif text-5xl font-bold text-resort-dark">Osoyoos, BC — the destination itself.</h1>
		<p class="mt-4 font-sans text-lg text-resort-dark/65">
			Osoyoos isn't just where our motels are — it's why people come.
		</p>
	</div>
</section>

<!-- About Osoyoos -->
<section class="mx-auto max-w-5xl px-6 py-20">
	<div class="grid gap-12 md:grid-cols-2">
		<div>
			<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-green">
				About Osoyoos
			</p>
			<h2 class="font-serif text-4xl font-bold leading-tight text-resort-dark">
				Canada's warmest,<br />sunniest valley.
			</h2>
			<p class="mt-5 font-sans leading-relaxed text-resort-dark/70">
				Osoyoos sits in the southern tip of the Okanagan Valley — Canada's only pocket desert, where
				the Sonoran Desert reaches its northernmost point. The result is a unique landscape of
				sandy beaches, vineyard hills, and hot, dry summers that average over 200 sunshine days a
				year.
			</p>
			<p class="mt-4 font-sans leading-relaxed text-resort-dark/70">
				Osoyoos Lake is the warmest freshwater lake in Canada, making it perfect for swimming,
				paddleboarding, and watersports from May through September. Our resorts are right on the
				lakeshore, on Main Street in the heart of town.
			</p>
		</div>
		<div class="space-y-5">
			{#each [
				{ stat: '200+', label: 'Sunshine days per year' },
				{ stat: '24°C', label: 'Average summer lake temperature' },
				{ stat: '#1', label: 'Warmest freshwater lake in Canada' },
				{ stat: '30+', label: 'Wineries within 30 minutes' }
			] as s}
				<div class="flex items-center gap-5 border-b border-resort-sand/30 pb-5">
					<span class="font-serif text-4xl font-bold text-resort-brown">{s.stat}</span>
					<span class="font-sans text-resort-dark/70">{s.label}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Things to do -->
<section class="bg-resort-green/8 py-16">
	<div class="mx-auto max-w-5xl px-6">
		<div class="mb-10 text-center">
			<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-green">
				Activities
			</p>
			<h2 class="font-serif text-4xl font-bold text-resort-dark">Things to do.</h2>
		</div>
		<div class="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
			{#each [
				{
					title: 'Swimming & Beach',
					body: 'Our private sandy beach has a long, shallow entry — safe for kids and perfect for wading out hundreds of feet in warm water.'
				},
				{
					title: 'Wine Country',
					body: 'The South Okanagan is home to some of Canada\'s best wineries. Dozens are within a short drive of our doorstep.'
				},
				{
					title: 'Nk\'Mip Desert',
					body: 'Visit the Nk\'Mip Desert Cultural Centre and explore Canada\'s unique northern desert ecosystem — just minutes away.'
				},
				{
					title: 'Watersports',
					body: 'Kayaking, paddleboarding, boating, and fishing — Osoyoos Lake has it all. Rentals are available nearby.'
				},
				{
					title: 'Cycling & Hiking',
					body: 'The South Okanagan has world-class trails through vineyards, desert terrain, and along the lakeshore.'
				},
				{
					title: 'Dining & Shopping',
					body: 'We\'re right on Main Street. Restaurants, cafés, shops, and the Saturday Farmer\'s Market are all within walking distance.'
				}
			] as item}
				<div class="rounded-sm border border-resort-sand/30 bg-white p-6">
					<h3 class="font-sans font-semibold text-resort-dark">{item.title}</h3>
					<p class="mt-2 font-sans text-sm leading-relaxed text-resort-dark/65">{item.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Map -->
<section class="mx-auto max-w-6xl px-6 py-16">
	<div class="mb-8 text-center">
		<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-green">
			Find Us
		</p>
		<h2 class="font-serif text-3xl font-bold text-resort-dark">Right on Main Street.</h2>
		<div class="mt-2 flex flex-wrap justify-center gap-x-6 gap-y-1">
			{#each [properties.spanish, properties.falcon] as p}
				<p class="font-sans text-sm text-resort-dark/60">
					<span class="font-medium text-resort-dark">{p.name}:</span>
					{p.address.street}, {p.address.city}, {p.address.province}
				</p>
			{/each}
		</div>
	</div>
	<div class="overflow-hidden rounded-sm border border-resort-sand/30">
		<iframe
			title="Osoyoos resort location"
			src={site.mapEmbedUrl}
			class="h-96 w-full border-0"
			allowfullscreen
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe>
	</div>
	<div class="mt-6 grid gap-4 text-center sm:grid-cols-2">
		<div>
			<p class="font-sans font-semibold text-resort-dark">From Kelowna</p>
			<p class="mt-1 font-sans text-sm text-resort-dark/60">~1.5 hours south on Hwy 97</p>
		</div>
		<div>
			<p class="font-sans font-semibold text-resort-dark">From Vancouver</p>
			<p class="mt-1 font-sans text-sm text-resort-dark/60">~4 hours east via Hwy 3 or Hwy 5</p>
		</div>
	</div>
</section>
