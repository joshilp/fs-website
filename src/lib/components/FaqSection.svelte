<script lang="ts">
	import { Accordion } from 'bits-ui';
	import { ChevronDown } from 'lucide-svelte';
	import { faqBase, type FaqItem } from '$lib/data/faq.js';

	interface Props {
		/**
		 * Override the base question pool. Defaults to faqBase (property-agnostic).
		 * Pass the full `faq` array only when you want shared/both-property language.
		 */
		baseItems?: FaqItem[];
		/** Maximum number of base questions to show (default: 6) */
		limit?: number;
		/** Property-specific questions shown above the base ones */
		extraItems?: FaqItem[];
		/** If set, a "View all questions" link is shown pointing here */
		viewAllHref?: string;
		/** Heading eyebrow label */
		eyebrow?: string;
		/** Section heading */
		heading?: string;
		/** Accent color token — tailwind text/border class suffix, e.g. 'resort-green' */
		accent?: string;
		/**
		 * Optional background image shown at low opacity behind the section.
		 * Replace the file to change the photo — no code changes needed.
		 */
		bgImage?: string;
	}

	let {
		baseItems = faqBase,
		limit = 6,
		extraItems = [],
		viewAllHref,
		eyebrow = 'FAQ',
		heading = 'Common questions.',
		accent = 'resort-green',
		bgImage
	}: Props = $props();

	const resolvedBase = $derived(baseItems.slice(0, limit));
	const items = $derived([...extraItems, ...resolvedBase]);
</script>

<section class="relative overflow-hidden border-y border-resort-sand/20 bg-gray-50 py-20">
	{#if bgImage}
		<img src={bgImage} alt="" aria-hidden="true" class="absolute inset-0 h-full w-full object-cover opacity-[0.07]" />
	{/if}
	<div class="relative z-10 mx-auto max-w-3xl px-6">
		<!-- Section header -->
		<div class="mb-10 text-center">
			<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-{accent}">
				{eyebrow}
			</p>
			<h2 class="font-serif text-4xl font-bold text-resort-dark">{heading}</h2>
		</div>

		<!-- Accordion -->
		<Accordion.Root type="single" collapsible class="divide-y divide-resort-sand/30">
			{#each items as item, i}
				<Accordion.Item value="faq-{i}" class="py-1">
					<Accordion.Header>
						<Accordion.Trigger
							class="flex w-full items-start justify-between gap-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-resort-green/50 focus-visible:ring-offset-2"
						>
							<span class="font-sans text-base font-semibold text-resort-dark">{item.question}</span>
							<ChevronDown
								class="mt-0.5 h-5 w-5 shrink-0 text-{accent} transition-transform duration-200 group-data-[state=open]:rotate-180"
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

		<!-- Link to full FAQ page -->
		{#if viewAllHref}
			<div class="mt-10 text-center">
				<a
					href={viewAllHref}
					class="font-sans text-sm font-semibold text-{accent} underline-offset-4 hover:underline"
				>
					View all questions →
				</a>
			</div>
		{/if}
	</div>
</section>
