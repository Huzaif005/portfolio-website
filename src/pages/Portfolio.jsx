import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import ResumeBanner from "@/components/sections/ResumeBanner";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Portfolio() {
  return (
    <div data-testid="portfolio-root" className="bg-[#FDFBF7] text-[#0A0A0A] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ResumeBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
