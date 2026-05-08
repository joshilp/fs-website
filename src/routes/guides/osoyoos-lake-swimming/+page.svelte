<script lang="ts">
	import GuideLayout from '$lib/components/GuideLayout.svelte';
	import { guides } from '$lib/data/guides.js';
	const guide = guides.find((g) => g.slug === 'osoyoos-lake-swimming')!;
</script>

<GuideLayout {guide}>
	<p>
		Osoyoos Lake is the warmest freshwater lake in Canada. That is not a marketing tagline — it is
		a measurable, consistent fact rooted in geography. The lake sits at the southern tip of British
		Columbia's Okanagan Valley, in a semi-arid desert basin that receives more sun and heat than
		anywhere else in the country. The result is a swimming experience that surprises most first-time
		visitors: warm, clear, calm water with a sandy bottom, in a landscape that looks nothing like
		what most Canadians picture when they think of swimming.
	</p>

	<h2>Water Temperature by Month</h2>
	<p>
		Lake temperature varies significantly through the season. Here is a general guide based on
		typical conditions:
	</p>
	<ul>
		<li><strong>May:</strong> 14–18°C — cool, manageable for a dip on a hot day</li>
		<li><strong>June:</strong> 18–22°C — comfortable swimming, good for active swimmers</li>
		<li>
			<strong>July:</strong> 22–26°C — peak warmth, comfortable for extended time in the water
		</li>
		<li><strong>August:</strong> 22–25°C — still excellent, very similar to July</li>
		<li><strong>September:</strong> 18–22°C — cooling gradually, still pleasant through mid-month</li>
		<li>
			<strong>October:</strong> 12–16°C — cold for most swimmers, though hardy open-water swimmers
			still go in
		</li>
	</ul>
	<p>
		Temperatures fluctuate with air temperature and wind. After a stretch of very hot days, the
		surface water can warm a degree or two above these averages. A cool, windy spell has the
		opposite effect.
	</p>

	<h2>The Beach: What Makes It Special</h2>
	<p>
		The private beach at Falcon Resort and Spanish Fiesta Resort is directly on the lake on Main
		Street. What sets Osoyoos Lake apart from most freshwater swimming destinations is the bottom:
		flat, sandy, and gently sloping for a very long distance from shore. You can walk 500 feet
		into the lake and still stand on the bottom. There is no sudden drop, no rocky shelf, and no
		cold thermocline close to shore.
	</p>
	<p>
		For families with young children, this is a significant safety advantage. Children can wade
		and play in water at knee or hip depth well away from shore without any risk of stepping into
		deep water. The lake is also remarkably calm — there are no tides, and wind-driven waves are
		small and gentle.
	</p>

	<h2>Water Quality</h2>
	<p>
		Osoyoos Lake is closely monitored for water quality by provincial and regional authorities.
		Historically the lake has experienced some algae growth on the southern end in very hot summers,
		but conditions vary year to year and most visitors encounter no issues. Current water quality
		reports are available through the Regional District of Okanagan-Similkameen. In practical
		terms, the swimming beach sees tens of thousands of visitors every summer without incident.
	</p>

	<h2>Public Beaches vs Private Beach</h2>
	<p>
		Osoyoos has several town beaches that are open to the public, including Gyro Park on the north
		side of town. These are well-maintained and popular. The beach at Falcon Resort and Spanish
		Fiesta Resort is private — accessible to guests of both properties — which means significantly
		fewer people sharing the space. In peak July weekends, that distinction becomes meaningful.
	</p>

	<h2>Watersports on the Lake</h2>
	<p>
		The calm, warm water makes Osoyoos Lake ideal for more than swimming. Common activities on
		the water include:
	</p>
	<ul>
		<li>Stand-up paddleboarding (SUP) — very popular due to flat conditions</li>
		<li>Kayaking and canoeing — rentals available in town</li>
		<li>Wakeboarding and waterskiing — motorboat rentals available</li>
		<li>Fishing — bass, carp, and perch; BC freshwater licence required</li>
		<li>Windsurfing — afternoon winds create decent conditions</li>
	</ul>

	<h2>Tips for Swimming in Osoyoos Lake</h2>
	<ul>
		<li>
			<strong>Morning swims</strong> are calm and often the most pleasant. Wind picks up in the
			afternoon on many summer days.
		</li>
		<li>
			<strong>Sunscreen is non-negotiable.</strong> The Okanagan sun is intense and reflects off
			the water. Apply before you go in, not after.
		</li>
		<li>
			<strong>Water shoes</strong> are useful near some parts of the public beach where small rocks
			appear near the waterline, but the main resort beach is sandy.
		</li>
		<li>
			<strong>Children should be supervised</strong> even though the water is gentle — this is true
			of any open-water swimming.
		</li>
		<li>
			<strong>The pool is a good backup</strong> when the lake is too windy or choppy, which can
			happen on breezy July afternoons.
		</li>
	</ul>

	<p>
		The beach at Falcon Resort and Spanish Fiesta Resort is steps from the rooms. Pull up a lounge
		chair, walk into the water, and understand immediately why Osoyoos gets so many repeat visitors.
	</p>
</GuideLayout>
