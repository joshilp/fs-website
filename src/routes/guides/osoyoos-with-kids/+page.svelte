<script lang="ts">
	import GuideLayout from '$lib/components/GuideLayout.svelte';
	import { guides } from '$lib/data/guides.js';
	const guide = guides.find((g) => g.slug === 'osoyoos-with-kids')!;
</script>

<GuideLayout {guide}>
	<p>
		Osoyoos is one of the best family beach destinations in western Canada — and it is genuinely
		underappreciated by families who default to ocean beaches or busier lake towns. The combination
		of Canada's warmest freshwater lake, a shallow sandy bottom, desert terrain, and a small
		walkable town makes it unusually well-suited for a trip with children of any age.
	</p>

	<h2>The Beach: Why It's So Good for Kids</h2>
	<p>
		The private beach at Falcon Resort and Spanish Fiesta Resort on Osoyoos Lake is genuinely
		exceptional for young children. The lake bottom is flat, sandy, and gently sloping — there is
		no sudden drop-off, no rocky ledge, and no cold undercurrent. You can walk 500 feet from shore
		and still have the water at chest height for an adult, which means toddlers and young swimmers
		are safe to play in the shallows for hours.
	</p>
	<p>
		The water temperature hits 24–26°C in July and August, so kids stay in without complaint.
		There is no saltwater sting, no jellyfish, no strong waves. Just warm, clear, flat water with
		a sandy bottom. For young children especially, it is close to an ideal swimming environment.
	</p>

	<h2>Pool and Hot Tub</h2>
	<p>
		Both properties have their own outdoor swimming pool, which is a useful alternative when the
		beach is busy or when smaller children want something more contained. The pools are a short walk
		from the lake — some families alternate between pool and beach throughout the day, which works
		well with young kids who need rest breaks.
	</p>

	<h2>Nk'Mip Desert Cultural Centre</h2>
	<p>
		This is the standout family attraction in Osoyoos and one of the most interesting things to do
		in the South Okanagan regardless of age. The Nk'Mip (pronounced "Inkameep") Desert Cultural
		Centre sits at the edge of Canada's only pocket desert and combines Syilx First Nations history
		with genuine desert ecology.
	</p>
	<p>
		The rattlesnake exhibit is reliably popular with kids — the snakes are safely enclosed behind
		glass, which makes it an exciting rather than scary encounter. The interpretive desert trails
		are short and well-marked, suitable for most ages. Allow two to three hours. It is located
		right in Osoyoos, about a five-minute drive from Main Street.
	</p>

	<h2>Haynes Point Provincial Park</h2>
	<p>
		A narrow spit of land extending into Osoyoos Lake on the south end of town, Haynes Point is
		one of the most ecologically unique provincial parks in BC. It is flat, easy walking, and has
		its own sandy beach on both sides of the spit. The park is excellent for bird watching — over
		100 species have been recorded — and the setting is genuinely beautiful.
	</p>
	<p>
		The campground at Haynes Point is also an option if you are considering mixing a motel stay
		with a night under the stars, though it books up very quickly in summer.
	</p>

	<h2>Watersports and Rentals</h2>
	<p>
		Older children and teenagers tend to love the lake beyond just swimming. Kayak, paddleboard,
		and canoe rentals are available at several locations near the waterfront. For something more
		exciting, boat rentals and guided watersport sessions are available through local operators —
		ask at the office when you check in and we can point you toward current options.
	</p>

	<h2>The Saturday Farmers' Market</h2>
	<p>
		Running on Main Street from late spring through early fall, the Osoyoos Farmers' Market is a
		relaxed morning activity that most kids enjoy — fresh fruit, local food vendors, occasional
		live music, and a festival-like atmosphere without the crowds or cost of a formal event. It
		typically runs Saturday mornings.
	</p>

	<h2>Practical Tips for Families</h2>
	<ul>
		<li>
			<strong>Book July early.</strong> Families dominate July bookings and rooms go fast. Canada
			Day weekend especially — book months ahead.
		</li>
		<li>
			<strong>Bring shade.</strong> The Okanagan sun is intense. A beach tent or umbrella makes a
			big difference for younger children and fair-skinned families.
		</li>
		<li>
			<strong>Water shoes are useful</strong> in some parts of the lake where there are occasional
			small rocks near the waterline, though the main beach is sandy.
		</li>
		<li>
			<strong>Groceries are nearby.</strong> There is a Superstore and other grocery options in
			Osoyoos. Rooms with a kitchenette make self-catering easy — mention this when you call and
			we will try to accommodate.
		</li>
		<li>
			<strong>The heat is real.</strong> Osoyoos regularly hits 38°C in July. Mornings and early
			evenings are the most comfortable for active outdoor time. Midday is beach, pool, and
			shade time.
		</li>
	</ul>

	<p>
		Both Falcon Resort and Spanish Fiesta Resort are family-oriented properties. The beach, pools,
		and BBQ areas are set up for family use, and we are used to guests arriving with kids in tow.
		Call us to find the right room for your group size.
	</p>
</GuideLayout>
