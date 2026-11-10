import { content, tones, type Tone } from "@/content";

export function StoryPanes({
  heading,
  intro,
  tone,
  panes,
  section = "verdieping",
}: {
  heading: string;
  intro?: string;
  tone: Tone;
  panes: { title: string; text: string }[];
  section?: string;
}) {
  const glass = tones[tone].full;
  return (
    <section data-section={section} className="wrap pb-14">
      <h2 className="max-w-3xl text-[32px] leading-tight md:text-[40px]">{heading}</h2>
      {intro && <p className="mt-4 max-w-2xl text-ink">{intro}</p>}
      <div className="mt-6 grid gap-1.5 bg-lood sm:grid-cols-2 lg:grid-cols-3">
        {panes.map((pane, index) => (
          <div
            key={pane.title}
            data-tone={tone}
            className={`pane p-5 sm:p-6 ${index === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}
          >
            <span aria-hidden="true" className="mb-4 block size-5 shadow-[inset_0_0_0_1px_#1D1D1B]" style={{ background: glass }} />
            <h3 className="font-slab text-2xl leading-tight">{pane.title}</h3>
            <p className="mt-2 text-[17px] leading-snug">{pane.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function VoorWie() {
  const items = content.voorWie;
  return (
    <section data-section="voor-wie" className="rise bg-papier py-12 md:py-16">
      <div className="h-1.5 bg-lood" aria-hidden="true" />
      <div className="wrap pt-12">
        <h2 className="text-[32px] leading-tight md:text-[40px]">Voor wie</h2>
        <p className="mt-4 max-w-2xl text-ink">
          Roessink is schildersbedrijf, behangersbedrijf en glaszettersbedrijf. Het werk is er voor particulieren, bedrijven en monumentale panden.
        </p>
        <div className="mt-6 grid gap-1.5 bg-lood md:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} data-tone={item.tone} className="pane min-h-44 p-6">
              <span
                aria-hidden="true"
                className="mb-5 block size-[22px] shadow-[inset_0_0_0_1px_#1D1D1B]"
                style={{ background: tones[item.tone].full }}
              />
              <h3 className="font-slab text-[28px] leading-tight">{item.title}</h3>
              <p className="mt-2 text-[17px] leading-snug">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
