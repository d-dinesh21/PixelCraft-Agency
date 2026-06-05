export default function WhyChooseUs() {
  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" },
    { value: "5+", label: "Years Experience" },
  ];

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center text-4xl font-bold">
          Why Choose Us
        </h2>

        <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
          We combine creativity, technology, and strategy to deliver
          exceptional digital experiences.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
            >
              <h3 className="text-4xl font-bold text-cyan-400">
                {stat.value}
              </h3>

              <p className="mt-3 text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}