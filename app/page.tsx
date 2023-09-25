import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory z-0">
      <Header />
      {/* <section id="hero" className="snap-start">
       <Hero/>
      </section> */}
      <section id="about" className="snap-center">
<About/>
      </section>
      <section id="experience" className="snap-center">
<Experience/>
      </section>
      <section id="skills" className="snap-start">
<Skills/>
      </section>
      <Footer />
    </main>
  )
}
