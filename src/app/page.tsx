// app/page.tsx
import MovieCategory from "../components/MovieCategory"
import Hero from "../components/Hero"
import DevicesSection from "../components/DevicesSection"
import FaqSection from "../components/FaqSection"
import PricingSection from "../components/PricingSection"
import FreeTrialSection from "../components/FreeTrialSection"
import ProVersion from "../components/ProVersion"




export default async function Home() {
  return (
    
    <div className="relative min-h-screen text-white">
       
      <div
        className="relative min-h-screen w-full text-white"
        style={{
          backgroundImage: `url('/images/movies.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <Hero />
      </div>
     
     
      <MovieCategory title={"Explore our wide variety of categories"} subtitle=" Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new" />
      <DevicesSection/>
      <FaqSection/>
      <PricingSection/>
      <FreeTrialSection/>
      <ProVersion/>
    
    </div>
  );
}
