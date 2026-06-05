export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/10 via-slate-950 to-blue-500/10" />

      {/* Glow Effects */}
      <div className="absolute left-1/4 top-20 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute bottom-20 right-1/4 -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="mx-auto max-w-4xl text-center animate-[fadeIn_1s_ease-out]">
        <span className="mt-6 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
          Creative Design & Development Agency
        </span>

        <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
          Crafting Digital
          <span className="block text-cyan-400">
            Experiences That Inspire Growth
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          We help startups and businesses create stunning websites,
          memorable brands, and impactful digital experiences that
          drive real results.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#portfolio"
            className="rounded-lg bg-cyan-500 px-6 py-3 font-medium text-white transition hover:bg-cyan-400"
          >
            View Our Work
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-slate-700 px-6 py-3 font-medium text-white transition hover:border-cyan-400"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}