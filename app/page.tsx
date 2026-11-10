import HeroToplicht from "@/components/HeroToplicht";
import FactRoede from "@/components/FactRoede";
import { VoorWie } from "@/components/StoryPanes";
import DienstenRaam from "@/components/DienstenRaam";
import FaqList from "@/components/FaqList";
import { AboutBand, AdviceBand, BeglazingBand, ContactBand, ProjectenBand } from "@/components/HomeLower";

export default function Home() {
  return (
    <>
      <HeroToplicht />
      <FactRoede />
      <VoorWie />
      <DienstenRaam />
      <BeglazingBand />
      <ProjectenBand />
      <AboutBand />
      <AdviceBand />
      <FaqList />
      <ContactBand />
    </>
  );
}
