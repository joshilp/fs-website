<script lang="ts">
	import './layout.css';
	import { page } from '$app/stores';
	import favicon from '$lib/assets/favicon.svg';
	import { Button } from '$lib/components/ui/button/index.js';

	let { children } = $props();
	let mobileOpen = $state(false);

	const links = [
		{ href: '/rooms', label: 'Rooms' },
		{ href: '/gallery', label: 'Gallery' },
		{ href: '/location', label: 'Location' },
		{ href: '/contact', label: 'Contact' }
	];

	function isActive(href: string) {
		return $page.url.pathname === href;
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- Nav -->
<header class="sticky top-0 z-50 border-b border-resort-sand/30 bg-resort-base/95 backdrop-blur-sm">
	<nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
		<!-- Logo -->
		<a href="/" class="flex flex-col leading-tight">
			<span class="font-serif text-lg font-semibold italic text-resort-teal">Spanish Fiesta</span>
			<span class="font-serif text-sm text-resort-dark/70">&amp; Falcon Resorts</span>
		</a>

		<!-- Desktop links -->
		<ul class="hidden items-center gap-8 md:flex">
			{#each links as link}
				<li>
					<a
						href={link.href}
						class="font-sans text-sm font-medium transition-colors
						{isActive(link.href)
							? 'text-resort-teal border-b-2 border-resort-teal pb-0.5'
							: 'text-resort-dark/70 hover:text-resort-dark'}"
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<!-- Book Now CTA -->
		<div class="flex items-center gap-4">
			<Button
				href="/contact"
				class="hidden bg-resort-terra text-white hover:bg-resort-terra/85 md:inline-flex"
			>
				Book Now
			</Button>

			<!-- Hamburger -->
			<button
				class="md:hidden"
				aria-label="Toggle menu"
				onclick={() => (mobileOpen = !mobileOpen)}
			>
				{#if mobileOpen}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 text-resort-dark"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 text-resort-dark"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				{/if}
			</button>
		</div>
	</nav>

	<!-- Mobile menu -->
	{#if mobileOpen}
		<div class="border-t border-resort-sand/30 bg-resort-base px-6 pb-4 md:hidden">
			<ul class="flex flex-col gap-3 pt-3">
				{#each links as link}
					<li>
						<a
							href={link.href}
							onclick={() => (mobileOpen = false)}
							class="block font-sans text-base font-medium
							{isActive(link.href) ? 'text-resort-teal' : 'text-resort-dark/70 hover:text-resort-dark'}"
						>
							{link.label}
						</a>
					</li>
				{/each}
				<li class="pt-2">
					<Button
						href="/contact"
						onclick={() => (mobileOpen = false)}
						class="bg-resort-terra text-white hover:bg-resort-terra/85"
					>
						Book Now
					</Button>
				</li>
			</ul>
		</div>
	{/if}
</header>

<!-- Page content -->
<main>
	{@render children()}
</main>

<!-- Footer -->
<footer class="bg-resort-dark text-white">
	<div class="mx-auto max-w-6xl px-6 py-14">
		<div class="grid gap-10 md:grid-cols-3">
			<!-- Brand -->
			<div>
				<p class="font-serif text-xl font-semibold italic text-resort-sand">Spanish Fiesta</p>
				<p class="font-serif text-sm text-white/60">&amp; Falcon Resorts</p>
				<p class="mt-4 font-sans text-sm leading-relaxed text-white/60">
					Two adjacent properties on the shores of Osoyoos Lake, in the heart of Canada's warmest
					valley.
				</p>
			</div>

			<!-- Falcon Resort -->
			<div>
				<h3 class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-sand">
					Falcon Resort
				</h3>
				<address class="not-italic font-sans text-sm leading-relaxed text-white/70">
					7106 Main Street<br />
					Osoyoos, BC &nbsp;V0H 1V3<br />
					<a href="tel:2504957544" class="hover:text-resort-sand transition-colors mt-1 inline-block"
						>(250) 495-7544</a
					>
				</address>
			</div>

			<!-- Spanish Fiesta -->
			<div>
				<h3 class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-sand">
					Spanish Fiesta Resort
				</h3>
				<address class="not-italic font-sans text-sm leading-relaxed text-white/70">
					7104 Main Street<br />
					Osoyoos, BC &nbsp;V0H 1V3<br />
					<a href="tel:2504956833" class="hover:text-resort-sand transition-colors mt-1 inline-block"
						>(250) 495-6833</a
					>
				</address>
			</div>
		</div>

		<div class="mt-12 border-t border-white/10 pt-6 text-center font-sans text-xs text-white/40">
			&copy; {new Date().getFullYear()} Spanish Fiesta &amp; Falcon Resorts &mdash; Osoyoos, BC, Canada
		</div>
	</div>
</footer>
