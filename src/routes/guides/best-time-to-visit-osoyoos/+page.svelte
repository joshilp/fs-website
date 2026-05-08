<script lang="ts">
	import GuideLayout from '$lib/components/GuideLayout.svelte';
	import { guides } from '$lib/data/guides.js';
	const guide = guides.find((g) => g.slug === 'best-time-to-visit-osoyoos')!;
</script>

<GuideLayout {guide}>
	<p>
		Osoyoos is one of those rare destinations that is genuinely good almost any time of year — but
		"almost" is doing some work in that sentence. The shoulder months are quieter and cheaper, but
		the lake is colder. Peak summer is warm and buzzing, but accommodation fills up fast. Here is
		an honest month-by-month breakdown to help you decide.
	</p>

	<h2>May: Warm Enough, Almost Empty</h2>
	<p>
		May is underrated. Days are long, temperatures are climbing into the mid-20s, and the town has
		not yet filled up with summer crowds. The lake is still cool — usually around 16–18°C — which
		is fine for a quick dip on a hot afternoon but not ideal for spending the whole day in the
		water.
	</p>
	<p>
		The big upside: accommodation is available and priced well below peak rates. The Saturday
		Farmers' Market starts up. Wineries are open and rarely busy. If your priority is the wine
		country rather than the beach, May is excellent. If your priority is warm-water swimming, wait
		another few weeks.
	</p>

	<h2>June: The Sweet Spot Opens Up</h2>
	<p>
		By mid-June the lake reaches 20–22°C and swimming becomes genuinely comfortable. The town is
		busy but not overwhelmed. This is a great time to visit if you want the full Osoyoos experience
		— beach, wine, hiking — without the peak-season pressure on restaurants and accommodation.
	</p>
	<p>
		Book accommodation at least a few weeks ahead, especially for weekends. The school year is
		still running in most of BC until late June, so the family crowds arrive closer to Canada Day.
	</p>

	<h2>July: Peak Season — Busy, Hot, and Worth It</h2>
	<p>
		July is the heart of Osoyoos summer. The lake hits 24–26°C, daytime temperatures regularly
		reach 38°C, and the town is at its liveliest. The beach is active from morning to evening.
		Restaurants are full, Main Street is busy, and the energy is high.
	</p>
	<p>
		<strong>Canada Day weekend (July 1)</strong> is the single busiest period of the year. If you
		are planning to visit over Canada Day, book months in advance — not weeks. Properties fill
		completely, and many guests book the same week every year.
	</p>
	<p>
		The trade-off: July is expensive and everything requires more planning. But if you want Osoyoos
		at its fullest — the warmest water, the most sunshine, the most activity — this is the month.
	</p>

	<h2>August: Still Peak, Slightly Calmer After Long Weekend</h2>
	<p>
		August is nearly identical to July. The lake stays warm, temperatures are high, and the town
		remains busy. BC Day long weekend (first Monday in August) is another surge — book ahead.
	</p>
	<p>
		The last two weeks of August start to feel slightly less pressured than early July. School
		returns in early September so some families begin heading home. If you are flexible, late
		August offers peak-quality weather with just a hint of shoulder-season availability.
	</p>

	<h2>September: The Local Favourite</h2>
	<p>
		Ask anyone who lives in the Okanagan and many will say September is their favourite month to
		visit Osoyoos. The crowds thin dramatically after Labour Day. The lake is still warm — usually
		20–22°C through mid-September. The desert landscape turns golden. And harvest season begins,
		which means the wineries are at their most interesting and atmospheric.
	</p>
	<p>
		Accommodation is easier to find and rates drop. The Farmers' Market is still running with peak
		local produce. The pace slows to something genuinely relaxing. If you can travel outside the
		school year, September is hard to argue against.
	</p>

	<h2>October and Beyond: Quiet, Cool, Beautiful</h2>
	<p>
		October sees the desert landscape at its most dramatic — the hills go amber and rust, the light
		is golden, and the area feels like a different place entirely. Daytime temperatures are still
		pleasant (15–20°C), though the lake is too cold for most swimmers.
	</p>
	<p>
		This is wine-touring season. Most motels begin closing for the season in October, so check
		availability before planning a late-season trip. For those who come, the Okanagan fall is
		quietly spectacular.
	</p>

	<h2>Quick Reference</h2>
	<ul>
		<li><strong>Best for families with kids:</strong> July or early August</li>
		<li><strong>Best for warm-water swimming:</strong> July through mid-September</li>
		<li><strong>Best for wine touring:</strong> September–October (harvest), or May–June</li>
		<li><strong>Best value:</strong> May, June, or September after Labour Day</li>
		<li><strong>Avoid if you hate crowds:</strong> Canada Day and BC Day long weekends</li>
		<li><strong>Book furthest ahead for:</strong> Canada Day weekend (book 3–4 months out)</li>
	</ul>

	<p>
		Falcon Resort and Spanish Fiesta Resort operate seasonally, typically May through September.
		Call us to check current availability — we can often tell you which dates still have rooms and
		help you pick the best week for what you have in mind.
	</p>
</GuideLayout>
