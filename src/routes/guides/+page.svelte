<script lang="ts">
	import { guides } from '$lib/data/guides.js';

	function formatDate(iso: string) {
		return new Date(iso).toLocaleDateString('en-CA', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			timeZone: 'UTC'
		});
	}
</script>

<svelte:head>
	<title>Osoyoos Area Guide | Falcon Resort &amp; Spanish Fiesta Resort, Osoyoos BC</title>
	<meta
		name="description"
		content="Local guides to Osoyoos, BC — things to do, beaches, wineries, family activities, and the best of the South Okanagan from people who live here."
	/>
	<meta property="og:title" content="Osoyoos Area Guide | Falcon & Spanish Fiesta Resorts" />
	<meta
		property="og:description"
		content="Things to do in Osoyoos BC — beaches, wineries, family activities, and more from the South Okanagan."
	/>
	<meta property="og:url" content="https://falcon-spanish.com/guides" />
</svelte:head>

<!-- Page header -->
<section class="bg-resort-dark py-24 text-center text-white">
	<div class="mx-auto max-w-2xl px-6">
		<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-sand">
			Osoyoos, BC
		</p>
		<h1 class="font-serif text-5xl font-bold">Area Guide</h1>
		<p class="mt-4 font-sans text-lg text-white/70">
			Local knowledge on things to do, places to eat, and the best of the South Okanagan.
		</p>
	</div>
</section>

<!-- Guide cards -->
<section class="mx-auto max-w-5xl px-6 py-20">
	{#if guides.length === 0}
		<p class="text-center font-sans text-resort-dark/50">Guides coming soon — check back shortly.</p>
	{:else}
		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each guides as guide}
				<a
					href="/guides/{guide.slug}"
					class="group flex flex-col rounded-sm border border-resort-sand/30 bg-white transition-shadow hover:shadow-md"
				>
					<div class="flex flex-1 flex-col p-7">
						<div class="mb-3 flex flex-wrap gap-1.5">
							{#each guide.tags as tag}
								<span
									class="rounded-full bg-resort-green/8 px-2.5 py-0.5 font-sans text-xs font-medium text-resort-green"
								>
									{tag}
								</span>
							{/each}
						</div>
						<h2
							class="font-serif text-xl font-bold leading-snug text-resort-dark group-hover:text-resort-green transition-colors"
						>
							{guide.title}
						</h2>
						<p class="mt-3 flex-1 font-sans text-sm leading-relaxed text-resort-dark/60">
							{guide.description}
						</p>
						<div class="mt-5 flex items-center gap-3 font-sans text-xs text-resort-dark/40">
							<span>{formatDate(guide.publishedAt)}</span>
							<span>·</span>
							<span>{guide.readingTimeMinutes} min read</span>
						</div>
					</div>
					<div
						class="border-t border-resort-sand/30 px-7 py-3 font-sans text-xs font-semibold text-resort-green group-hover:text-resort-brown transition-colors"
					>
						Read guide →
					</div>
				</a>
			{/each}
		</div>
	{/if}
</section>
