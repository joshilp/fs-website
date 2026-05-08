<script lang="ts">
	import GuideLayout from '$lib/components/GuideLayout.svelte';
	import { guides } from '$lib/data/guides.js';

	const guide = guides.find((g) => g.slug === 'things-to-do-osoyoos')!;
</script>

<GuideLayout {guide}>
	<p>
		Osoyoos sits at the southern tip of British Columbia's Okanagan Valley — a place where Canada's
		only pocket desert meets the country's warmest freshwater lake. With over 200 days of sunshine
		per year, hot dry summers, and a landscape straight out of the American Southwest, Osoyoos has
		become one of BC's most popular summer destinations.
	</p>
	<p>
		Whether you're coming for the beach, the wine, or just to slow down in the sun, there's more to
		do here than most people expect from a town this size. Here's a local guide to making the most
		of your time in Osoyoos.
	</p>

	<h2>Swimming at Osoyoos Lake</h2>
	<p>
		The lake is the reason most people come — and it deserves the reputation. Osoyoos Lake is the
		warmest freshwater lake in Canada, regularly reaching 24°C (75°F) or warmer at the surface
		during July and August. It stays swimmable well into September.
	</p>
	<p>
		What makes it especially good for families is the bottom. The lake has a long, gently sloping
		sandy floor — you can walk hundreds of feet from shore and still touch the bottom. There's no
		sudden drop, no rocky shelf, no surprise cold current. It's genuinely one of the safest lake
		swimming experiences in western Canada.
	</p>
	<p>
		The private beach at Falcon Resort and Spanish Fiesta Resort sits right on the lake on Main
		Street — steps from the rooms, with lounge chairs and a dock. Town beaches are also nearby and
		easily walkable.
	</p>

	<h2>South Okanagan Wine Country</h2>
	<p>
		Osoyoos is the heart of the South Okanagan wine region — one of the most distinctive wine
		appellations in Canada. The desert climate, sandy soil, and extreme sun exposure produce
		wines unlike anything grown in cooler parts of the country, with Syrah, Merlot, Cabernet
		Sauvignon, and Viognier all thriving here.
	</p>
	<p>
		There are more than 30 wineries within a short drive of town. A few worth building your day
		around:
	</p>
	<ul>
		<li>
			<strong>Nk'Mip Cellars</strong> — Canada's first Indigenous-owned winery, at the edge of the
			desert. The tasting room and views are exceptional.
		</li>
		<li>
			<strong>Burrowing Owl Estate Winery</strong> — a top-tier estate in Oliver, about 20 minutes
			north. Reserve ahead for lunch at the Sonora Room.
		</li>
		<li>
			<strong>Tinhorn Creek</strong> — consistent quality and a beautiful hilltop setting with views
			across the valley.
		</li>
		<li>
			<strong>Road 13 Vineyards</strong> — excellent reds and a relaxed atmosphere on the Golden
			Mile Bench.
		</li>
	</ul>
	<p>
		Most wineries are concentrated along the Golden Mile Bench south of Oliver and along Black Sage
		Road — both an easy drive north from Osoyoos on Highway 97. Many offer tastings without
		reservations, though calling ahead for a tour is worth doing in peak season.
	</p>

	<h2>Nk'Mip Desert Cultural Centre</h2>
	<p>
		One of the most unique attractions in the South Okanagan, the Nk'Mip Desert Cultural Centre
		celebrates the history and culture of the Osoyoos Indian Band and the ecology of Canada's only
		true desert ecosystem — the northern tip of the Great Basin Desert.
	</p>
	<p>
		Interpretive trails wind through the desert, a reconstructed Syilx village is open for tours,
		and exhibits tell the story of the people who have lived here for thousands of years. There's
		also a rattlesnake habitat (safely enclosed) that kids find fascinating. Allow two to three
		hours. The centre is located right in Osoyoos.
	</p>

	<h2>Watersports on the Lake</h2>
	<p>
		Beyond swimming, the lake is popular for kayaking, stand-up paddleboarding, canoeing, and
		wakeboarding. Rentals are available at several spots along the waterfront and through local
		outfitters in town. The lake is large enough for serious boating but calm enough for beginners
		— wind typically picks up in the afternoons, which also makes it popular with windsurfers.
	</p>
	<p>
		Fishing is also good — Osoyoos Lake is known for bass, carp, and perch. A BC freshwater fishing
		licence is required and available online through the provincial government.
	</p>

	<h2>Cycling and Hiking</h2>
	<p>
		The South Okanagan has some excellent trail networks for both road cycling and mountain biking.
		The <strong>International Bicycling and Hiking Trail</strong> runs along the eastern edge of
		Osoyoos Lake, connecting to the larger Okanagan Rail Trail system. It's paved, flat, and
		suitable for all fitness levels.
	</p>
	<p>
		For hiking, the <strong>Nk'Mip Desert trails</strong> are a short walk from the cultural
		centre. The <strong>Haynes Point Provincial Park</strong> on the south end of the lake has easy
		lakeside walking paths and great bird watching — it's one of the most ecologically unique parks
		in BC.
	</p>

	<h2>Dining and the Saturday Farmers' Market</h2>
	<p>
		Main Street has a solid selection of restaurants within walking distance of the lake. You'll
		find a mix of casual lakeside spots, pizza, Greek food, and a few places doing local wine
		pairings. The best dining experience changes season to season, so ask the office when you
		check in — staff know what's good right now.
	</p>
	<p>
		The <strong>Osoyoos Saturday Farmers' Market</strong> runs on Main Street from late spring
		through the fall. Local produce, baked goods, artisan vendors, and live music. If you're here
		on a Saturday morning, it's worth a walk through.
	</p>

	<h2>Day Trips from Osoyoos</h2>
	<p>
		Osoyoos is a natural base for exploring the wider region. A few easy day trips:
	</p>
	<ul>
		<li>
			<strong>Oliver</strong> — 20 minutes north, the self-declared "Wine Capital of Canada" with
			more wineries and the Golden Mile Bench.
		</li>
		<li>
			<strong>Penticton</strong> — 50 minutes north, with a different beach scene and Naramata Bench
			wineries.
		</li>
		<li>
			<strong>Keremeos</strong> — 45 minutes west, famous for roadside fruit stands and one of the
			best fruit-growing microclimates in BC.
		</li>
		<li>
			<strong>Cathedral Provincial Park</strong> — 90 minutes via Keremeos, dramatic alpine hiking
			well above the valley heat. Worth the drive for the views.
		</li>
	</ul>

	<hr />

	<p>
		Falcon Resort and Spanish Fiesta Resort are on Main Street in Osoyoos — right in the middle of
		everything. Both properties are within walking distance of the Saturday market, town restaurants,
		and the marina, and a short drive from all of the above. If you have questions about what to do
		or where to eat during your stay, just ask at the office.
	</p>
</GuideLayout>
