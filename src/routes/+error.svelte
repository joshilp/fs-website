<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Page Not Found | Falcon Resort &amp; Spanish Fiesta Resort</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="flex min-h-[70vh] flex-col items-center justify-center p-8 text-center">
	<p class="font-sans text-xs font-semibold uppercase tracking-widest text-resort-sand">
		{$page.status}
	</p>
	<h1 class="mt-3 font-serif text-5xl font-bold text-resort-dark">
		{$page.status === 404 ? 'Page not found.' : 'Something went wrong.'}
	</h1>
	<p class="mt-4 max-w-md font-sans text-resort-dark/60">
		{#if $page.status === 404}
			The page you're looking for doesn't exist — it may have moved or the link may be wrong.
		{:else}
			An unexpected error occurred. Try refreshing the page.
		{/if}
	</p>
	<div class="mt-8 flex flex-wrap justify-center gap-3">
		<a
			href="/"
			class="inline-flex h-11 items-center rounded-lg bg-resort-green px-6 font-sans text-sm font-semibold text-white transition-opacity hover:opacity-90"
		>
			Go to Homepage
		</a>
		<a
			href="/rooms"
			class="inline-flex h-11 items-center rounded-lg border border-resort-sand/40 px-6 font-sans text-sm font-semibold text-resort-dark transition-colors hover:border-resort-dark/30"
		>
			View Rooms
		</a>
	</div>
</section>
