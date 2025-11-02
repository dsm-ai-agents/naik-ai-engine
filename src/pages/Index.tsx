import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Journey from "@/components/Journey";
import Impact from "@/components/Impact";
import Achievements from "@/components/Achievements";
import ContentHub from "@/components/ContentHub";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Hero />
      <About />
      <Expertise />
      <Journey />
      <Impact />
      <Achievements />
      <ContentHub />
      <FinalCTA />
    </div>
  );
};

export default Index;
