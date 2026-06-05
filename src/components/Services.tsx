import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center text-4xl font-bold">
          Our Services
        </h2>

        <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
          We provide creative and technical solutions
          to help businesses grow online.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
              >
                <Icon
                  size={36}
                  className="mb-4 text-cyan-400"
                />

                <h3 className="mb-3 text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="text-slate-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}