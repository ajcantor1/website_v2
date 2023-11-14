import Hero from "./components/Hero"
import About from "./components/About"

export default function Home() {
  return (
    
    <main className="mx-auto min-h-screen px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 bg-[#0F172A]">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Hero/>
        <About/>
      </div>
      
    </main>
  )
}
