// app/components/PricingSection.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

/*
	PricingSection Component
	------------------------
	- Next.js 15 (Client component)
	- Tailwind CSS for styling
	- shadcn/ui Button for actions
	- Comments in English
*/

interface Plan {
	id: string;
	name: string;
	description: string;
	monthlyPrice: number;
	yearlyPrice: number;
}

const plans: Plan[] = [
	{
		id: 'basic',
		name: 'Basic Plan',
		description:
			'Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.',
		monthlyPrice: 9.99,
		yearlyPrice: 9.99 * 12,
	},
	{
		id: 'standard',
		name: 'Standard Plan',
		description:
			'Access to a wider selection of movies and shows, including most new releases and exclusive content.',
		monthlyPrice: 12.99,
		yearlyPrice: 12.99 * 12,
	},
	{
		id: 'premium',
		name: 'Premium Plan',
		description:
			'Access to a widest selection of movies and shows, including all new releases and Offline Viewing.',
		monthlyPrice: 14.99,
		yearlyPrice: 14.99 * 12,
	},
];

export default function PricingSection() {
	// billingCycle: 'monthly' or 'yearly'
	const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>(
		'monthly'
	);

	return (
		<section className="bg-[#141414] py-16" id="pricing">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
				{/* Header with title, subtitle, and toggle */}
				<div className="flex flex-col md:flex-row justify-between items-start mb-12">
					{/* Title & subtitle */}
					<div className="max-w-2xl text-left">
						<h2 className="text-3xl font-bold">
							Choose the plan that’s right for you
						</h2>
						<p className="mt-2 text-gray-300 text-sm">
							Join VibeCast and select from our flexible subscription options
							tailored to suit your viewing preferences. Get ready for
							non‐stop entertainment!
						</p>
					</div>

					{/* Billing cycle toggle */}
					<div className="mt-4 md:mt-0 flex space-x-2 bg-[#0F0F0F] rounded-lg p-3">
						<button
							onClick={() => setBillingCycle('monthly')}
							className={`px-4 py-2 rounded-lg text-sm font-medium transition ${billingCycle === 'monthly'
									? 'bg-[#1A1A1A] text-white'
									: 'text-gray-400'
								}`}
						>
							Monthly
						</button>
						<button
							onClick={() => setBillingCycle('yearly')}
							className={`px-4 py-2 rounded-lg text-sm font-medium transition ${billingCycle === 'yearly'
									? 'bg-[#1A1A1A] text-white'
									: 'text-gray-400'
								}`}
						>
							Yearly
						</button>
					</div>
				</div>

				{/* Plans grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{plans.map((plan) => {
						const price =
							billingCycle === 'monthly'
								? plan.monthlyPrice
								: plan.yearlyPrice;
						const suffix = billingCycle === 'monthly' ? '/month' : '/year';

						return (
							<div
								key={plan.id}
								className="bg-[#1A1A1A] rounded-lg p-6 flex flex-col justify-between"
							>
								{/* Plan name & description */}
								<div className="space-y-4">
									<h3 className="text-xl font-semibold">{plan.name}</h3>
									<p className="text-gray-300 text-sm">{plan.description}</p>
								</div>

								{/* Price & actions */}
								<div className="mt-6 space-y-4">
									<div className="text-3xl font-bold">
										${price.toFixed(2)}
										<span className="text-base font-normal text-gray-400">
											{suffix}
										</span>
									</div>
									<div className="flex space-x-4">
										{/* Free trial button */}
										<Button variant="outline" className="flex-1 bg-[#0F0F0F] border-t border-[#141414]">
											Start Free Trial
										</Button>
										{/* Choose plan button */}
										<Button className="bg-red-600 hover:bg-red-700 text-white flex-1">
											Choose Plan
										</Button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
