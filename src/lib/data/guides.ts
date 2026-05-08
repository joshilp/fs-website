// ============================================================
// Guides index — metadata for all area guide articles.
// To add a new article:
//   1. Create src/routes/guides/<slug>/+page.svelte
//   2. Add one entry to this array
// The guides index page and sitemap update automatically.
// ============================================================

export interface Guide {
	slug: string;
	title: string;
	/** Used for meta description and guide card preview */
	description: string;
	/** ISO date string: YYYY-MM-DD */
	publishedAt: string;
	updatedAt?: string;
	tags: string[];
	readingTimeMinutes: number;
}

export const guides: Guide[] = [
	{
		slug: 'things-to-do-osoyoos',
		title: 'Best Things to Do in Osoyoos, BC',
		description:
			"From swimming Canada's warmest lake to touring South Okanagan wineries — a complete local guide to activities, beaches, and dining in Osoyoos.",
		publishedAt: '2026-05-01',
		tags: ['osoyoos', 'activities', 'okanagan', 'family'],
		readingTimeMinutes: 6
	},
	{
		slug: 'best-time-to-visit-osoyoos',
		title: 'When Is the Best Time to Visit Osoyoos, BC?',
		description:
			'A month-by-month breakdown of weather, crowds, lake temperature, and events — so you can pick the perfect time for your Osoyoos trip.',
		publishedAt: '2026-05-02',
		tags: ['osoyoos', 'planning', 'seasonal'],
		readingTimeMinutes: 5
	},
	{
		slug: 'osoyoos-with-kids',
		title: 'Osoyoos with Kids: Family Activities and Beach Tips',
		description:
			"Canada's warmest lake, a shallow sandy beach, desert wildlife, and plenty to keep children busy all day. Here's how to plan a family trip to Osoyoos.",
		publishedAt: '2026-05-03',
		tags: ['osoyoos', 'family', 'kids', 'beach'],
		readingTimeMinutes: 5
	},
	{
		slug: 'south-okanagan-wineries-osoyoos',
		title: "South Okanagan Wineries Near Osoyoos: A Visitor's Guide",
		description:
			'Over 30 wineries within a short drive of Osoyoos — here are the best ones to visit, what to taste, and how to plan a wine tour from your motel.',
		publishedAt: '2026-05-04',
		tags: ['osoyoos', 'wineries', 'okanagan', 'wine'],
		readingTimeMinutes: 6
	},
	{
		slug: 'osoyoos-lake-swimming',
		title: 'Osoyoos Lake Swimming: Temperature, Beach Access & What to Expect',
		description:
			"Everything you need to know about swimming in Osoyoos Lake — water temperature by month, beach access, safety, and why it's the best freshwater swimming in Canada.",
		publishedAt: '2026-05-05',
		tags: ['osoyoos', 'lake', 'swimming', 'beach'],
		readingTimeMinutes: 4
	},
	{
		slug: 'osoyoos-vs-penticton-vs-kelowna',
		title: 'Osoyoos vs Penticton vs Kelowna: Where to Stay in the Okanagan?',
		description:
			'Choosing between Okanagan destinations? An honest comparison of Osoyoos, Penticton, and Kelowna to help you decide where to base your trip.',
		publishedAt: '2026-05-06',
		tags: ['osoyoos', 'okanagan', 'planning'],
		readingTimeMinutes: 5
	},
	{
		slug: 'osoyoos-weekend-itinerary',
		title: 'A Weekend in Osoyoos: The Ideal 2-Day Itinerary',
		description:
			'Make the most of two days in Osoyoos — beach mornings, winery afternoons, desert hikes, and the best spots to eat on Main Street.',
		publishedAt: '2026-05-07',
		tags: ['osoyoos', 'itinerary', 'weekend'],
		readingTimeMinutes: 5
	},
	{
		slug: 'nkmip-desert-cultural-centre',
		title: "Nk'Mip Desert Cultural Centre: What to Know Before You Go",
		description:
			"A visitor's guide to one of Canada's most unique attractions — the Nk'Mip Desert Cultural Centre in Osoyoos, BC.",
		publishedAt: '2026-05-08',
		tags: ['osoyoos', 'activities', 'culture', 'desert'],
		readingTimeMinutes: 4
	},
	{
		slug: 'osoyoos-in-september',
		title: 'Osoyoos in September: Is It Worth Visiting After Summer?',
		description:
			'Fewer crowds, warm water, harvest season, and wine country at its peak — September might actually be the best month to visit Osoyoos.',
		publishedAt: '2026-05-09',
		tags: ['osoyoos', 'seasonal', 'september'],
		readingTimeMinutes: 4
	},
	{
		slug: 'canada-day-osoyoos',
		title: 'Canada Day Weekend in Osoyoos: What to Expect',
		description:
			'Canada Day is one of the busiest weekends in Osoyoos. Here is what happens, how to make the most of it, and why you should book early.',
		publishedAt: '2026-05-10',
		tags: ['osoyoos', 'events', 'canada day'],
		readingTimeMinutes: 4
	},
	{
		slug: 'osoyoos-weather-by-month',
		title: 'Osoyoos Weather by Month: A Complete Planning Guide',
		description:
			'Month-by-month weather in Osoyoos, BC — temperatures, rainfall, lake conditions, and what to pack for every season in the South Okanagan.',
		publishedAt: '2026-05-11',
		tags: ['osoyoos', 'weather', 'planning'],
		readingTimeMinutes: 5
	},
	{
		slug: 'driving-to-osoyoos-from-vancouver',
		title: 'Driving to Osoyoos from Vancouver: Routes, Stops & Tips',
		description:
			'The drive from Vancouver to Osoyoos is one of the most scenic in BC. Here are your route options, the best stops along the way, and what to expect.',
		publishedAt: '2026-05-12',
		tags: ['osoyoos', 'driving', 'vancouver', 'road trip'],
		readingTimeMinutes: 5
	}
	// Add new guides here ↓
];
