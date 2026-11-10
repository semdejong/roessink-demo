import Image from "next/image";
import { content } from "@/content";

export default function BrandRow({ intro }: { intro?: string }) {
  return (
    <section data-section="merken" className="bg-kalk">
      <div className="h-1.5 bg-lood" aria-hidden="true" />
      <div className="wrap py-10">
        <p className="label">Wij werken o.a. met</p>
        {intro && <p className="mt-3 max-w-2xl">{intro}</p>}
        <ul className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-4">
          {content.brands.map((brand) => (
            <li key={brand.name}>
              <Image
                src={brand.src}
                alt={brand.name}
                width={brand.width}
                height={brand.height}
                unoptimized
                className="brand-logo h-8 w-auto max-w-[108px] grayscale transition duration-200 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
