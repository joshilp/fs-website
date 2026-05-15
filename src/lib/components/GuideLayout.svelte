<script lang="ts">
	import type { Guide } from '$lib/data/guides.js';
	import { site, properties } from '$lib/config.js';

	let { guide, children }: { guide: Guide; children: import('svelte').Snippet } = $props();

	const dateFormatted = $derived(
		new Date(guide.publishedAt).toLocaleDateString('en-CA', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			timeZone: 'UTC'
		})
	);

	const articleSchema = $derived({
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: guide.title,
		description: guide.description,
		datePublished: guide.publishedAt,
		dateModified: guide.updatedAt ?? guide.publishedAt,
		author: { '@type': 'Organization', name: site.name, url: site.url },
		publisher: { '@type': 'Organization', name: site.name, url: site.url },
		url: `${site.url}/guides/${guide.slug}`
	});
</script>

<svelte:head>
	<title>{guide.title} | Falcon Resort &amp; Spanish Fiesta Resort, Osoyoos BC</title>
	<meta name="description" content={guide.description} />
	<meta property="og:title" content={guide.title} />
	<meta property="og:description" content={guide.description} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="{site.url}/guides/{guide.slug}" />
	<meta property="article:published_time" content={guide.publishedAt} />
	{@html `<script type="application/ld+json">${JSON.stringify(articleSchema)}</script>`}
</svelte:head>

<!-- Article header -->
<section class="bg-resort-dark py-20 text-white">
	<div class="mx-auto max-w-3xl px-6">
		<a
			href="/guides"
			class="mb-6 inline-flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-widest text-resort-sand/70 transition-colors hover:text-resort-sand"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-3.5 w-3.5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
			</svg>
			Area Guide
		</a>
		<h1 class="font-serif text-4xl font-bold leading-tight md:text-5xl">{guide.title}</h1>
		<div class="mt-4 flex flex-wrap items-center gap-4 font-sans text-sm text-white/50">
			<span>{dateFormatted}</span>
			<span class="text-white/20">·</span>
			<span>{guide.readingTimeMinutes} min read</span>
			{#if guide.tags.length}
				<span class="text-white/20">·</span>
				<span>{guide.tags.join(', ')}</span>
			{/if}
		</div>
	</div>
</section>

<!-- Article body -->
<article class="mx-auto max-w-3xl px-6 py-16">
	<div
		class="prose prose-lg max-w-none
		prose-headings:font-serif prose-headings:text-resort-dark prose-headings:font-bold
		prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
		prose-h3:text-xl prose-h3:mt-8
		prose-p:font-sans prose-p:text-resort-dark/70 prose-p:leading-relaxed
		prose-a:text-resort-green prose-a:no-underline hover:prose-a:text-resort-brown prose-a:font-medium
		prose-strong:text-resort-dark prose-strong:font-semibold
		prose-ul:text-resort-dark/70 prose-li:font-sans
		prose-hr:border-resort-sand/30"
	>
		{@render children()}
	</div>
</article>

<!-- Bottom CTA -->
<section class="border-t border-resort-sand/30 bg-resort-sand/15 py-14">
	<div class="mx-auto max-w-3xl px-6 text-center">
		<p class="font-sans text-xs font-semibold uppercase tracking-widest text-resort-green">
			Staying in Osoyoos?
		</p>
		<h2 class="mt-2 font-serif text-2xl font-bold text-resort-dark">
			Call us — we'll confirm your room in under 2 minutes.
		</h2>
		<p class="mt-2 font-sans text-sm text-resort-dark/60">
			Two lakeside motels on Main Street, steps from the lake.
		</p>
		<div class="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
			<a
				href="tel:{properties.falcon.phone.tel}"
				class="inline-flex h-11 items-center gap-2 rounded-lg bg-resort-green px-6 font-sans text-sm font-semibold text-white transition-opacity hover:opacity-90"
			>
				Falcon Resort — {properties.falcon.phone.display}
			</a>
			<a
				href="tel:{properties.spanish.phone.tel}"
				class="inline-flex h-11 items-center gap-2 rounded-lg bg-resort-red px-6 font-sans text-sm font-semibold text-white transition-opacity hover:opacity-90"
			>
				Spanish Fiesta — {properties.spanish.phone.display}
			</a>
		</div>
		<div class="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-1">
			<a href="/rooms" class="font-sans text-xs text-resort-dark/40 underline underline-offset-2 hover:text-resort-dark/70">Browse rooms</a>
			<span class="font-sans text-xs text-resort-dark/25">·</span>
			<a href="/contact" class="font-sans text-xs text-resort-dark/40 underline underline-offset-2 hover:text-resort-dark/70">Book online</a>
			<span class="font-sans text-xs text-resort-dark/25">·</span>
			<a href="/location" class="font-sans text-xs text-resort-dark/40 underline underline-offset-2 hover:text-resort-dark/70">Getting here</a>
		</div>
	</div>
</section>
