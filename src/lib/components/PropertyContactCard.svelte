<script lang="ts">
	import type { Property } from '$lib/config.js';
	import BookingLinks from './BookingLinks.svelte';
	import falconLogoColor from '$lib/assets/falcon-logo-color-tight.png';
	import spanishLogoColor from '$lib/assets/spanish-logo-color-tight.png';

	let {
		property,
		sisterProperty = undefined,
		sisterHref = undefined
	}: {
		property: Property;
		sisterProperty?: Property;
		sisterHref?: string;
	} = $props();

	const logo = $derived(property.id === 'falcon' ? falconLogoColor : spanishLogoColor);
	const isFalcon = $derived(property.id === 'falcon');
</script>

<div class="rounded-sm border border-resort-sand/30 bg-white p-8">
	<!-- Logo (links to property homepage) -->
	<div class="mb-6 flex justify-center">
		<a href="/{property.id}">
			<img
				src={logo}
				alt={property.name}
				height="72"
				width="240"
				class="h-18 w-auto object-contain transition-opacity hover:opacity-80"
			/>
		</a>
	</div>

	<!-- Address -->
	<address class="mb-6 not-italic text-center">
		<p class="font-sans text-sm text-resort-dark/60">{property.address.street}</p>
		<p class="font-sans text-sm text-resort-dark/60">
			{property.address.city}, {property.address.province}&nbsp;&nbsp;{property.address.postalCode}
		</p>
	</address>

	<!-- Call button -->
	<a
		href="tel:{property.phone.tel}"
		class="flex w-full items-center justify-center gap-3 rounded-lg px-8 py-4 font-sans text-lg font-bold text-white shadow-sm transition-opacity hover:opacity-90
		{isFalcon ? 'bg-resort-stone' : 'bg-resort-red'}"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5 shrink-0"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			aria-hidden="true"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
			/>
		</svg>
		{property.phone.display}
	</a>

	<p class="mt-3 text-center font-sans text-xs text-resort-dark/40">
		If we miss your call, leave a message and we'll call back promptly.
	</p>

	<!-- OTA links -->
	{#if property.booking.bookingCom || property.booking.expedia}
		<div class="mt-5 border-t border-resort-sand/20 pt-5">
			<p class="mb-3 text-center font-sans text-xs text-resort-dark/45">Also available online:</p>
			<div class="flex flex-wrap justify-center gap-3">
				<BookingLinks {property} />
			</div>
		</div>
	{/if}

	<!-- Sister property link (shown on property-specific contact pages) -->
	{#if sisterProperty && sisterHref}
		<div class="mt-5 border-t border-resort-sand/20 pt-5 text-center">
			<p class="font-sans text-sm text-resort-dark/50">Looking for our connected property?</p>
			<a
				href={sisterHref}
				class="mt-1 inline-block font-sans text-sm font-semibold transition-colors
				{isFalcon
					? 'text-resort-brown hover:text-resort-stone'
					: 'text-resort-green hover:text-resort-red'}"
			>
				View {sisterProperty.name} →
			</a>
			<p class="mt-1 font-sans text-xs text-resort-dark/35">
				{sisterProperty.phone.display} &mdash; same grounds, steps away
			</p>
		</div>
	{/if}
</div>
