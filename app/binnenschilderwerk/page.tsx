import type { Metadata } from "next";
import ServiceView, { serviceByHref } from "@/components/ServiceView";

export const metadata: Metadata = {
  title: "Binnenschilderwerk",
  description: "Binnenschilderwerk als basis van uw interieur. Eigen kleuren of advies, ook bij restauratie.",
};

export default function Page() {
  return <ServiceView service={serviceByHref("/binnenschilderwerk")} />;
}
