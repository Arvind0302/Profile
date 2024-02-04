import Hero from "@/components/Hero"
import About from "@/components/About";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <main className="flex flex-col items-center max-w-7xl justify-center mx-auto ">
        <Hero />
        <About />
        <Skills />
    </main>
  );
}
