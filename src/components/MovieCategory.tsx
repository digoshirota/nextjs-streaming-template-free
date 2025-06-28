// app/components/CategoriesCarousel.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Category {
	id: string;
	name: string;
	images: string[];
}

interface CategoriesCarouselProps {
	title: string;
	label?: string;
	subtitle?: string;
	categoriesProps?: string;
}

/** Turn “Action” → “action”, “Sci Fi” → “sci-fi” */
function slugify(str: string) {
	return str
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '');
}

const categories: Category[] = [
	{ id: 'action', name: 'Action', images: ['/images/action.png'] },
	{ id: 'adventure', name: 'Adventure', images: ['/images/adventure.png'] },
	{ id: 'comedy', name: 'Comedy', images: ['/images/comedy.png'] },
	{ id: 'drama', name: 'Drama', images: ['/images/drama.png'] },
	{ id: 'horror', name: 'Horror', images: ['/images/horror.png'] },
	// …more if you like
];

export default function CategoriesCarousel({
	title,
	label,
	subtitle,
	categoriesProps
}: CategoriesCarouselProps) {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
	const prevRef = useRef<HTMLButtonElement>(null);
	const nextRef = useRef<HTMLButtonElement>(null);
	const swiperRef = useRef<any>(null);

	// wire up custom nav buttons
	useEffect(() => {
		if (
			swiperRef.current &&
			prevRef.current instanceof HTMLElement &&
			nextRef.current instanceof HTMLElement
		) {
			const swiper = swiperRef.current;
			swiper.params.navigation.prevEl = prevRef.current;
			swiper.params.navigation.nextEl = nextRef.current;
			swiper.navigation.init();
			swiper.navigation.update();
		}
	}, []);

	return (
		<section className="bg-[#141414] py-16" id="genres">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
					<div className="max-w-2xl">
						<h2 className="text-3xl font-bold text-white">{title}</h2>
						{subtitle && <p className="mt-2 text-gray-300">{subtitle}</p>}
					</div>
					<div className="mt-4 md:mt-0 flex items-center space-x-4 bg-[#0F0F0F] p-2 rounded-md">
						<button
							ref={prevRef}
							className="flex items-center justify-center h-10 w-10 bg-[#1A1A1A] rounded-md hover:bg-gray-700 transition p-2"
							aria-label="Previous"
						>
							<ArrowLeft className="h-5 w-5 text-white" />
						</button>
						<div className="swiper-pagination-custom flex space-x-1" />
						<button
							ref={nextRef}
							className="flex items-center justify-center h-10 w-10 bg-[#1A1A1A] rounded-md hover:bg-gray-700 transition p-2"
							aria-label="Next"
						>
							<ArrowRight className="h-5 w-5 text-white" />
						</button>
					</div>
				</div>

				{/* Carousel */}
				<Swiper
					onSwiper={(swiper) => {
						swiperRef.current = swiper;
					}}
					modules={[Navigation, Pagination]}
					navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
					pagination={{ clickable: true }}
					slidesPerView={1}
					breakpoints={{
						640: { slidesPerView: 2 },
						768: { slidesPerView: 3 },
						1024: { slidesPerView: 5 },
					}}
					className="relative swiper-pagination-custom"
				>
					{categories.map((category) => {
						const isSelected = selectedCategory === category.id;
						const href = `/movies-and-shows/${categoriesProps === 'series' ? 'series' : 'movies'}/category/${slugify(category.name)}`;

						return (
							<SwiperSlide key={category.id}>
								{/* Wrap the whole card in a Link */}
								<Link href={href} className="block">
									<div
										onClick={() =>
											setSelectedCategory((prev) =>
												prev === category.id ? null : category.id
											)
										}
										className={`cursor-pointer rounded-lg overflow-hidden bg-[#1A1A1A] shadow-lg transition-transform duration-200 active:scale-95 p-5 ${isSelected ? 'ring-2 ring-gray-400' : ''
											}`}
									>
										{/* Image */}
										<div className="relative h-48 w-full">
											<Image
												src={category.images[0]}
												alt={`${category.name} thumbnail`}
												fill
												className="object-cover"
											/>
										</div>

										{/* Footer */}
										<div className="mt-4 flex items-center justify-between">
											{label && (
												<span className="bg-red-600 text-white text-[10px] font-semibold uppercase rounded-full px-3 py-1 inline-block">
													{label}
												</span>
											)}
											<div className="flex items-center">
												<span className="font-medium text-white mr-2">
													{category.name}
												</span>
												<ChevronRight className="h-5 w-5 text-white" />
											</div>
										</div>
									</div>
								</Link>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</section>
	);
}
