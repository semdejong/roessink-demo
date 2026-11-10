import type { Metadata } from "next";
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
        <p className="mt-5 max-w-2xl text-ink">Een selectie buitenschilderwerk in Enschede, Leersum en Enter.</p>
      </header>
      <div className="wrap space-y-14 pb-16">
        {content.projects.map((project) => (
          <section key={project.slug} data-section={project.slug}>
            <h2 className="text-[32px] leading-tight">{project.title}</h2>
            <p className="mt-2 font-medium">{project.caption}</p>
            <p className="mt-1 text-ink">{project.visible}</p>
            <div className="mt-5">
              <ProjectGallery images={project.images} label={project.caption} />
            </div>
          </section>
        ))}
      </div>
      <CtaBand />
    </article>
  );
}
