import type { Metadata } from "next";
import ServiceView, { serviceByHref } from "@/components/ServiceView";

export const metadata: Metadata = {
  title: "Buitenschilderwerk",
  description:
    "Buitenschilderwerk uit Enter: uw visitekaartje naar de buitenwereld. Van A tot Z, bestand tegen zon, regen en vrieskou.",
};

export default function Page() {
  return <ServiceView service={serviceByHref("/buitenschilderwerk")} />;
}
