import { content, tones, type ServiceItem } from "@/content";
import { LeadedPhoto } from "@/components/ui";
import CtaBand from "@/components/CtaBand";
import RelatedServices from "@/components/RelatedServices";

export default function ServiceView({
  service,
  children,
}: {
  service: ServiceItem;
  children?: React.ReactNode;
}) {
  const tone = tones[service.tone];
  return (
    <article>
      <header data-section="intro" className="wrap py-12 md:py-16">
        <p className="flex items-center gap-3">
          <span aria-hidden="true" className="size-5 shadow-[inset_0_0_0_1px_#1D1D1B]" style={{ background: tone.full }} />
          <span className="label">Enter en de regio Twente</span>
        </p>
        <h1 className="mt-4 max-w-[14em] text-[38px] leading-[1.08] sm:text-[44px] md:text-[60px]">{service.title}</h1>
        <p className="mt-4 max-w-2xl font-slab text-[26px] leading-snug md:text-[32px]">{service.text}</p>
        <div className="mt-6 max-w-2xl space-y-4">
          {service.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </header>
      {service.image && (
        <div className="wrap pb-12">
          <LeadedPhoto src={service.image.src} alt={service.image.alt} width={service.image.width} height={service.image.height} />
        </div>
      )}
      {children}
      <CtaBand />
      <RelatedServices current={service.href} />
    </article>
  );
}

export function serviceByHref(href: string) {
  const service = content.services.items.find((item) => item.href === href);
  if (!service) throw new Error(`Onbekende dienst ${href}`);
  return service;
}
