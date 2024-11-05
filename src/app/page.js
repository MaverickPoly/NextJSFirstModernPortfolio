import About from "@/components/About";
import { BentoGridSection } from "@/components/BentoGrid";
import GlareCardsContainer from "@/components/CardsSection";
import BackgroundBeamsDemo from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import { InfiniteMovingLogoCloud } from "@/components/LogoCloud";
import Workflow from "@/components/Workflow";


export default function Home() {
  return (
    <div>
      <div className="max-w-7xl mx-auto pt-20">
        <HeroSection />
        <About />
        <Workflow />
        <InfiniteMovingLogoCloud />
        <BentoGridSection />
        <GlareCardsContainer />
      </div>
      <BackgroundBeamsDemo />
      <Footer />
    </div>
  );
}

