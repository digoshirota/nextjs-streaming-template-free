// app/movies-and-shows/movies/category/[category]/page.tsx
import { Metadata } from 'next';
import React from 'react';

import ProVersion from "../../../../../components/ProVersion"

/** 
 * Generate dynamic metadata for SEO 
 */
export async function generateMetadata({
	params,
}: {
	params: any;
}): Promise<Metadata> {
	const name = params.category.replace(/-/g, ' ');
	return {
		title: `VibeCast • ${name[0].toUpperCase() + name.slice(1)}`,
		description: `Browse all ${name} movies on VibeCast. Enjoy the best collection of ${name} films.`,
	};
}

export default function CategoryPage({
	params,
}: {
	params: any;
}) {
	

	return (
		<main className="bg-[#141414] min-h-screen py-32 px-4">
				<ProVersion/>
		</main>
	);
}
