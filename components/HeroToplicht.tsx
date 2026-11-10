import { content } from "@/content";
import { CtaPair, Photo, Soldeerknoop } from "@/components/ui";

const corner = [
  "#E71522", "#E71522", "#E71522", "#2A62C5", "#E71522", "#E71522",
  "#E71522", "#36AF30", "#E71522", "#E71522", "#ED631C", "#E71522",
  "#E71522", "#E71522", "#74428F", "#E71522", "#E71522", "#E71522",
  "#F6E513", "#E71522", "#E71522", "#E71522", "#36AF30", "#E71522",
  "#E71522", "#2A62C5", "#E71522", "#E71522", "#E71522", "#ED631C",
  "#E71522", "#E71522", "#E71522", "#74428F", "#E71522", "#E71522",
];

const border = ["#E71522", "#E71522", "#2A62C5", "#E71522", "#E71522", "#36AF30", "#E71522", "#74428F", "#E71522", "#E71522", "#ED631C", "#E71522"];

export default function HeroToplicht() {
  const { hero } = content;
  return (
    <section data-section="hero" className="bg-papier">
      <div className="mx-auto grid max-w-[1180px] lg:grid-cols-2 lg:items-start">
        <div className="px-5 py-10 md:py-14 lg:py-16 lg:pr-10 lg:pl-6">
          <p className="label text-ink">Schildersbedrijf in de regio Twente</p>
          <h1 className="mt-4 max-w-[12em] text-[40px] leading-[1.08] sm:text-[44px] lg:text-[64px]">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-[18px] leading-[1.6] text-ink">{hero.subtitle}</p>
          <div className="mt-8">
            <CtaPair />
          </div>
          <div className="hero-panes mt-10" aria-hidden="true">
            {corner.map((color, index) => (
              <span key={`${color}-${index}`} className="size-5" style={{ background: color }} />
            ))}
          </div>
        </div>

        <div className="relative h-1.5 bg-lood lg:hidden" aria-hidden="true">
          <Soldeerknoop className="absolute top-1/2 left-4 -translate-x-1/2 -translate-y-1/2" />
          <Soldeerknoop className="absolute top-1/2 right-4 translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="relative lg:border-l-[6px] lg:border-lood">
          <Soldeerknoop className="absolute top-0 left-[3px] z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block" />
          <Soldeerknoop className="absolute bottom-0 left-[3px] z-10 hidden -translate-x-1/2 translate-y-1/2 lg:block" />
        <figure className="bg-lood p-1.5 lg:p-0 lg:pr-1.5 lg:pb-1.5">
          <div className="border-panes px-1.5 pt-1.5 pb-1.5" aria-hidden="true">
            {border.map((color, index) => (
              <span key={`${color}-${index}`} className="size-[22px]" style={{ background: color }} />
            ))}
          </div>
          <div className="relative mx-auto max-w-[1024px]">
            <Photo
              src={hero.image}
              alt={hero.imageAlt}
              width={hero.imageWidth}
              height={hero.imageHeight}
              priority
            />
            <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-1/3 w-1.5 -translate-x-1/2 bg-lood" />
            <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-2/3 w-1.5 -translate-x-1/2 bg-lood" />
            <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-1/2 h-1.5 -translate-y-1/2 bg-lood" />
            <Soldeerknoop className="pointer-events-none absolute top-0 left-1/3 z-10 -translate-x-1/2 -translate-y-1/2" />
            <Soldeerknoop className="pointer-events-none absolute top-0 left-2/3 z-10 -translate-x-1/2 -translate-y-1/2" />
            <Soldeerknoop className="pointer-events-none absolute top-1/2 left-0 z-10 -translate-x-1/2 -translate-y-1/2" />
            <Soldeerknoop className="pointer-events-none absolute top-1/2 left-1/3 z-10 -translate-x-1/2 -translate-y-1/2" />
            <Soldeerknoop className="pointer-events-none absolute top-1/2 left-2/3 z-10 -translate-x-1/2 -translate-y-1/2" />
            <Soldeerknoop className="pointer-events-none absolute top-1/2 right-0 z-10 translate-x-1/2 -translate-y-1/2" />
            <Soldeerknoop className="pointer-events-none absolute bottom-0 left-1/3 z-10 -translate-x-1/2 translate-y-1/2" />
            <Soldeerknoop className="pointer-events-none absolute bottom-0 left-2/3 z-10 -translate-x-1/2 translate-y-1/2" />
          </div>
        </figure>
        </div>
      </div>
    </section>
  );
}
