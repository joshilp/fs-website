<script lang="ts">
	import GuideLayout from '$lib/components/GuideLayout.svelte';
	import { guides } from '$lib/data/guides.js';
	const guide = guides.find((g) => g.slug === 'driving-to-osoyoos-from-vancouver')!;
</script>

<GuideLayout {guide}>
	<p>
		The drive from Vancouver to Osoyoos is one of the most scenic in British Columbia — and at
		roughly 400 kilometres, it is a comfortable day trip or a leisurely drive with stops. There are
		two main route options, each with a different character. Here is what to know before you leave.
	</p>

	<h2>Route Option 1: Highway 3 (Crowsnest Pass) — The Direct Scenic Route</h2>
	<p>
		<strong>Distance:</strong> Approximately 400 km &nbsp;|&nbsp; <strong>Time:</strong> 4–4.5
		hours without stops
	</p>
	<p>
		The most direct route from Vancouver to Osoyoos is east on Highway 1 to Hope, then south and
		east on Highway 3 — the Crowsnest Pass route — through Manning Park and the Similkameen Valley,
		arriving in Osoyoos from the west.
	</p>
	<p>
		This route is genuinely spectacular. Manning Provincial Park offers subalpine scenery in the
		first hour after Hope. The highway then descends into the Similkameen Valley — drier, more
		golden, increasingly desert-like — passing through Keremeos before the final climb and drop
		into Osoyoos from the western bench.
	</p>
	<p>
		The road through Manning Park is winding and can be slow in summer behind RVs, but it is
		rarely a problem. The approach into Osoyoos on Highway 3 from the west offers one of the best
		first views of the valley — the lake, the desert hills, and the town laid out below.
	</p>
	<p>
		<strong>Best stops on Highway 3:</strong>
	</p>
	<ul>
		<li>
			<strong>Hope</strong> — the last city-scale stop for fuel, food, and coffee before the
			mountains. Top up the tank here.
		</li>
		<li>
			<strong>Manning Park Resort</strong> — worth a stop for a short walk or the views, especially
			if wildflowers are out (late June to July).
		</li>
		<li>
			<strong>Keremeos</strong> — "the fruit stand capital of Canada" is not an exaggeration.
			Roadside stands sell peaches, cherries, apricots, corn, and more in season. Stop and buy
			something. It is worth it.
		</li>
		<li>
			<strong>Spotted Lake</strong> — between Osoyoos and Keremeos, visible from the road. One
			of the more unusual natural features in BC — a saline lake with coloured mineral deposits.
			Pull over for a look.
		</li>
	</ul>

	<h2>Route Option 2: Highway 5 to Highway 97 — Faster, Less Scenic</h2>
	<p>
		<strong>Distance:</strong> Approximately 440 km &nbsp;|&nbsp; <strong>Time:</strong> 4–4.5
		hours without stops
	</p>
	<p>
		An alternative route takes Highway 1 east to Merritt, then south on Highway 97C (the Okanagan
		Connector) through Peachland and into the Okanagan, then south on Highway 97 through Penticton,
		Oliver, and into Osoyoos from the north.
	</p>
	<p>
		This route is faster on paper but involves more driving on multi-lane highway through a less
		distinctive landscape. It does, however, take you through the heart of Okanagan wine country —
		you can stop at Naramata Bench wineries near Penticton, or at Oliver and the Golden Mile Bench
		wineries before arriving in Osoyoos.
	</p>
	<p>
		If you want to do winery stops on the way down and use Osoyoos as your southernmost point,
		Highway 5 to 97 makes more logistical sense. If you just want to get to Osoyoos efficiently
		and the scenic drive itself is the experience, Highway 3 is better.
	</p>

	<h2>Leaving on a Long Weekend: Traffic Realities</h2>
	<p>
		On Canada Day weekend and BC Day weekend, Vancouver-to-Okanagan traffic is significant. The
		Highway 1 corridor from Vancouver to Hope is the main bottleneck.
	</p>
	<ul>
		<li>
			<strong>Leave Thursday evening or very early Friday morning</strong> if you are heading out
			for Canada Day weekend. Friday midday departure means sitting in traffic through Langley and
			Abbotsford.
		</li>
		<li>
			<strong>Return Tuesday</strong> rather than Sunday or Monday. The return traffic into
			Vancouver on Sunday and Monday evening of any long weekend is reliably bad.
		</li>
		<li>
			Drive BC's website and Google Maps traffic data are reliable for checking conditions before
			you leave.
		</li>
	</ul>

	<h2>Border Crossing Option</h2>
	<p>
		If you are driving from Washington State, Osoyoos sits directly at the Canada–US border at
		Osoyoos/Oroville. The Oroville crossing is typically less busy than Peace Arch or Huntingdon.
		From Seattle it is approximately a 4-hour drive via I-5 north and then US-97 north.
	</p>

	<h2>What to Know on Arrival</h2>
	<p>
		Osoyoos has a Superstore, gas stations, and basic services on arrival. If you are arriving late
		in the evening, top up your fuel in Keremeos (on Highway 3) or Oliver (on Highway 97) to be
		safe.
	</p>
	<p>
		Falcon Resort and Spanish Fiesta Resort are on Main Street — easy to find, right in the centre
		of Osoyoos. Free parking is available on site. Call ahead and we will let you know the check-in
		process for late arrivals.
	</p>
</GuideLayout>
