<script lang="ts">
	import gallery1 from '$lib/assets/images/gallery-1.jpg?enhanced';
	import gallery2 from '$lib/assets/images/gallery-2.jpg?enhanced';
	import gallery3 from '$lib/assets/images/gallery-3.jpg?enhanced';
	import gallery4 from '$lib/assets/images/gallery-4.jpg?enhanced';
	import gallery5 from '$lib/assets/images/gallery-5.jpg?enhanced';
	import gallery6 from '$lib/assets/images/gallery-6.jpg?enhanced';

	const photos = [
		{ src: gallery1, alt: 'Osoyoos Lake view from the resort' },
		{ src: gallery2, alt: 'Resort pool area' },
		{ src: gallery3, alt: 'Sandy beach on Osoyoos Lake' },
		{ src: gallery4, alt: 'Resort exterior' },
		{ src: gallery5, alt: 'Room interior' },
		{ src: gallery6, alt: 'Osoyoos sunset over the lake' }
	];
</script>

<svelte:head>
	<title>Gallery — Spanish Fiesta &amp; Falcon Resorts</title>
	<meta
		name="description"
		content="Photos of Spanish Fiesta and Falcon Resorts in Osoyoos, BC — beach, pools, rooms, and the surrounding Okanagan landscape."
	/>
</svelte:head>

<!-- Page header -->
<section class="bg-resort-dark py-24 text-white text-center">
	<div class="mx-auto max-w-2xl px-6">
		<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-sand">
			Gallery
		</p>
		<h1 class="font-serif text-5xl font-bold">Photos</h1>
		<p class="mt-4 font-sans text-lg text-white/70">
			A glimpse of what's waiting for you in Osoyoos.
		</p>
	</div>
</section>

<!-- Notice -->
<div class="bg-resort-sand/20 border-b border-resort-sand/30 px-6 py-4 text-center">
	<p class="font-sans text-sm text-resort-dark/60">
		Professional photos coming soon. Check back shortly for a full look at the properties.
	</p>
</div>

<!-- Gallery grid -->
<section class="mx-auto max-w-6xl px-6 py-16">
	<div class="columns-1 gap-4 sm:columns-2 lg:columns-3">
		{#each photos as photo}
			<div class="mb-4 overflow-hidden rounded-sm">
				<enhanced:img
					src={photo.src}
					alt={photo.alt}
					class="w-full object-cover transition-transform duration-500 hover:scale-105"
				/>
			</div>
		{/each}
	</div>
</section>

<!-- Book CTA -->
<section class="bg-resort-teal py-14 text-center text-white">
	<h2 class="font-serif text-3xl font-bold">Like what you see?</h2>
	<p class="mt-3 font-sans text-white/80">Book your stay and experience it in person.</p>
	<a
		href="/contact"
		class="mt-6 inline-block rounded bg-white px-8 py-3.5 font-sans font-semibold text-resort-teal transition-colors hover:bg-white/90"
	>
		Book Now
	</a>
</section>
