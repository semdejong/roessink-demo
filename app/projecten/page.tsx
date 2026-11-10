import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import ProjectGallery from "@/components/ProjectGallery";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Projecten",
  description: "Buitenschilderwerk: Villa Enschede, Villa Leersum en Villa Enter.",
};

export default function Page() {
  return (
    <article>
      <header data-section="intro" className="wrap py-12 md:py-16">
        <h1 className="text-[38px] leading-[1.08] sm:text-[44px] md:text-[60px]">Projecten</h1>
        <p className="mt-5 max-w-2xl">
          Drie villa’s, alle drie buitenschilderwerk: Enschede, Leersum en Enter. Op de foto’s onder meer donkere kozijnen en luiken, en in Enter een rieten kap.
        </p>
        <div className="mt-8 grid gap-1.5 bg-lood sm:grid-cols-3">
          {content.projects.map((project) => (
            <a key={project.slug} href={`#${project.slug}`} className="bg-kalk p-5 text-lood no-underline">
              <span className="label text-ink">Buitenschilderwerk</span>
              <span className="mt-2 block font-slab text-2xl">{project.title}</span>
              <span className="mt-2 block text-[16px] text-ink">Naar de foto’s</span>
            </a>
          ))}
        </div>
      </header>
      <div className="wrap space-y-16 pb-16">
        {content.projects.map((project) => (
          <section key={project.slug} id={project.slug} data-section={project.slug} className="scroll-mt-28">
            <div className="grid gap-1.5 bg-lood md:grid-cols-[minmax(0,1fr)_280px]">
              <div className="bg-papier p-6 md:p-8">
                <h2 className="text-[32px] leading-tight md:text-[40px]">{project.title}</h2>
                <p className="mt-3 font-slab text-2xl">{project.caption}</p>
                <p className="mt-3 max-w-xl text-ink">{project.visible}</p>
              </div>
              <div className="flex flex-col justify-between bg-kalk p-6">
                <p className="label">Soort werk</p>
                <p className="mt-3 font-slab text-2xl">Buitenschilderwerk</p>
                <Link href="/buitenschilderwerk" className="mt-4 font-semibold text-link underline underline-offset-4">
                  Over buitenschilderwerk
                </Link>
              </div>
            </div>
            <div className="mt-1.5">
              <ProjectGallery images={project.images} label={project.caption} />
            </div>
          </section>
        ))}
      </div>
      <CtaBand />
    </article>
  );
}
