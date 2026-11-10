import type { Metadata } from "next";
import Image from "next/image";
import ServiceView, { serviceByHref } from "@/components/ServiceView";
import GlassSoorten from "@/components/GlassSoorten";
import { StoryPanes } from "@/components/StoryPanes";

export const metadata: Metadata = {
  title: "Beglazing",
  description:
    "Beglazing door Roessink Schilderwerken: enkel en dubbel glas, isolatieglas, glas-in-lood, monumentenglas en meer.",
};

export default function Page() {
  return (
    <ServiceView service={serviceByHref("/beglazing")}>
      <StoryPanes
        tone="groen"
        heading="Drie voorbeelden"
        panes={[
          { title: "Isolatieglas", text: "Energie besparen met isolatieglas." },
          { title: "Inbraakwerend glas", text: "Een veiliger huis met inbraakwerend glas." },
          { title: "Sier- en figuurglas", text: "Herstellen, weer als nieuw, of een geheel nieuw ontwerp." },
        ]}
      />
      <section data-section="glassoorten" className="wrap pb-14">
        <h2 className="text-[32px] leading-tight md:text-[40px]">Glassoorten</h2>
        <p className="mt-4 max-w-2xl text-ink">
          Isolatieglas, floatglas, sier- en figuurglas, glas-in-lood, monumentenglas, inbraakwerend glas en brandvertragend glas.
        </p>
        <div className="mt-6">
          <GlassSoorten />
        </div>
        <div className="mt-8 flex items-center gap-4 bg-kalk p-5">
          <Image src="/img/merken/agc-groep.png" alt="AGC" width={150} height={83} unoptimized className="h-10 w-auto grayscale transition duration-200 hover:grayscale-0" />
          <p className="label">AGC</p>
        </div>
      </section>
    </ServiceView>
  );
}
