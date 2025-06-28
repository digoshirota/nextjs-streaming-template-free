import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Header() {



	return (

		<section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
			{/* Play Icon */}
			<div className="mb-8">
				<div className="w-100 h-100  rounded-full flex items-center justify-center my-8" style={{ maxWidth: '95vw' }}>
					<Image src="/images/logo.png" alt="StreamVibe" width={400} height={400} style={{ maxWidth: '95vw' }} />
				</div>
			</div>

			{/* Title and Text */}
			<h1 className="text-4xl md:text-5xl font-bold mb-4">
				The Best Streaming Experience
			</h1>
			<p className="max-w-2xl text-sm md:text-base text-white/80 mb-6">
				VibeCast is the best streaming experience for watching your favorite
				movies and shows on demand, anytime, anywhere. With StreamVibe, you can
				enjoy a wide variety of content including the latest blockbusters, classic
				movies, popular TV shows, and more.
			</p>

			{/* CTA Button */}
			<Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
				▶ Start Watching Now
			</Button>
		</section>
	)
}
