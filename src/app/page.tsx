import Hero from "./components/Hero"
import About from "./components/About"

export default function Home() {
  return (
    
    <main className="min-h-screen min-w-screen max-w-full font-sans md:px-12 bg-[#0F172A]">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Hero/>
        <About/>
      </div>
      
    </main>
  )
}
