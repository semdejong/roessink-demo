import { content } from "@/content";
import { CtaPair } from "@/components/ui";

export default function CtaBand() {
  return (
    <section data-section="cta" className="bg-kalk">
      <div className="h-1.5 bg-lood" aria-hidden="true" />
      <div className="wrap flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-[32px] leading-tight">Bellen of een offerte aanvragen</h2>
          <p className="mt-3 text-ink">
            {content.company.name}, {content.contact.address}.
          </p>
        </div>
        <CtaPair />
      </div>
    </section>
  );
}
