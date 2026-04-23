import { HeroSection, PortfolioSection, TeamSection, ProcessSection } from "../components";

export default function Home() {
  return (
    <main className="bg-BackGround">
      <HeroSection />
      <ProcessSection />
      <PortfolioSection />
      <TeamSection />
    </main>
  );
}
