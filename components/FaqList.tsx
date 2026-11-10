import { content } from "@/content";

export default function FaqList() {
  return (
    <section data-section="faq" className="rise bg-papier py-12 md:py-16">
      <div className="wrap max-w-3xl">
        <h2 className="text-[32px] leading-tight md:text-[40px]">Vragen</h2>
        <div className="mt-6 border-t-[6px] border-lood">
          {content.faq.map((item) => (
            <details key={item.q} className="border-b-[6px] border-lood">
              <summary className="flex min-h-12 items-center justify-between gap-4 py-3 font-slab text-2xl">
                {item.q}
                <span aria-hidden="true" className="text-base font-sans font-semibold">
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-5 text-ink">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
