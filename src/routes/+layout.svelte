<script lang="ts">
	import './layout.css';
	import { page } from '$app/stores';
	import favicon from '$lib/assets/favicon.svg';
	import { Button } from '$lib/components/ui/button/index.js';
	import { buildSchema, propertyList } from '$lib/config.js';

	let { children } = $props();
	let mobileOpen = $state(false);
	let scrolled = $state(false);

	$effect(() => {
		function onScroll() {
			scrolled = window.scrollY > 60;
		}
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	const links = [
		{ href: '/rooms', label: 'Rooms' },
		{ href: '/gallery', label: 'Gallery' },
		{ href: '/location', label: 'Location' },
		{ href: '/guides', label: 'Area Guide' },
		{ href: '/contact', label: 'Contact' }
	];

	const isHome = $derived($page.url.pathname === '/');
	const transparent = $derived(isHome && !scrolled);

	function isActive(href: string) {
		return $page.url.pathname === href;
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	{@html `<script type="application/ld+json">${JSON.stringify(buildSchema())}</script>`}
</svelte:head>

<!-- Nav -->
<header
	class="fixed top-0 z-50 w-full border-b transition-all duration-300
	{transparent
		? 'border-white/10 bg-transparent'
		: 'border-resort-sand/20 bg-resort-base/97 shadow-sm backdrop-blur-md'}"
>
	<nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
		<!-- Split logo: Falcon | Spanish Fiesta -->
		<a href="/" class="flex items-center gap-2.5 group">
			<div class="text-right leading-tight">
				<p class="font-serif text-sm font-bold {transparent ? 'text-white' : 'text-resort-dark'}">
					Falcon
				</p>
				<p
					class="font-sans text-[10px] font-medium uppercase tracking-wider {transparent
						? 'text-white/65'
						: 'text-resort-dark/50'}"
				>
					Resort
				</p>
			</div>
			<div class="h-7 w-px {transparent ? 'bg-white/30' : 'bg-resort-sand/60'}"></div>
			<div class="text-left leading-tight">
				<p class="font-serif text-sm font-bold {transparent ? 'text-white' : 'text-resort-dark'}">
					Spanish Fiesta
				</p>
				<p
					class="font-sans text-[10px] font-medium uppercase tracking-wider {transparent
						? 'text-white/65'
						: 'text-resort-dark/50'}"
				>
					Resort
				</p>
			</div>
		</a>

		<!-- Desktop links -->
		<ul class="hidden items-center gap-8 md:flex">
			{#each links as link}
				<li>
					<a
						href={link.href}
						class="font-sans text-sm font-medium transition-colors
						{isActive(link.href)
							? transparent
								? 'text-white border-b-2 border-white pb-0.5'
								: 'text-resort-green border-b-2 border-resort-green pb-0.5'
							: transparent
								? 'text-white/80 hover:text-white'
								: 'text-resort-dark/65 hover:text-resort-dark'}"
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<!-- Book Now -->
		<div class="flex items-center gap-4">
			<Button
				href="/contact"
				class="hidden md:inline-flex {transparent
					? 'border border-white/50 bg-transparent text-white hover:bg-white/10 hover:text-white'
					: 'bg-resort-brown text-white hover:bg-resort-brown/85'}"
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
						class="h-6 w-6 {transparent ? 'text-white' : 'text-resort-dark'}"
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
						class="h-6 w-6 {transparent ? 'text-white' : 'text-resort-dark'}"
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
		<div class="border-t border-resort-sand/20 bg-resort-base px-6 pb-5 md:hidden">
			<ul class="flex flex-col gap-4 pt-4">
				{#each links as link}
					<li>
						<a
							href={link.href}
							onclick={() => (mobileOpen = false)}
							class="block font-sans text-base font-medium {isActive(link.href)
								? 'text-resort-green'
								: 'text-resort-dark/65 hover:text-resort-dark'}"
						>
							{link.label}
						</a>
					</li>
				{/each}
				<li class="pt-1">
					<Button
						href="/contact"
						onclick={() => (mobileOpen = false)}
						class="bg-resort-brown text-white hover:bg-resort-brown/85"
					>
						Book Now
					</Button>
				</li>
			</ul>
		</div>
	{/if}
</header>

<!-- Spacer so content doesn't hide under fixed nav (only on non-home pages) -->
{#if !isHome}
	<div class="h-[73px]"></div>
{/if}

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
				<div class="flex items-center gap-2.5">
					<div class="text-right leading-tight">
						<p class="font-serif text-base font-bold text-white">Falcon</p>
						<p class="font-sans text-[10px] font-medium uppercase tracking-wider text-white/40">
							Resort
						</p>
					</div>
					<div class="h-6 w-px bg-resort-sand/30"></div>
					<div class="text-left leading-tight">
						<p class="font-serif text-base font-bold text-white">Spanish Fiesta</p>
						<p class="font-sans text-[10px] font-medium uppercase tracking-wider text-white/40">
							Resort
						</p>
					</div>
				</div>
				<p class="mt-4 font-sans text-sm leading-relaxed text-white/50">
					Two adjacent lakeside properties in the heart of Canada's warmest valley — operated as
					one.
				</p>
			</div>

			<!-- Property addresses from config -->
			{#each propertyList as property}
				<div>
					<h3
						class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-sand"
					>
						{property.name}
					</h3>
					<address class="not-italic font-sans text-sm leading-relaxed text-white/60">
						{property.address.street}<br />
						{property.address.city}, {property.address.province}&nbsp;&nbsp;{property.address
							.postalCode}<br />
						<a
							href="tel:{property.phone.tel}"
							class="mt-1 inline-block transition-colors hover:text-resort-sand"
						>
							{property.phone.display}
						</a>
					</address>
				</div>
			{/each}
		</div>

		<!-- Quick links -->
		<div class="mt-10 border-t border-white/8 pt-8">
			<nav class="flex flex-wrap justify-center gap-x-6 gap-y-2">
				{#each [
					{ href: '/rooms', label: 'Rooms' },
					{ href: '/gallery', label: 'Gallery' },
					{ href: '/location', label: 'Location' },
					{ href: '/guides', label: 'Area Guide' },
					{ href: '/faq', label: 'FAQ' },
					{ href: '/contact', label: 'Contact' }
				] as link}
					<a
						href={link.href}
						class="font-sans text-xs text-white/35 transition-colors hover:text-white/70"
					>
						{link.label}
					</a>
				{/each}
			</nav>
			<p class="mt-6 text-center font-sans text-xs text-white/25">
				&copy; {new Date().getFullYear()} Falcon Resort &amp; Spanish Fiesta Resort &mdash; Osoyoos,
				BC, Canada
			</p>
		</div>
	</div>
</footer>
