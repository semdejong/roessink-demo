import { content } from "@/content";
import { Soldeerknoop } from "@/components/ui";

export default function FactRoede() {
  const facts = content.facts;
  return (
    <section data-section="feiten" className="bg-papier py-8 md:py-10">
      <h2 className="sr-only">In het kort</h2>
      <div className="wrap hidden md:block">
        <div className="grid grid-cols-4 gap-3">
          {facts.map((fact) => (
            <p key={fact} className="label text-center leading-snug">
              {fact === "Erkend Schilder^sCOOL-leerbedrijf" ? (
                <>
                  Erkend
                  <br />
                  Schilder^sCOOL-leerbedrijf
                </>
              ) : fact === "Opgericht door Gé, sinds 2006 Jeroen" ? (
                <>
                  Opgericht door Gé,
                  <br />
                  sinds 2006 Jeroen
                </>
              ) : (
                fact
              )}
            </p>
          ))}
        </div>
        <div className="relative mt-3 h-1.5 bg-lood">
          <Soldeerknoop className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" />
          <Soldeerknoop className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2" />
          <Soldeerknoop className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <Soldeerknoop className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2" />
          <Soldeerknoop className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
      <ul className="wrap md:hidden">
        {facts.map((fact) => (
          <li key={fact} className="flex items-center gap-3 border-t-[6px] border-lood py-3 first:border-t-0">
            <Soldeerknoop />
            <p className="label">{fact}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
