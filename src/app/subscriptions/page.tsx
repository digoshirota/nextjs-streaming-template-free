
'use client';

import React from 'react';
import ProVersion from "../../components/ProVersion"

/**
 * SupportSection
 * --------------
 * - Two-column layout: intro+gallery on the left, contact form on the right
 * - Responsive grid with Tailwind CSS
 * - Comments in English
 */
export default function SubscriptionSection() {
	return (
		<section className="bg-[#141414] py-16 px-4 relative min-h-screen text-white  mb-4 max-w-7xl mx-auto  sm:px-6 lg:px-8 pt-35">
			<ProVersion />

		</section>
	);
}