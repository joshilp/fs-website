<script lang="ts">
	import GuideLayout from '$lib/components/GuideLayout.svelte';
	import { guides } from '$lib/data/guides.js';
	const guide = guides.find((g) => g.slug === 'osoyoos-weather-by-month')!;
</script>

<GuideLayout {guide}>
	<p>
		Osoyoos has one of the most distinctive climates in Canada. Sitting in a semi-arid desert basin
		at the southern tip of the Okanagan, it receives more sunshine than almost anywhere in the
		country, has genuine summer heat, and mild winters by BC standards. Here is a month-by-month
		breakdown to help you pack appropriately and plan your visit.
	</p>

	<h2>January and February</h2>
	<p>
		<strong>Average highs:</strong> 2–5°C &nbsp;|&nbsp; <strong>Average lows:</strong> -5 to -8°C
	</p>
	<p>
		Osoyoos winters are cold but not severe by Canadian standards. Snow falls but rarely
		accumulates heavily in town — the surrounding hills get more. The lake does not freeze. These
		are the quietest months; most seasonal businesses are closed. The desert landscape in winter is
		stark and beautiful, though there is not much to do for the average visitor.
	</p>

	<h2>March</h2>
	<p>
		<strong>Average highs:</strong> 9–12°C &nbsp;|&nbsp; <strong>Average lows:</strong> -1 to 2°C
	</p>
	<p>
		Early spring arrives quickly in Osoyoos relative to the rest of BC. Sunny days appear, the
		desert starts blooming with early wildflowers, and the light is good. Still too cold for
		swimming or wine-touring comfort, but a pleasant time for hiking.
	</p>

	<h2>April</h2>
	<p>
		<strong>Average highs:</strong> 16–19°C &nbsp;|&nbsp; <strong>Average lows:</strong> 4–7°C
	</p>
	<p>
		April is when the valley comes alive. Blossoms appear on the fruit trees and in the vineyards.
		Daytime temperatures are comfortable for walking and cycling. The lake is still cold (around
		10–12°C). Wineries are reopening for the season. Accommodation is cheap and available.
	</p>

	<h2>May</h2>
	<p>
		<strong>Average highs:</strong> 22–25°C &nbsp;|&nbsp; <strong>Average lows:</strong> 8–11°C
	</p>
	<p>
		May is the beginning of proper Osoyoos weather. Warm, sunny days, cool evenings, and the town
		beginning to wake up for the season. The lake reaches 14–18°C — manageable for a dip on a hot
		afternoon but not yet ideal for extended swimming. The Farmers' Market starts. A great month
		for wine touring, hiking, and cycling.
	</p>

	<h2>June</h2>
	<p>
		<strong>Average highs:</strong> 27–30°C &nbsp;|&nbsp; <strong>Average lows:</strong> 12–15°C
	</p>
	<p>
		Lake temperature climbs to 18–22°C and swimming becomes genuinely comfortable. Long days, warm
		evenings, and the full Osoyoos experience without the peak-season crowd pressure. One of the
		best months to visit if you can go before the school-holiday rush.
	</p>

	<h2>July</h2>
	<p>
		<strong>Average highs:</strong> 33–38°C &nbsp;|&nbsp; <strong>Average lows:</strong> 17–20°C
	</p>
	<p>
		Peak summer. The lake hits 24–26°C. Days are hot — genuinely desert-hot — and the town is at
		maximum energy. Canada Day (July 1) and the weeks surrounding it are the busiest of the year.
		Pack light, breathable clothing, serious sunscreen, and a hat. Evenings cool to a comfortable
		range.
	</p>
	<p>
		<strong>What to pack:</strong> Light clothing, swimwear, strong sunscreen (SPF 50+), wide-brim
		hat, sunglasses, reusable water bottle, sandals for the beach.
	</p>

	<h2>August</h2>
	<p>
		<strong>Average highs:</strong> 32–37°C &nbsp;|&nbsp; <strong>Average lows:</strong> 16–19°C
	</p>
	<p>
		Near-identical to July. BC Day long weekend (first Monday in August) is another surge of
		visitors. Late August starts to feel slightly less intense, and a week after BC Day you might
		notice a subtle easing of the crowds. Still genuinely hot; the same packing advice applies.
	</p>

	<h2>September</h2>
	<p>
		<strong>Average highs:</strong> 24–28°C &nbsp;|&nbsp; <strong>Average lows:</strong> 10–13°C
	</p>
	<p>
		After Labour Day, Osoyoos exhales. Temperatures are warm but not extreme. The lake holds at
		18–22°C through mid-month. Harvest season in wine country begins. Evenings are noticeably
		cooler — bring a light jacket for after dark. One of the best months to visit.
	</p>
	<p>
		<strong>What to pack:</strong> Swimwear (still useful), light daytime layers, a fleece or
		light jacket for evenings, comfortable walking shoes for winery visits.
	</p>

	<h2>October</h2>
	<p>
		<strong>Average highs:</strong> 14–18°C &nbsp;|&nbsp; <strong>Average lows:</strong> 4–7°C
	</p>
	<p>
		The Okanagan fall is genuinely beautiful — the vines turn amber and gold, the light is warm
		and low, and the desert hills take on a different colour entirely. Too cold for beach swimming
		but excellent for wine touring and hiking. Most seasonal accommodation closes during October.
	</p>

	<h2>November and December</h2>
	<p>
		<strong>Average highs:</strong> 5–8°C &nbsp;|&nbsp; <strong>Average lows:</strong> -2 to 1°C
	</p>
	<p>
		The quiet season. Short days, cold nights, and a significantly reduced town. Not a tourist
		destination in these months, but the landscape has its own austere appeal and a few wineries
		remain open for tasting.
	</p>

	<h2>Sunshine Hours</h2>
	<p>
		Osoyoos averages over 2,000 sunshine hours per year — among the highest in Canada. Even in
		the shoulder months of May and September, sunny days are the norm rather than the exception.
		This is part of why the lake warms up so effectively: sustained solar energy over the long
		desert summer.
	</p>

	<p>
		For most visitors planning a summer stay, the Osoyoos weather is reliable and genuinely
		excellent. Falcon Resort and Spanish Fiesta Resort are open seasonally from May through
		September — call us to check current availability and we will help you pick the best week.
	</p>
</GuideLayout>
