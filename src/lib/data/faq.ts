// ============================================================
// FAQ data — drives both the /faq page UI and the FAQPage schema.
// Add new questions here; the page and schema update automatically.
// ============================================================

export interface FaqItem {
	question: string;
	/** Plain text only — this goes directly into schema markup */
	answer: string;
}

export const faq: FaqItem[] = [
	{
		question: 'What are the check-in and check-out times?',
		answer:
			'Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in or late check-out may be available depending on availability — call us ahead of your stay and we will do our best to accommodate you.'
	},
	{
		question: 'Which property should I book — Falcon Resort or Spanish Fiesta Resort?',
		answer:
			'Both properties are adjacent, share the same beach and management, and offer the same quality of stay. The simplest approach is to call us — we operate both from a shared office and will place you in whichever property has the best available room for your dates and group size. You cannot go wrong with either.'
	},
	{
		question: 'Is the beach private?',
		answer:
			'Yes. Both Falcon Resort and Spanish Fiesta Resort share access to a private sandy beach directly on Osoyoos Lake. The beach has a long, shallow sandy entry — you can walk out over 500 feet and still touch the bottom — making it safe and enjoyable for all ages including young children.'
	},
	{
		question: 'How warm is Osoyoos Lake?',
		answer:
			'Osoyoos Lake is the warmest freshwater lake in Canada, averaging around 24°C (75°F) at the surface during peak summer (July–August). Swimming season typically runs from late May through September. The lake sits in Canada\'s only pocket desert, so the surrounding air is hot and dry — perfect beach weather.'
	},
	{
		question: 'Do you have a pool?',
		answer:
			'Yes. Both properties have their own outdoor swimming pool. There is also a hot tub available to guests. The pools are open during the season and are a short walk from the private beach on Osoyoos Lake.'
	},
	{
		question: 'Is parking available?',
		answer:
			'Yes, free on-site parking is available at both properties. No reservation is required for parking.'
	},
	{
		question: 'Is Wi-Fi available?',
		answer: 'Yes, complimentary Wi-Fi is available throughout both properties.'
	},
	{
		question: 'Are pets allowed?',
		answer:
			'Please call us directly to ask about our current pet policy — (250) 495-7544 for Falcon Resort or (250) 495-6833 for Spanish Fiesta Resort. Policies may vary by room type and time of season.'
	},
	{
		question: 'Do any rooms have kitchens or kitchenettes?',
		answer:
			'Yes, select rooms include a kitchenette. If this is important for your stay, mention it when you call and we will match you to the right room. Kitchenette rooms are popular with families and guests staying for a week or more.'
	},
	{
		question: 'Can I get a lake view room?',
		answer:
			'Some rooms have lake or pool views. Availability depends on the season and how far in advance you book. Call us to ask about current availability and we will do our best to get you a view.'
	},
	{
		question: 'Is online booking available?',
		answer:
			'Online booking is coming soon. For now, please call us directly to make a reservation — Falcon Resort at (250) 495-7544 or Spanish Fiesta Resort at (250) 495-6833. We are happy to help and can usually answer right away during the season.'
	},
	{
		question: 'What is your cancellation policy?',
		answer:
			'Please call us when booking and we will walk you through the current cancellation terms. We try to be reasonable — if your plans change, reach out as early as possible and we will work with you.'
	},
	{
		question: 'When does the season open and close?',
		answer:
			'We are open seasonally, typically from May through September. Dates can vary slightly year to year based on conditions. Call us or check back here for current season dates.'
	},
	{
		question: 'How far is Osoyoos from Kelowna and Vancouver?',
		answer:
			'Osoyoos is approximately 1.5 hours south of Kelowna via Highway 97, and roughly 4 hours east of Vancouver via Highway 3 (the Crowsnest Pass route) or Highway 5. It is also about 30 minutes north of the Canada–US border at Osoyoos/Oroville.'
	},
	{
		question: 'Are BBQ facilities available?',
		answer:
			'Yes, both properties have BBQ and picnic areas available for guest use. They are shared facilities, so we ask guests to be courteous and clean up after use.'
	}
];

/** Builds the FAQPage schema from the faq array */
export function buildFaqSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faq.map((item) => ({
			'@type': 'Question',
			name: item.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.answer
			}
		}))
	};
}
