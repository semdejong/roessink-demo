import type { Metadata } from "next";
import Link from "next/link";
import ServiceView, { serviceByHref } from "@/components/ServiceView";
import BrandRow from "@/components/BrandRow";

const panes = [
  { title: "Verftechnisch advies", text: "Wij adviseren wat en hoe er geschilderd moet worden, in overleg met de verfleverancier." },
  { title: "Kleuradvies", text: "Zodat u niet de verkeerde verf kiest, of kleuren die niet bij elkaar passen." },
  { title: "Op uw wensen", text: "We luisteren naar uw wensen en adviseren op basis van onze ervaring." },
  { title: "Voor buiten", text: "U neemt een eigen kleurplan mee, of u vraagt ons om advies." },
  { title: "Voor binnen", text: "U kiest zelf de kleuren en de verf, of u vraagt ons om advies." },
  { title: "Voorkomen", text: "Zo voorkomt u de verkeerde verf, of kleuren die niet bij elkaar passen." },
];

export const metadata: Metadata = {
  title: "Advies",
  description: "Verftechnisch advies en kleuradvies, in overleg met de verfleverancier.",
};

export default function Page() {
  return (
    <ServiceView service={serviceByHref("/advies")}>
      <section data-section="aanpak" className="wrap pb-8">
        <h2 className="text-[32px] leading-tight md:text-[40px]">Waarover wij adviseren</h2>
        <div className="mt-6 grid gap-1.5 bg-lood sm:grid-cols-2 lg:grid-cols-3">
          {panes.map((pane) => (
            <div key={pane.title} data-tone="geel" className="pane p-5">
              <span aria-hidden="true" className="mb-4 block size-5 bg-geel shadow-[inset_0_0_0_1px_#1D1D1B]" />
              <h3 className="font-slab text-2xl">{pane.title}</h3>
              <p className="mt-2 text-[17px]">{pane.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/buitenschilderwerk" className="font-semibold text-link underline underline-offset-4">
            Buitenschilderwerk
          </Link>
          <Link href="/binnenschilderwerk" className="font-semibold text-link underline underline-offset-4">
            Binnenschilderwerk
          </Link>
        </p>
      </section>
      <BrandRow intro="Het verftechnisch advies stemmen wij af in overleg met de verfleverancier. Onder de merken waarmee wij werken:" />
    </ServiceView>
  );
}
