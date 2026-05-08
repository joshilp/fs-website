<script lang="ts">
	import GuideLayout from '$lib/components/GuideLayout.svelte';
	import { guides } from '$lib/data/guides.js';
	const guide = guides.find((g) => g.slug === 'osoyoos-vs-penticton-vs-kelowna')!;
</script>

<GuideLayout {guide}>
	<p>
		The Okanagan Valley offers several distinct destinations, and choosing between them is a real
		decision — they have genuinely different characters, strengths, and price points. Here is an
		honest comparison of the three most popular options to help you decide where to base your trip.
	</p>

	<h2>Osoyoos</h2>
	<p>
		<strong>Best for:</strong> Families with young children, warm-water swimming, wine touring, a
		quieter pace with easy access to everything.
	</p>
	<p>
		Osoyoos is the southernmost town in the Okanagan, sitting in Canada's only pocket desert at
		the tip of the valley. The lake is warmer than anywhere else in Canada, the beach is shallow
		and sandy, and the town is small enough to walk everywhere. It is not a party destination — it
		is a genuine summer resort town with a loyal following of families and couples who come back
		year after year.
	</p>
	<p>
		The wine country is right on the doorstep. The Nk'Mip Desert Cultural Centre is one of the
		most interesting attractions in the whole valley. And the overall pace of the place — relaxed,
		sunny, unhurried — is difficult to find elsewhere.
	</p>
	<p>
		The trade-off: Osoyoos is smaller than Kelowna, with fewer restaurants and nightlife options.
		If you want a big urban buzz alongside your beach time, you will feel the size. But if your
		goal is warmth, water, and wine without the noise, Osoyoos is hard to beat.
	</p>

	<h2>Penticton</h2>
	<p>
		<strong>Best for:</strong> Young adults, the beach-bar crowd, canal floating, active travelers
		who want more nightlife alongside beach time.
	</p>
	<p>
		Penticton sits between Skaha Lake to the south and Okanagan Lake to the north, giving it two
		beaches and the famous Penticton Channel — a lazy river between the two lakes that visitors
		float on tubes in summer. The vibe is livelier than Osoyoos, with more bars, a larger
		restaurant scene, and a young, social crowd.
	</p>
	<p>
		The Naramata Bench wineries just north of Penticton are excellent — a different style from the
		South Okanagan, with a stronger Pinot Noir and Chardonnay presence. The Iron Horse Trail and
		cycling routes are popular. Penticton is also closer to Kelowna by about an hour.
	</p>
	<p>
		The trade-off: Okanagan Lake is large and beautiful but not as warm as Osoyoos Lake. Skaha
		Lake is warmer and calmer, which makes the south side of town better for swimming. The town
		itself is busier and more congested in peak summer.
	</p>

	<h2>Kelowna</h2>
	<p>
		<strong>Best for:</strong> People who want a city with a beach — restaurants, shopping, a
		proper urban core, and water access without sacrificing amenities.
	</p>
	<p>
		Kelowna is the Okanagan's largest city and the regional hub for everything. It has the most
		restaurants, the broadest accommodation range, a proper arts and culture scene, and the biggest
		annual events. Okanagan Lake is enormous and the waterfront is genuinely beautiful — City Park
		beach is the centre of summer life.
	</p>
	<p>
		The wine country around Kelowna — the Kelowna, East Kelowna, and Lake Country sub-regions —
		is excellent, with some of the valley's most established estates. The drive from Kelowna south
		to Oliver and Osoyoos passes through the heart of the entire wine trail.
	</p>
	<p>
		The trade-off: Okanagan Lake is large and deep, and the water is noticeably cooler than
		Osoyoos Lake. Summer peak-season traffic in Kelowna is significant. Accommodation prices are
		high. And the city feel, while appealing to many, means you lose the quiet lake-town character
		that makes Osoyoos and to some extent Penticton distinctive.
	</p>

	<h2>Side by Side</h2>
	<ul>
		<li>
			<strong>Warmest water:</strong> Osoyoos — it is not close
		</li>
		<li>
			<strong>Best beach for young children:</strong> Osoyoos — shallow, sandy, calm
		</li>
		<li>
			<strong>Best nightlife and restaurants:</strong> Kelowna
		</li>
		<li>
			<strong>Best wine country access:</strong> Osoyoos and Oliver area for reds; Naramata for
			Pinot
		</li>
		<li>
			<strong>Quietest and most relaxed:</strong> Osoyoos
		</li>
		<li>
			<strong>Easiest to get to from Vancouver:</strong> Kelowna (flights), Osoyoos (direct drive)
		</li>
		<li>
			<strong>Best value accommodation:</strong> Osoyoos, particularly outside peak weekends
		</li>
	</ul>

	<h2>Can You Do All Three?</h2>
	<p>
		The Okanagan Valley is long but connected — Osoyoos to Kelowna is about 2.5 hours by car. A
		week-long trip can reasonably base in one location and do day trips to the others, or split
		nights between two towns. Many visitors base in Osoyoos and drive north through wine country
		toward Kelowna, returning for multiple nights.
	</p>
	<p>
		If you are spending most of your time on the water and want the warmest possible swimming,
		Osoyoos is the right base. Falcon Resort and Spanish Fiesta Resort are right on Main Street —
		steps from the lake beach, a short drive from the wine routes, and well-placed for any
		itinerary through the South Okanagan.
	</p>
</GuideLayout>
