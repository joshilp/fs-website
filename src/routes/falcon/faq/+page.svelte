<script lang="ts">
	import { Accordion } from 'bits-ui';
	import { ChevronDown } from 'lucide-svelte';
	import { faqBase, propertyFaq } from '$lib/data/faq.js';
	import { properties } from '$lib/config.js';

	const p = properties.falcon;
	const allItems = [...propertyFaq.falcon, ...faqBase];
</script>

<svelte:head>
	<title>FAQ | Falcon Resort Osoyoos BC</title>
	<meta
		name="description"
		content="Answers to common questions about staying at Falcon Resort in Osoyoos, BC — check-in times, beach access, pool, pets, cancellation, and more."
	/>
	<meta property="og:title" content="FAQ | Falcon Resort Osoyoos BC" />
	<meta
		property="og:description"
		content="Common questions about Falcon Resort in Osoyoos — check-in, beach, pool, pets, parking, and more."
	/>
	<meta property="og:url" content="https://falcon-spanish.com/falcon/faq" />
</svelte:head>

<!-- Page header -->
<section class="pt-10 pb-6 text-center">
	<div class="mx-auto max-w-2xl px-6">
		<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-stone">
			Falcon Resort · Help
		</p>
		<h1 class="font-serif text-5xl font-bold text-resort-dark">Frequently Asked Questions</h1>
		<p class="mt-4 font-sans text-lg text-resort-dark/65">
			Everything you need to know before your stay at Falcon Resort.
		</p>
	</div>
</section>

<!-- FAQ accordion -->
<section class="mx-auto max-w-3xl px-6 py-20">
	<Accordion.Root type="single" collapsible class="divide-y divide-resort-sand/30">
		{#each allItems as item, i}
			<Accordion.Item value="faq-{i}" class="py-1">
				<Accordion.Header>
					<Accordion.Trigger
						class="flex w-full items-start justify-between gap-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-resort-stone/50 focus-visible:ring-offset-2"
					>
						<span class="font-sans text-base font-semibold text-resort-dark">{item.question}</span>
						<ChevronDown
							class="mt-0.5 h-5 w-5 shrink-0 text-resort-stone transition-transform duration-200 group-data-[state=open]:rotate-180"
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
<section class="bg-resort-stone/8 py-16">
	<div class="mx-auto max-w-2xl px-6 text-center">
		<h2 class="font-serif text-3xl font-bold text-resort-dark">Still have a question?</h2>
		<p class="mt-3 font-sans text-resort-dark/65">
			Call us directly — we're happy to help.
		</p>
		<div class="mt-8 flex flex-wrap justify-center gap-4">
			<a
				href="tel:{p.phone.tel}"
				class="inline-flex h-11 items-center rounded-sm border border-resort-stone/30 bg-white px-6 font-sans text-sm font-semibold text-resort-dark transition-colors hover:border-resort-stone hover:text-resort-stone"
			>
				Falcon Resort: {p.phone.display}
			</a>
			<a
				href="/falcon/contact"
				class="inline-flex h-11 items-center rounded-sm border border-resort-sand/40 bg-white px-6 font-sans text-sm font-semibold text-resort-dark/65 transition-colors hover:border-resort-stone hover:text-resort-dark"
			>
				View contact info →
			</a>
		</div>
	</div>
</section>
