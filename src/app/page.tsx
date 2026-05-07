import {ProcessSection } from "../components";
import { HeroSection, PortfolioSection, ServicesSection, TeamSection } from "@/src/components";

export default function Home() {
  return (
    <main className="bg-BackGround">
      <HeroSection />
      <ProcessSection />
      <PortfolioSection />
      <ServicesSection />
      <TeamSection />
    </main>
  );
}
