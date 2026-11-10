import type { Metadata } from "next";
import Link from "next/link";
import ServiceView, { serviceByHref } from "@/components/ServiceView";
import { StoryPanes } from "@/components/StoryPanes";

export const metadata: Metadata = {
  title: "Binnenschilderwerk",
  description: "Binnenschilderwerk als basis van uw interieur. Eigen kleuren of advies, ook bij restauratie.",
};

export default function Page() {
  return (
    <ServiceView service={serviceByHref("/binnenschilderwerk")}>
      <StoryPanes
        tone="oranje"
        heading="Kleur, techniek, restauratie"
        panes={[
          {
            title: "Uw kleuren, of ons advies",
            text: "U kiest zelf de kleuren en de verf, of u vraagt ons om advies.",
          },
          {
            title: "Techniek en product",
            text: "Wij werken met de nieuwste technieken en de beste producten.",
          },
          {
            title: "Weer in oude glorie",
            text: "Bij restauratie brengen diezelfde vaardigheden een object weer in oude glorie.",
          },
        ]}
      />
      <section className="wrap pb-14">
        <p className="max-w-2xl">
          Wand- en plafondafwerking, behang en kleuradvies sluiten hierop aan als u het werk als totaalpakket wilt.{" "}
          <Link href="/wandafwerking" className="font-semibold text-link underline underline-offset-4">
            Naar wandafwerking
          </Link>
          {" · "}
          <Link href="/advies" className="font-semibold text-link underline underline-offset-4">
            Naar advies
          </Link>
        </p>
      </section>
    </ServiceView>
  );
}
