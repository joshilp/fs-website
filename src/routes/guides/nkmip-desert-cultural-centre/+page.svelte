<script lang="ts">
	import GuideLayout from '$lib/components/GuideLayout.svelte';
	import { guides } from '$lib/data/guides.js';
	const guide = guides.find((g) => g.slug === 'nkmip-desert-cultural-centre')!;
</script>

<GuideLayout {guide}>
	<p>
		The Nk'Mip Desert Cultural Centre is one of the most genuinely interesting attractions in
		British Columbia, and it is right in Osoyoos. It combines First Nations cultural history with
		desert ecology in a setting that feels unlike anywhere else in Canada — which makes sense,
		because the landscape itself is unlike anywhere else in Canada.
	</p>

	<h2>What Is Nk'Mip?</h2>
	<p>
		Nk'Mip (pronounced "Inkameep") is a Syilx word referring to the land at the bottom of the
		lake. The Osoyoos Indian Band has occupied this territory for thousands of years, and the
		cultural centre — opened in 2000 — was built to share that history with visitors while also
		protecting and interpreting the ecology of Canada's only true pocket desert.
	</p>
	<p>
		The facility is owned and operated by the Osoyoos Indian Band, which also operates Nk'Mip
		Cellars (the winery adjacent to the centre) and the Spirit Ridge Resort. Visiting here
		contributes directly to the community.
	</p>

	<h2>What to See and Do</h2>

	<h3>The Interpretive Desert Trails</h3>
	<p>
		The outdoor trail network winds through genuine antelope brush desert — a semi-arid ecosystem
		that barely clings to existence in Canada, reaching its northernmost point here in Osoyoos. The
		trails are well-marked, mostly flat, and take about 45–60 minutes to walk at a comfortable
		pace.
	</p>
	<p>
		Along the trails you will encounter native plants (antelope brush, ponderosa pine, big
		sagebrush), desert birds, lizards, and the kind of stark, sun-bleached beauty that surprises
		most BC visitors who associate the province with forests and mountains.
	</p>

	<h3>The Rattlesnake Habitat</h3>
	<p>
		The western rattlesnake is native to this part of the Okanagan, and Nk'Mip has a safely
		enclosed outdoor habitat where you can see them up close. This is reliably the most popular
		feature for children and one of the more memorable things to see in the valley. The snakes are
		active and clearly visible — not hidden behind rocks — and the context provided makes it an
		educational experience rather than just novelty.
	</p>
	<p>
		Western rattlesnakes are rarely seen in the wild outside protected areas; this may be your only
		chance to see one safely.
	</p>

	<h3>The Reconstructed Syilx Village</h3>
	<p>
		A partial reconstruction of a traditional Syilx winter village demonstrates how the Okanagan
		people lived before European contact — semi-subterranean pit houses ("kekuli"), outdoor
		structures, and artifacts explaining seasonal life in this landscape. Guided tours are available
		and add significant depth to the experience.
	</p>

	<h3>Indoor Exhibits</h3>
	<p>
		The main building houses exhibits covering Syilx culture, oral traditions, the history of
		colonization and its effects on the band, and the current ecological state of the desert. The
		presentation is honest and well-produced — not sanitized for tourism, but accessible to all
		ages.
	</p>

	<h2>Nk'Mip Cellars</h2>
	<p>
		Adjacent to the cultural centre is Nk'Mip Cellars, Canada's first Indigenous-owned and
		operated winery. The tasting room overlooks the desert and Osoyoos Lake. Their Syrah and
		Merlot are among the best in the region. Many visitors combine the cultural centre and a
		winery tasting in a single half-day visit.
	</p>

	<h2>Practical Information</h2>
	<ul>
		<li>
			<strong>Location:</strong> 1000 Rancher Creek Road, Osoyoos, BC — about 5 minutes from Main
			Street
		</li>
		<li>
			<strong>Hours:</strong> Seasonal — generally open daily from May through October, mornings to
			late afternoon. Check the official website for current hours before visiting.
		</li>
		<li>
			<strong>Admission:</strong> Charged per adult and child; children under a certain age are
			free. Current pricing is on their website.
		</li>
		<li>
			<strong>Best time to visit:</strong> Morning, before the desert heat peaks. The trails are
			exposed — arrive early and bring water.
		</li>
		<li>
			<strong>Allow:</strong> 2–3 hours for the full experience including trails, exhibits, and
			rattlesnake habitat. Add an hour if you are doing the winery tasting.
		</li>
		<li>
			<strong>Accessibility:</strong> The main building and some trail sections are accessible;
			check with the centre if mobility is a concern.
		</li>
	</ul>

	<p>
		The Nk'Mip Desert Cultural Centre is a short drive from Falcon Resort and Spanish Fiesta
		Resort on Main Street. It fits easily into a morning before returning to the beach for the
		afternoon — one of the better ways to structure a day in Osoyoos.
	</p>
</GuideLayout>
