<script lang="ts">
	import GuideLayout from '$lib/components/GuideLayout.svelte';
	import { guides } from '$lib/data/guides.js';
	const guide = guides.find((g) => g.slug === 'osoyoos-weekend-itinerary')!;
</script>

<GuideLayout {guide}>
	<p>
		Two days in Osoyoos is enough to feel the rhythm of the place — a morning at the beach, an
		afternoon in wine country, a good dinner, and a slower second day that reminds you why people
		come back every summer. Here is a practical two-day itinerary that balances the best of what
		the area offers without overloading the schedule.
	</p>

	<h2>Day One: Beach, Town, and Wine</h2>

	<h3>Morning — The Beach</h3>
	<p>
		Start early at the beach. Mornings on Osoyoos Lake are calm and clear, the air is warm but not
		yet oppressive, and the water is at its most still. Spend a couple of hours swimming, paddling,
		or simply sitting in the sun with coffee. If you are staying at Falcon Resort or Spanish Fiesta
		Resort, the beach is steps from your room.
	</p>
	<p>
		If you have paddleboard or kayak rentals on your list, mornings are the best time — wind
		typically picks up after noon, which makes paddling harder and choppier.
	</p>

	<h3>Late Morning — Osoyoos Farmers' Market (Saturdays)</h3>
	<p>
		If you are there on a Saturday, the Osoyoos Farmers' Market runs on Main Street through the
		summer season. It is a 30-to-45-minute browse — fresh fruit, local honey, baked goods, craft
		vendors, occasionally live music. Good for picking up snacks or lunch supplies.
	</p>

	<h3>Afternoon — Wine Country</h3>
	<p>
		Spend the afternoon on a winery run. The Golden Mile Bench and Black Sage Road are both within
		15–20 minutes of Main Street. A practical route: head north on Highway 97, turn onto Black
		Sage Road, stop at Road 13 Vineyards, then continue north toward Oliver for Tinhorn Creek on
		the Golden Mile Bench. Allow 45–60 minutes per stop if you want to taste properly and enjoy
		the setting.
	</p>
	<p>
		<strong>Nk'Mip Cellars</strong> is the exception — it is right in Osoyoos, less than five
		minutes from Main Street, and worth going early or late if the afternoon run feels like too
		much driving.
	</p>

	<h3>Evening — Dinner in Osoyoos</h3>
	<p>
		Return to Main Street for dinner. Osoyoos has a solid selection of restaurants within walking
		distance of the lake — Greek food, pizza, steaks, and a few spots with good patios. Ask at the
		office when you check in for current recommendations; what is good changes season to season and
		we know what is actually worth going to right now.
	</p>
	<p>
		After dinner, the lake at dusk is worth a short walk. The desert hills turn orange and red, the
		water reflects the sky, and the temperature drops to something genuinely comfortable.
	</p>

	<h2>Day Two: Desert, Culture, and the Lake Again</h2>

	<h3>Morning — Nk'Mip Desert Cultural Centre</h3>
	<p>
		Dedicate the morning to the Nk'Mip Desert Cultural Centre. Arrive when it opens to beat the
		midday heat. The interpretive trails through the desert take about an hour at a relaxed pace;
		the indoor exhibits and the rattlesnake habitat add another 30–45 minutes. The cultural context
		— the Syilx First Nations history of the Okanagan and the ecology of Canada's only pocket
		desert — makes this a more substantive experience than it might sound from the description.
	</p>

	<h3>Midday — Haynes Point Provincial Park</h3>
	<p>
		Head to Haynes Point on the south end of Osoyoos Lake. The narrow spit of land has beaches on
		both sides, easy walking paths, and excellent bird watching. It is flat, accessible, and one
		of the most ecologically interesting spots in the South Okanagan. Bring a picnic and spend an
		hour or two.
	</p>

	<h3>Afternoon — Back to the Beach</h3>
	<p>
		Return to the resort for the afternoon. By this point in a summer weekend the lake temperature
		has warmed from the morning, the pools are inviting, and there is nowhere better to be than in
		or near the water. A nap in the sun, a long swim, and the hot tub before heading out count as
		a legitimate afternoon plan.
	</p>

	<h3>Evening — Last Dinner and the Drive Home</h3>
	<p>
		Check out after a relaxed morning on day two or stay for a final dinner before the drive. If
		you are heading to Vancouver, allow four hours via Highway 3. If heading to Kelowna, it is
		about 2.5 hours north on Highway 97.
	</p>

	<h2>What to Pack for a Weekend in Osoyoos</h2>
	<ul>
		<li>Sunscreen — more than you think you need</li>
		<li>Swimwear and a beach towel (or ask us — we can advise on towel rentals)</li>
		<li>A sun hat and sunglasses</li>
		<li>Light layers for evenings — it cools significantly after sunset in the desert</li>
		<li>Walking shoes for the desert trails</li>
		<li>A reusable water bottle — hydration matters in 38°C heat</li>
		<li>Cash for the Farmers' Market (most vendors prefer it)</li>
	</ul>

	<p>
		Falcon Resort and Spanish Fiesta Resort are on Main Street — the right base for this itinerary.
		Everything above is within walking distance or a short drive. Call us to check availability and
		we will find you the right room.
	</p>
</GuideLayout>
