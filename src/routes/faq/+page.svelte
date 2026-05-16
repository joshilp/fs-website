<script lang="ts">
	import { Accordion } from 'bits-ui';
	import { ChevronDown } from 'lucide-svelte';
	import { faq, buildFaqSchema } from '$lib/data/faq.js';
	import { properties } from '$lib/config.js';

	const schema = buildFaqSchema();
</script>

<svelte:head>
	<title>Frequently Asked Questions | Falcon Resort &amp; Spanish Fiesta Resort, Osoyoos BC</title>
	<meta
		name="description"
		content="Answers to common questions about staying at Falcon Resort and Spanish Fiesta Resort in Osoyoos, BC — check-in times, beach access, pools, pets, cancellation, and more."
	/>
	<meta property="og:title" content="FAQ | Falcon & Spanish Fiesta Resorts" />
	<meta
		property="og:description"
		content="Common questions about our Osoyoos lakeside motels — check-in, beach, pools, pets, parking, and more."
	/>
	<meta property="og:url" content="https://falcon-spanish.com/faq" />
	{@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>

<!-- Page header -->
<section class="pt-10 pb-6 text-center">
	<div class="mx-auto max-w-2xl px-6">
		<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-green">
			Help
		</p>
		<h1 class="font-serif text-5xl font-bold text-resort-dark">Frequently Asked Questions</h1>
		<p class="mt-4 font-sans text-lg text-resort-dark/65">
			Everything you need to know before your stay in Osoyoos.
		</p>
	</div>
</section>

<!-- FAQ accordion -->
<section class="mx-auto max-w-3xl px-6 py-20">
	<Accordion.Root type="single" collapsible class="divide-y divide-resort-sand/30">
		{#each faq as item, i}
			<Accordion.Item value="faq-{i}" class="py-1">
				<Accordion.Header>
					<Accordion.Trigger
						class="flex w-full items-start justify-between gap-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-resort-green/50 focus-visible:ring-offset-2"
					>
						<span class="font-sans text-base font-semibold text-resort-dark">{item.question}</span>
						<ChevronDown
							class="mt-0.5 h-5 w-5 shrink-0 text-resort-green transition-transform duration-200 group-data-[state=open]:rotate-180"
							aria-hidden="true"
						/>
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content
					class="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
				>
					<p class="pb-5 font-sans text-base leading-relaxed text-resort-dark/65">
						{item.answer}
					</p>
				</Accordion.Content>
			</Accordion.Item>
		{/each}
	</Accordion.Root>
</section>

<!-- Still have questions -->
<section class="bg-resort-green/8 py-16">
	<div class="mx-auto max-w-2xl px-6 text-center">
		<h2 class="font-serif text-3xl font-bold text-resort-dark">Still have a question?</h2>
		<p class="mt-3 font-sans text-resort-dark/65">
			Call either property directly — we're happy to help.
		</p>
		<div class="mt-8 flex flex-wrap justify-center gap-4">
			<a
				href="tel:{properties.falcon.phone.tel}"
				class="inline-flex h-11 items-center rounded-sm border border-resort-green/30 bg-white px-6 font-sans text-sm font-semibold text-resort-dark transition-colors hover:border-resort-green hover:text-resort-green"
			>
				Falcon: {properties.falcon.phone.display}
			</a>
			<a
				href="tel:{properties.spanish.phone.tel}"
				class="inline-flex h-11 items-center rounded-sm border border-resort-red/30 bg-white px-6 font-sans text-sm font-semibold text-resort-dark transition-colors hover:border-resort-red hover:text-resort-red"
			>
				Spanish Fiesta: {properties.spanish.phone.display}
			</a>
		</div>
	</div>
</section>
