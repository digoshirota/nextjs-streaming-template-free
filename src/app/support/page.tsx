// app/components/SupportSection.tsx
'use client';

import React from 'react';


/**
 * SupportSection
 * --------------
 * - Two-column layout: intro+gallery on the left, contact form on the right
 * - Responsive grid with Tailwind CSS
 * - Comments in English
 */

import ProVersion from "../../components/ProVersion"
export default function SupportSection() {
	return (
		<section className="bg-[#141414] py-16 px-4 relative min-h-screen text-white  mb-4 max-w-7xl mx-auto  sm:px-6 lg:px-8 pt-35">
			<ProVersion/>
		</section>
	);
}