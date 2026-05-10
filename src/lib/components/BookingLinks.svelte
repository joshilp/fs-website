<script lang="ts">
	import type { Property } from '$lib/config.js';

	let { property }: { property: Property } = $props();

	const hasBookingCom = $derived(!!property.booking.bookingCom);
	const hasExpedia = $derived(!!property.booking.expedia);
	const hasAnyOta = $derived(hasBookingCom || hasExpedia);
</script>

<!--
	Renders OTA booking buttons for a property.
	Buttons are only shown when the URL is configured in config.ts.
	Nothing renders if no OTA URLs are set yet — call-to-book remains the default.
-->
{#if hasAnyOta}
	<div class="flex flex-wrap items-center gap-3">
		{#if hasBookingCom}
			<a
				href={property.booking.bookingCom}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 rounded-lg border border-[#003580] bg-[#003580] px-5 py-2.5 font-sans text-sm font-semibold text-white transition-opacity hover:opacity-90"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4 shrink-0"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
					<polyline points="15 3 21 3 21 9" />
					<line x1="10" x2="21" y1="14" y2="3" />
				</svg>
				Booking.com
			</a>
		{/if}

		{#if hasExpedia}
			<a
				href={property.booking.expedia}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 rounded-lg border border-[#1d4f91] bg-white px-5 py-2.5 font-sans text-sm font-semibold text-[#1d4f91] transition-colors hover:bg-[#1d4f91] hover:text-white"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4 shrink-0"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
					<polyline points="15 3 21 3 21 9" />
					<line x1="10" x2="21" y1="14" y2="3" />
				</svg>
				Expedia
			</a>
		{/if}
	</div>
{/if}
