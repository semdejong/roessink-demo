import Link from "next/link";
import { content } from "@/content";
import { Soldeerknoop } from "@/components/ui";

export default function MobileBar() {
  const { contact } = content;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 bg-lood md:hidden" data-section="mobiele-balk">
      <div className="relative h-1.5 bg-lood">
        <Soldeerknoop className="absolute top-1/2 left-4 -translate-x-1/2 -translate-y-1/2" />
        <Soldeerknoop className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <Soldeerknoop className="absolute top-1/2 right-4 translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="grid grid-cols-2">
        <a href={contact.phoneHref} data-cta="bellen" className="inline-flex min-h-12 items-center justify-center px-3 text-center font-semibold text-wit">
          Bel {contact.phoneDisplay}
        </a>
        <Link href="/offerte" data-cta="offerte" className="inline-flex min-h-12 items-center justify-center bg-geel px-3 text-center font-semibold text-lood">
          Offerte
        </Link>
      </div>
    </div>
  );
}
