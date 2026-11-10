import Link from "next/link";
import { content, tones, type ServiceItem } from "@/content";

const areas: Record<string, string> = {
  "/buitenschilderwerk": "area-buiten",
  "/binnenschilderwerk": "area-binnen",
  "/beglazing": "area-beglazing",
  "/wandafwerking": "area-wand",
  "/vloercoatings": "area-vloer",
  "/advies": "area-advies",
};

function Pane({ service }: { service: ServiceItem }) {
  return (
    <Link
      href={service.href}
      data-tone={service.tone}
      className={`pane flex flex-col justify-between gap-4 p-5 no-underline sm:p-6 ${areas[service.href]}`}
    >
      <span
        aria-hidden="true"
        className="size-[22px] shadow-[inset_0_0_0_1px_#1D1D1B]"
        style={{ background: tones[service.tone].full }}
      />
      <span>
        <span className="block font-slab text-[1.65rem] leading-tight">{service.title}</span>
        <span className="mt-2 block text-[17px] leading-snug">{service.text}</span>
      </span>
    </Link>
  );
}

export default function DienstenRaam({ showHeading = true }: { showHeading?: boolean }) {
  const { services } = content;
  return (
    <section data-section="diensten" className="rise bg-papier py-12 md:py-16">
      <div className="wrap">
        {showHeading && (
          <div className="mb-8 max-w-2xl">
            <h2 className="text-[32px] leading-tight md:text-[40px]">{services.title}</h2>
            <p className="mt-4 text-ink">{services.intro}</p>
          </div>
        )}
        <div className="diensten-raam">
          {services.items.map((service) => (
            <Pane key={service.href} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
