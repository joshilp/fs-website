<script lang="ts">
	import './layout.css';
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button/index.js';
	import { buildSchema, propertyList, properties } from '$lib/config.js';
	import falconLogoColor from '$lib/assets/falcon-logo-color-tight.png';
	import falconLogoWhite from '$lib/assets/falcon-logo-white-tight-bg_white_text.png';
	import spanishLogoColor from '$lib/assets/spanish-logo-color-tight.png';
	import spanishLogoWhite from '$lib/assets/spanish-logo-white-tight-bg_white_text.png';
	import falconIcon from '$lib/assets/falcon-icon.png';
	import spanishIcon from '$lib/assets/spanish-icon.png';

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

	const pathname = $derived($page.url.pathname);

	// Property route detection
	const isFalcon = $derived(pathname.startsWith('/falcon'));
	const isSpanish = $derived(pathname.startsWith('/spanish'));
	const isPropertyRoute = $derived(isFalcon || isSpanish);

	// Pages with a full-screen hero — nav starts transparent
	const isHeroPage = $derived(
		pathname === '/' || pathname === '/falcon' || pathname === '/spanish'
	);
	const transparent = $derived(isHeroPage && !scrolled);

	// Logo links back to the property home on property sub-routes
	const logoHref = $derived(isFalcon ? '/falcon' : isSpanish ? '/spanish' : '/');

	// Property nav uses property-specific destinations for all links
	const base = $derived(isFalcon ? '/falcon' : '/spanish');
	const navLinks = $derived(
		isPropertyRoute
			? [
					{ href: `${base}/rooms`, label: 'Rooms' },
					{ href: `${base}/gallery`, label: 'Gallery' },
					{ href: `${base}/location`, label: 'Location' },
					{ href: `${base}/contact`, label: 'Contact' }
				]
			: [
					{ href: '/rooms', label: 'Rooms' },
					{ href: '/gallery', label: 'Gallery' },
					{ href: '/location', label: 'Location' },
					{ href: '/guides', label: 'Area Guide' },
					{ href: '/contact', label: 'Contact' }
				]
	);

	// "Book Now" becomes a direct tel: call on property routes
	const bookNowHref = $derived(
		isFalcon
			? `tel:${properties.falcon.phone.tel}`
			: isSpanish
				? `tel:${properties.spanish.phone.tel}`
				: '/contact'
	);
	const bookNowLabel = $derived(isPropertyRoute ? 'Call to Book' : 'Book Now');

	// Current and sister property for footer
	const currentProperty = $derived(
		isFalcon ? properties.falcon : isSpanish ? properties.spanish : null
	);
	const sisterProperty = $derived(
		isFalcon ? properties.spanish : isSpanish ? properties.falcon : null
	);
	const sisterHref = $derived(isFalcon ? '/spanish' : '/falcon');

	function isActive(href: string) {
		return pathname === href;
	}

	// Active/accent colour per property context
	const activeTextClass = $derived(
		isSpanish ? 'text-resort-red' : isFalcon ? 'text-resort-stone' : 'text-resort-green'
	);
	const activeBorderClass = $derived(
		isSpanish ? 'border-resort-red' : isFalcon ? 'border-resort-stone' : 'border-resort-green'
	);
	const mobileActiveClass = $derived(
		isSpanish ? 'text-resort-red' : isFalcon ? 'text-resort-stone' : 'text-resort-green'
	);
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(buildSchema())}</script>`}
</svelte:head>

<!-- Nav -->
<header
	class="fixed top-0 z-50 w-full border-b transition-all duration-300
	{transparent
		? 'border-white/10 bg-transparent'
		: 'border-resort-sand/20 bg-resort-base/97 shadow-sm backdrop-blur-md'}"
>
	<!-- Thin strip: shared site links, only shown on property routes -->
	{#if isPropertyRoute}
		<div
			class="border-b px-6 py-1.5 transition-colors
			{transparent ? 'border-white/10 bg-black/20' : 'border-resort-sand/20 bg-resort-dark/5'}"
		>
			<div class="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto">
				<a
					href="/"
					class="shrink-0 font-sans text-[11px] font-semibold transition-colors
					{transparent ? 'text-white/50 hover:text-white/80' : 'text-resort-dark/40 hover:text-resort-dark/70'}"
				>
					← falcon-spanish.com
				</a>
				<span class="{transparent ? 'text-white/15' : 'text-resort-dark/15'} mx-2">|</span>
				{#each [
					{ href: '/guides', label: 'Area Guide' },
					{ href: '/faq', label: 'FAQ' }
				] as link}
					<a
						href={link.href}
						class="shrink-0 font-sans text-[11px] transition-colors
						{transparent
							? 'text-white/40 hover:text-white/70'
							: 'text-resort-dark/35 hover:text-resort-dark/60'} px-2"
					>
						{link.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
	<nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
		<!-- Logo — single property name on property routes, split on shared routes -->
		{#if isPropertyRoute}
			<a href={logoHref} class="group">
				{#if isFalcon}
					<img
						src={transparent ? falconLogoWhite : falconLogoColor}
						alt="Falcon Resort"
						height="40"
						width="120"
						class="h-10 w-auto object-contain"
					/>
				{:else}
					<img
						src={transparent ? spanishLogoWhite : spanishLogoColor}
						alt="Spanish Fiesta Resort"
						height="40"
						width="120"
						class="h-10 w-auto object-contain"
					/>
				{/if}
			</a>
		{:else}
			<a href="/" class="group flex items-center gap-3">
				<img src={falconIcon} alt="Falcon Resort" height="36" width="36" class="h-9 w-auto object-contain transition-all duration-300 {transparent ? 'brightness-0 invert' : ''}" />
				<div class="h-7 w-px {transparent ? 'bg-white/30' : 'bg-resort-sand/60'}"></div>
				<img src={spanishIcon} alt="Spanish Fiesta Resort" height="36" width="36" class="h-9 w-auto object-contain transition-all duration-300 {transparent ? 'brightness-0 invert' : ''}" />
			</a>
		{/if}

		<!-- Desktop links -->
		<ul class="hidden items-center gap-8 md:flex">
			{#each navLinks as link}
				<li>
					<a
						href={link.href}
						class="font-sans text-sm font-medium transition-colors
						{isActive(link.href)
							? transparent
								? 'border-b-2 border-white pb-0.5 text-white'
								: `border-b-2 pb-0.5 ${activeTextClass} ${activeBorderClass}`
							: transparent
								? 'text-white/80 hover:text-white'
								: 'text-resort-dark/65 hover:text-resort-dark'}"
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<!-- Book Now / Call to Book -->
		<div class="flex items-center gap-4">
			<Button
				href={bookNowHref}
				class="hidden md:inline-flex {transparent
					? 'border border-white/50 bg-transparent text-white hover:bg-white/10 hover:text-white'
					: isSpanish
						? 'bg-resort-red text-white hover:bg-resort-red/85'
						: isFalcon
							? 'bg-resort-stone text-white hover:bg-resort-stone/85'
							: 'bg-resort-green text-white hover:bg-resort-green/85'}"
			>
				{bookNowLabel}
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
				{#each navLinks as link}
					<li>
						<a
							href={link.href}
							onclick={() => (mobileOpen = false)}
							class="block font-sans text-base font-medium {isActive(link.href)
								? mobileActiveClass
								: 'text-resort-dark/65 hover:text-resort-dark'}"
						>
							{link.label}
						</a>
					</li>
				{/each}
				<li class="pt-1">
					<Button
						href={bookNowHref}
						onclick={() => (mobileOpen = false)}
						class="{isSpanish
							? 'bg-resort-red hover:bg-resort-red/85'
							: isFalcon
								? 'bg-resort-stone hover:bg-resort-stone/85'
								: 'bg-resort-green hover:bg-resort-green/85'} text-white"
					>
						{bookNowLabel}
					</Button>
				</li>
			</ul>
		</div>
	{/if}
</header>

<!-- Spacer so content doesn't hide under fixed nav — not needed on full-screen hero pages -->
{#if !isHeroPage}
	<!-- Property routes have an extra strip above the nav (~32px) -->
	<div class={isPropertyRoute ? 'h-[105px]' : 'h-[73px]'}></div>
{/if}

<!-- Page content -->
<main class="min-h-screen">
	{@render children()}
</main>

<!-- Footer -->
<footer class="border-t border-resort-sand/30 bg-resort-sand/10">
	<div class="mx-auto max-w-6xl px-6 py-14">
		{#if isPropertyRoute && currentProperty && sisterProperty}
			<!-- Property-specific footer -->
			<div class="grid gap-10 md:grid-cols-3">
				<div>
					<a href="/{isFalcon ? 'falcon' : 'spanish'}" class="inline-block transition-opacity hover:opacity-80">
						<img
							src={isFalcon ? falconLogoColor : spanishLogoColor}
							alt={currentProperty.name}
							height="48"
							width="144"
							class="h-12 w-auto object-contain"
						/>
					</a>
					<p class="mt-4 font-sans text-sm leading-relaxed text-resort-dark/55">
						Lakeside motel on Main Street, Osoyoos — private beach, 2 pools, hot tub, and
						air-conditioned rooms.
					</p>
				</div>
				<div>
					<h3 class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-dark/40">
						Find Us
					</h3>
					<address class="not-italic font-sans text-sm leading-relaxed text-resort-dark/65">
						{currentProperty.address.street}<br />
						{currentProperty.address.city}, {currentProperty.address.province}&nbsp;&nbsp;{currentProperty.address.postalCode}<br />
						<a
							href="tel:{currentProperty.phone.tel}"
							class="mt-1 inline-block transition-colors hover:text-resort-dark"
						>
							{currentProperty.phone.display}
						</a>
					</address>
				</div>
				<div>
					<h3 class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-dark/40">
						Also in Osoyoos
					</h3>
					<a
						href={sisterHref}
						class="font-serif text-base font-semibold text-resort-dark/65 transition-colors hover:text-resort-dark"
					>
						{sisterProperty.name} →
					</a>
					<p class="mt-2 font-sans text-sm text-resort-dark/45">
						Our connected property on the same grounds.
					</p>
					<a
						href="tel:{sisterProperty.phone.tel}"
						class="mt-2 block font-sans text-sm text-resort-dark/45 transition-colors hover:text-resort-dark/70"
					>
						{sisterProperty.phone.display}
					</a>
				</div>
			</div>
			<div class="mt-10 border-t border-resort-sand/30 pt-8">
				<nav class="flex flex-wrap justify-center gap-x-6 gap-y-2">
					{#each [
						{ href: `${base}/rooms`, label: 'Rooms' },
						{ href: `${base}/gallery`, label: 'Gallery' },
						{ href: `${base}/location`, label: 'Location' },
						{ href: `${base}/contact`, label: 'Contact' }
					] as link}
						<a
							href={link.href}
							class="font-sans text-xs text-resort-dark/40 transition-colors hover:text-resort-dark/70"
						>
							{link.label}
						</a>
					{/each}
					<a
						href={bookNowHref}
						class="font-sans text-xs text-resort-dark/40 transition-colors hover:text-resort-dark/70"
					>
						Call to Book
					</a>
				</nav>
				<p class="mt-6 text-center font-sans text-xs text-resort-dark/30">
					&copy; {new Date().getFullYear()} Falcon Resort &amp; Spanish Fiesta Resort &mdash; Osoyoos,
					BC, Canada
				</p>
			</div>
		{:else}
			<!-- Shared footer: Falcon | Brand | Spanish -->
			<div class="grid gap-10 md:grid-cols-3">
				<!-- Falcon -->
				<div class="text-center">
					<a href="/falcon" class="inline-block transition-opacity hover:opacity-80">
						<img
							src={falconLogoColor}
							alt="Falcon Resort"
							height="40"
							width="144"
							class="mb-4 h-10 w-auto object-contain"
						/>
					</a>
					<address class="not-italic font-sans text-sm leading-relaxed text-resort-dark/65">
						{properties.falcon.address.street}<br />
						{properties.falcon.address.city}, {properties.falcon.address.province}&nbsp;&nbsp;{properties.falcon.address.postalCode}<br />
						<a
							href="tel:{properties.falcon.phone.tel}"
							class="mt-1 inline-block transition-colors hover:text-resort-dark"
						>
							{properties.falcon.phone.display}
						</a>
					</address>
				</div>

				<!-- Brand identity (centre) -->
				<div class="flex flex-col items-center text-center">
					<a href="/" class="flex items-center gap-3 transition-opacity hover:opacity-80">
						<img src={falconIcon} alt="Falcon Resort" height="36" width="36" class="h-9 w-auto object-contain" />
						<div class="h-7 w-px bg-resort-sand/60"></div>
						<img src={spanishIcon} alt="Spanish Fiesta Resort" height="36" width="36" class="h-9 w-auto object-contain" />
					</a>
					<p class="mt-4 font-sans text-sm leading-relaxed text-resort-dark/50">
						Two connected lakeside properties in the heart of Canada's warmest valley — operated as one.
					</p>
				</div>

				<!-- Spanish -->
				<div class="text-center">
					<a href="/spanish" class="inline-block transition-opacity hover:opacity-80">
						<img
							src={spanishLogoColor}
							alt="Spanish Fiesta Resort"
							height="40"
							width="144"
							class="mb-4 h-10 w-auto object-contain"
						/>
					</a>
					<address class="not-italic font-sans text-sm leading-relaxed text-resort-dark/65">
						{properties.spanish.address.street}<br />
						{properties.spanish.address.city}, {properties.spanish.address.province}&nbsp;&nbsp;{properties.spanish.address.postalCode}<br />
						<a
							href="tel:{properties.spanish.phone.tel}"
							class="mt-1 inline-block transition-colors hover:text-resort-dark"
						>
							{properties.spanish.phone.display}
						</a>
					</address>
				</div>
			</div>
			<div class="mt-10 border-t border-resort-sand/30 pt-8">
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
							class="font-sans text-xs text-resort-dark/40 transition-colors hover:text-resort-dark/70"
						>
							{link.label}
						</a>
					{/each}
				</nav>
				<p class="mt-6 text-center font-sans text-xs text-resort-dark/30">
					&copy; {new Date().getFullYear()} Falcon Resort &amp; Spanish Fiesta Resort &mdash; Osoyoos,
					BC, Canada
				</p>
			</div>
		{/if}
	</div>
</footer>
