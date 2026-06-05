import Image from "next/image";
import { projects } from "@/data/projects";
export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center text-4xl font-bold">
          Our Portfolio
        </h2>

        <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
          Explore some of the projects we have crafted for our clients.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
            >
              <div className="relative h-56 w-full">
                  <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}