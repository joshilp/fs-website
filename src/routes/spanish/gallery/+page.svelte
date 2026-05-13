<script lang="ts">
	import gallery1 from '$lib/assets/images/gallery-1.jpg?enhanced';
	import gallery2 from '$lib/assets/images/gallery-2.jpg?enhanced';
	import gallery3 from '$lib/assets/images/gallery-3.jpg?enhanced';
	import gallery4 from '$lib/assets/images/gallery-4.jpg?enhanced';
	import gallery5 from '$lib/assets/images/gallery-5.jpg?enhanced';
	import gallery6 from '$lib/assets/images/gallery-6.jpg?enhanced';
	import { ChevronLeft, ChevronRight, X } from 'lucide-svelte';
	import { properties } from '$lib/config.js';

	const p = properties.spanish;

	const photos = [
		{ src: gallery1, alt: 'Sandy beach on Osoyoos Lake with dock and boats, viewed from Spanish Fiesta Resort' },
		{ src: gallery4, alt: 'Spanish Fiesta Resort exterior building with Okanagan mountains behind, Osoyoos BC' },
		{ src: gallery2, alt: 'Outdoor pool at Spanish Fiesta Resort with Osoyoos Lake and mountains in the background' },
		{ src: gallery3, alt: 'Wide view of Osoyoos Lake beach with boats anchored near shore, South Okanagan BC' },
		{ src: gallery5, alt: 'Resort exterior walkway on a sunny summer day, Osoyoos BC' },
		{ src: gallery6, alt: 'Outdoor pool with blue skies, Osoyoos BC' }
	];

	let lightboxOpen = $state(false);
	let activeIdx = $state(0);

	function openPhoto(idx: number) { activeIdx = idx; lightboxOpen = true; }
	function prev() { activeIdx = (activeIdx - 1 + photos.length) % photos.length; }
	function next() { activeIdx = (activeIdx + 1) % photos.length; }
	function closeLightbox() { lightboxOpen = false; }

	$effect(() => {
		if (!lightboxOpen) return;
		function onKey(e: KeyboardEvent) {
			if (e.key === 'ArrowLeft') prev();
			else if (e.key === 'ArrowRight') next();
			else if (e.key === 'Escape') closeLightbox();
		}
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	});
</script>

<svelte:head>
	<title>Spanish Fiesta Resort Photos | Osoyoos BC — Beach, Pool &amp; Grounds</title>
	<meta
		name="description"
		content="Photos of Spanish Fiesta Resort in Osoyoos, BC — Osoyoos Lake beach, outdoor pool, hot tub, and resort grounds. Lakeside motel on Main Street."
	/>
	<meta property="og:title" content="Spanish Fiesta Resort Photos | Osoyoos BC" />
	<meta property="og:description" content="See the beach, pool, hot tub, and grounds at Spanish Fiesta Resort in Osoyoos, BC." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://falcon-spanish.com/spanish/gallery" />
</svelte:head>

<!-- Header -->
<section class="bg-resort-dark py-24 text-center text-white">
	<div class="mx-auto max-w-2xl px-6">
		<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-sand">
			Spanish Fiesta Resort
		</p>
		<h1 class="font-serif text-5xl font-bold">Photos & Gallery</h1>
		<p class="mt-4 font-sans text-lg text-white/70">
			A look at the beach, pools, hot tub, and grounds — Osoyoos Lake right at your door.
		</p>
	</div>
</section>

<!-- Gallery grid -->
<section class="mx-auto max-w-6xl px-6 py-16">
	<div class="columns-1 gap-3 sm:columns-2 lg:columns-3">
		{#each photos as photo, i}
			<button
				class="group mb-3 block w-full cursor-zoom-in overflow-hidden rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-resort-brown focus-visible:ring-offset-2"
				onclick={() => openPhoto(i)}
				aria-label="View photo: {photo.alt}"
			>
				<div class="relative overflow-hidden">
					<enhanced:img
						src={photo.src}
						alt={photo.alt}
						class="w-full object-cover transition-transform duration-500 group-hover:scale-105"
					/>
					<div class="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
						</svg>
					</div>
				</div>
			</button>
		{/each}
	</div>
	<p class="mt-2 text-center font-sans text-xs text-resort-dark/40">
		Click any photo to enlarge · Use arrow keys or buttons to navigate
	</p>
</section>

<!-- Book CTA -->
<section class="bg-resort-brown py-14 text-center text-white">
	<h2 class="font-serif text-3xl font-bold">Like what you see?</h2>
	<p class="mt-3 font-sans text-white/80">
		Call us and we'll confirm your room in under 2 minutes.
	</p>
	<a
		href="tel:{p.phone.tel}"
		class="mt-6 inline-flex h-12 items-center gap-2 rounded-lg bg-white px-8 font-sans font-semibold text-resort-brown transition-opacity hover:opacity-90"
	>
		{p.phone.display}
	</a>
</section>

<!-- Lightbox -->
{#if lightboxOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/93" role="dialog" aria-modal="true" aria-label="Photo lightbox" tabindex="-1" onclick={closeLightbox}>
		<button class="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white" onclick={closeLightbox} aria-label="Close lightbox (Esc)">
			<X class="h-5 w-5" />
		</button>
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="relative flex w-full max-w-5xl flex-col items-center px-16 py-10 md:px-20" onclick={(e) => e.stopPropagation()}>
			<div class="w-full">
				{#if activeIdx === 0}<enhanced:img src={gallery1} alt={photos[0].alt} class="max-h-[78vh] w-full object-contain" />
				{:else if activeIdx === 1}<enhanced:img src={gallery4} alt={photos[1].alt} class="max-h-[78vh] w-full object-contain" />
				{:else if activeIdx === 2}<enhanced:img src={gallery2} alt={photos[2].alt} class="max-h-[78vh] w-full object-contain" />
				{:else if activeIdx === 3}<enhanced:img src={gallery3} alt={photos[3].alt} class="max-h-[78vh] w-full object-contain" />
				{:else if activeIdx === 4}<enhanced:img src={gallery5} alt={photos[4].alt} class="max-h-[78vh] w-full object-contain" />
				{:else}<enhanced:img src={gallery6} alt={photos[5].alt} class="max-h-[78vh] w-full object-contain" />
				{/if}
			</div>
			<div class="mt-4 text-center">
				<p class="font-sans text-sm text-white/55">{photos[activeIdx].alt}</p>
				<p class="mt-1.5 font-sans text-xs text-white/30">{activeIdx + 1} / {photos.length}</p>
			</div>
		</div>
		<button class="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:left-5" onclick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous photo">
			<ChevronLeft class="h-6 w-6" />
		</button>
		<button class="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-5" onclick={(e) => { e.stopPropagation(); next(); }} aria-label="Next photo">
			<ChevronRight class="h-6 w-6" />
		</button>
		<div class="absolute bottom-5 flex gap-2">
			{#each photos as _, i}
				<button class="h-1.5 rounded-full transition-all {i === activeIdx ? 'w-6 bg-white' : 'w-1.5 bg-white/30 hover:bg-white/50'}" onclick={(e) => { e.stopPropagation(); activeIdx = i; }} aria-label="Go to photo {i + 1}"></button>
			{/each}
		</div>
	</div>
{/if}
