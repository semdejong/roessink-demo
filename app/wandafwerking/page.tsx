import type { Metadata } from "next";
import Link from "next/link";
import ServiceView, { serviceByHref } from "@/components/ServiceView";

const panes = [
  { title: "Sauzen", text: "Wanden sauzen in de kleur die u kiest, of met ons advies." },
  { title: "Behangen", text: "Behangwerkzaamheden als onderdeel van de wandafwerking." },
  { title: "Glasvlies", text: "Glasvlies, naast sauzen, behang en structuur." },
  { title: "Structuur", text: "Een structuur aanbrengen, als u de wand zo wilt." },
  { title: "Plafond", text: "Ook wand- en plafondafwerking horen bij het werk." },
  { title: "Bewezen kwaliteit", text: "Wij gebruiken alleen materialen van bewezen kwaliteit." },
];

export const metadata: Metadata = {
  title: "Wandafwerking",
  description: "Wandafwerking: sauzen, behangen, glasvlies en structuur. Ook plafondafwerking en behangwerk.",
};

export default function Page() {
  return (
    <ServiceView service={serviceByHref("/wandafwerking")}>
      <section data-section="aanpak" className="wrap pb-14">
        <h2 className="max-w-3xl text-[32px] leading-tight md:text-[40px]">Sauzen, behangen, glasvlies en structuur</h2>
        <div className="mt-6 grid gap-1.5 bg-lood sm:grid-cols-2 lg:grid-cols-3">
          {panes.map((pane) => (
            <div key={pane.title} data-tone="violet" className="pane p-5">
              <span aria-hidden="true" className="mb-4 block size-5 bg-violet shadow-[inset_0_0_0_1px_#1D1D1B]" />
              <h3 className="font-slab text-2xl">{pane.title}</h3>
              <p className="mt-2 text-[17px]">{pane.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-6">
          <Link href="/binnenschilderwerk" className="font-semibold text-link underline underline-offset-4">
            Ook binnenschilderwerk
          </Link>
        </p>
      </section>
    </ServiceView>
  );
}
