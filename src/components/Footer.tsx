export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 px-6 py-10">
      <div className="mx-auto max-w-7xl text-center">
        <h3 className="text-2xl font-bold">
          PixelCraft Agency
        </h3>

        <p className="mt-4 text-slate-400">
          Building modern digital experiences through design, strategy, and technology.
        </p>

        <p className="mt-6 text-sm text-slate-500">
          © {currentYear} PixelCraft Agency. All rights reserved.
        </p>
      </div>
    </footer>
  );
}