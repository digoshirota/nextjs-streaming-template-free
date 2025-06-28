// app/components/FaqSection.tsx
'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

/*
	FaqSection Component
	--------------------
	- Next.js 15 (Client Component)
	- Tailwind CSS for layout and styling
	- lucide-react for toggle icons
*/

interface Faq {
	id: string;
	question: string;
	answer: string;
}

const faqs: Faq[] = [
	{
		id: 'faq1',
		question: 'What is VibeCast?',
		answer:
			'VibeCast is a streaming service that allows you to watch movies and shows on demand.',
	},
	{
		id: 'faq2',
		question: 'How much does VibeCast cost?',
		answer:
			'VibeCast offers multiple plans starting at $9.99/month. Visit our pricing page for details.',
	},
	{
		id: 'faq3',
		question: 'What content is available on VibeCast?',
		answer:
			'We have a vast library of movies, TV series, documentaries, and originals across all genres.',
	},
	{
		id: 'faq4',
		question: 'How can I watch VibeCast?',
		answer:
			'You can watch on your smartphone, tablet, smart TV, laptop, gaming console, or VR headset via our apps.',
	},
	{
		id: 'faq5',
		question: 'How do I sign up for VibeCast?',
		answer:
			'Click the "Sign Up" button on the top right corner, enter your email, choose a plan, and start streaming.',
	},
	{
		id: 'faq6',
		question: 'What is the VibeCast free trial?',
		answer:
			'We offer a 7-day free trial on all plans. You can cancel anytime before the trial ends.',
	},
	{
		id: 'faq7',
		question: 'How do I contact VibeCast customer support?',
		answer:
			'You can reach our 24/7 support team via the "Help" section in the app or email support@vibecast.com.',
	},
	{
		id: 'faq8',
		question: 'What are the VibeCast payment methods?',
		answer:
			'We accept credit/debit cards, PayPal, and major mobile payment options like Apple Pay and Google Pay.',
	},
];

export default function FaqSection() {
	// Track which FAQ is open
	const [openId, setOpenId] = useState<string | null>(null);

	// Toggle handler
	const toggle = (id: string) =>
		setOpenId((prev) => (prev === id ? 'faq1' : id));

	return (
		<section className="bg-[#141414] py-16" id="faq">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
				{/* Header: title, subtitle, and button */}
				<div className="flex flex-col md:flex-row justify-between items-start mb-12">
					<div className="max-w-2xl text-left">
						<h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
						<p className="mt-2 text-gray-300 text-sm">
							Got questions? We’ve got answers! Check out our FAQ section to find
							answers to the most common questions about VibeCast.
						</p>
					</div>
					<button className="mt-4 md:mt-0 inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition">
						Ask a Question
					</button>
				</div>

				{/* FAQ grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
					{faqs.map((faq, index) => {
						const isOpen = openId === faq.id;
						const number = String(index + 1).padStart(2, '0');
						return (
							<div key={faq.id} className="space-y-2">
								{/* Question header */}
								<button
									onClick={() => toggle(faq.id)}
									className="w-full flex items-center justify-between"
								>
									<span className="flex items-center space-x-4">
										{/* Number badge */}
										<span className="inline-block bg-gray-800 text-gray-200 text-sm font-medium rounded-md px-3 py-2">
											{number}
										</span>
										{/* Question text */}
										<span className="text-left text-white font-medium">
											{faq.question}
										</span>
									</span>
									{/* Toggle icon */}
									{isOpen ? (
										<Minus className="h-5 w-5 text-gray-200" />
									) : (
										<Plus className="h-5 w-5 text-gray-200" />
									)}
								</button>

								{/* Answer content */}
								{isOpen && (
									<>
										<div className="h-px bg-red-600" />
										<p className="text-gray-300 text-sm">{faq.answer}</p>
									</>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
