<script lang="ts">
	import { faq, buildFaqSchema } from '$lib/data/faq.js';
	import { properties } from '$lib/config.js';

	const schema = buildFaqSchema();

	let openIdx = $state<number | null>(null);

	function toggle(i: number) {
		openIdx = openIdx === i ? null : i;
	}
</script>

<svelte:head>
	<title>Frequently Asked Questions | Falcon &amp; Spanish Fiesta Resorts, Osoyoos BC</title>
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
<section class="bg-resort-dark py-24 text-center text-white">
	<div class="mx-auto max-w-2xl px-6">
		<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-sand">
			Help
		</p>
		<h1 class="font-serif text-5xl font-bold">Frequently Asked Questions</h1>
		<p class="mt-4 font-sans text-lg text-white/70">
			Everything you need to know before your stay in Osoyoos.
		</p>
	</div>
</section>

<!-- FAQ accordion -->
<section class="mx-auto max-w-3xl px-6 py-20">
	<div class="divide-y divide-resort-sand/30">
		{#each faq as item, i}
			<div class="py-1">
				<button
					class="flex w-full items-start justify-between gap-6 py-5 text-left"
					onclick={() => toggle(i)}
					aria-expanded={openIdx === i}
				>
					<span class="font-sans text-base font-semibold text-resort-dark">{item.question}</span>
					<span
						class="mt-0.5 shrink-0 text-resort-green transition-transform duration-200 {openIdx === i
							? 'rotate-45'
							: ''}"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M12 4v16m8-8H4"
							/>
						</svg>
					</span>
				</button>
				{#if openIdx === i}
					<p class="pb-5 font-sans text-base leading-relaxed text-resort-dark/65">
						{item.answer}
					</p>
				{/if}
			</div>
		{/each}
	</div>
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
				class="inline-flex h-11 items-center rounded-sm border border-resort-green/30 bg-white px-6 font-sans text-sm font-semibold text-resort-dark transition-colors hover:border-resort-green hover:text-resort-green"
			>
				Spanish Fiesta: {properties.spanish.phone.display}
			</a>
		</div>
	</div>
</section>
