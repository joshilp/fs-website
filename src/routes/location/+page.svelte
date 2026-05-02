<svelte:head>
	<title>Location &amp; Area Guide — Spanish Fiesta &amp; Falcon Resorts, Osoyoos BC</title>
	<meta
		name="description"
		content="Located in the heart of Osoyoos, BC — Canada's warmest and sunniest spot. Explore wine country, the Okanagan desert, and Osoyoos Lake right from our door."
	/>
</svelte:head>

<!-- Page header -->
<section class="relative overflow-hidden bg-resort-dark py-24 text-white">
	<enhanced:img
		src="$lib/assets/images/hero.jpg"
		alt="Osoyoos Lake and desert landscape"
		class="absolute inset-0 h-full w-full object-cover opacity-20"
	/>
	<div class="relative mx-auto max-w-3xl px-6 text-center">
		<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-sand">
			Osoyoos, BC
		</p>
		<h1 class="font-serif text-5xl font-bold">The destination itself.</h1>
		<p class="mt-4 font-sans text-lg text-white/75">
			Osoyoos isn't just where we are — it's why people come.
		</p>
	</div>
</section>

<!-- About Osoyoos -->
<section class="mx-auto max-w-5xl px-6 py-20">
	<div class="grid gap-12 md:grid-cols-2">
		<div>
			<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-teal">
				About Osoyoos
			</p>
			<h2 class="font-serif text-4xl font-bold leading-tight text-resort-dark">
				Canada's warmest,<br />sunniest valley.
			</h2>
			<p class="mt-5 font-sans leading-relaxed text-resort-dark/70">
				Osoyoos sits in the southern tip of the Okanagan Valley — Canada's only pocket desert, where
				the Sonoran Desert reaches its northernmost point. The result is a unique landscape of
				sandy beaches, vineyard hills, and hot, dry summers that average over 200 sunshine days a
				year.
			</p>
			<p class="mt-4 font-sans leading-relaxed text-resort-dark/70">
				Osoyoos Lake is the warmest freshwater lake in Canada, making it perfect for swimming,
				paddleboarding, and watersports from May through September. Our resorts are right on the
				lakeshore, on Main Street in the heart of town.
			</p>
		</div>
		<div class="space-y-5">
			{#each [
				{ stat: '200+', label: 'Sunshine days per year' },
				{ stat: '24°C', label: 'Average summer lake temperature' },
				{ stat: '#1', label: 'Warmest freshwater lake in Canada' },
				{ stat: '30+', label: 'Wineries within 30 minutes' }
			] as s}
				<div class="flex items-center gap-5 border-b border-resort-sand/30 pb-5">
					<span class="font-serif text-4xl font-bold text-resort-terra">{s.stat}</span>
					<span class="font-sans text-resort-dark/70">{s.label}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Things to do -->
<section class="bg-resort-teal/8 py-16">
	<div class="mx-auto max-w-5xl px-6">
		<div class="mb-10 text-center">
			<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-teal">
				Activities
			</p>
			<h2 class="font-serif text-4xl font-bold text-resort-dark">Things to do.</h2>
		</div>
		<div class="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
			{#each [
				{
					title: 'Swimming & Beach',
					body: 'Our private sandy beach has a long, shallow entry — safe for kids and perfect for wading out hundreds of feet in warm water.'
				},
				{
					title: 'Wine Country',
					body: 'The South Okanagan is home to some of Canada\'s best wineries. Dozens are within a short drive of our doorstep.'
				},
				{
					title: 'Nk\'Mip Desert',
					body: 'Visit the Nk\'Mip Desert Cultural Centre and explore Canada\'s unique northern desert ecosystem — just minutes away.'
				},
				{
					title: 'Watersports',
					body: 'Kayaking, paddleboarding, boating, and fishing — Osoyoos Lake has it all. Rentals are available nearby.'
				},
				{
					title: 'Cycling & Hiking',
					body: 'The South Okanagan has world-class trails through vineyards, desert terrain, and along the lakeshore.'
				},
				{
					title: 'Dining & Shopping',
					body: 'We\'re right on Main Street. Restaurants, cafés, shops, and the Saturday Farmer\'s Market are all within walking distance.'
				}
			] as item}
				<div class="rounded-sm border border-resort-sand/30 bg-white p-6">
					<h3 class="font-sans font-semibold text-resort-dark">{item.title}</h3>
					<p class="mt-2 font-sans text-sm leading-relaxed text-resort-dark/65">{item.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Map -->
<section class="mx-auto max-w-6xl px-6 py-16">
	<div class="mb-8 text-center">
		<p class="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-resort-teal">
			Find Us
		</p>
		<h2 class="font-serif text-3xl font-bold text-resort-dark">Right on Main Street.</h2>
		<p class="mt-2 font-sans text-resort-dark/60">
			Spanish Fiesta: 7104 Main St &nbsp;|&nbsp; Falcon Resort: 7106 Main St &nbsp;&mdash;&nbsp;
			Osoyoos, BC
		</p>
	</div>
	<div class="overflow-hidden rounded-sm border border-resort-sand/30">
		<iframe
			title="Osoyoos resort location"
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.5!2d-119.4677!3d49.0317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548417b56e8d8a1b%3A0x123456789!2s7105+Main+St%2C+Osoyoos%2C+BC!5e0!3m2!1sen!2sca!4v1"
			class="h-96 w-full border-0"
			allowfullscreen
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe>
	</div>
	<div class="mt-6 grid gap-4 text-center sm:grid-cols-2">
		<div>
			<p class="font-sans font-semibold text-resort-dark">From Kelowna</p>
			<p class="mt-1 font-sans text-sm text-resort-dark/60">~1.5 hours south on Hwy 97</p>
		</div>
		<div>
			<p class="font-sans font-semibold text-resort-dark">From Vancouver</p>
			<p class="mt-1 font-sans text-sm text-resort-dark/60">~4 hours east via Hwy 3 or Hwy 5</p>
		</div>
	</div>
</section>
