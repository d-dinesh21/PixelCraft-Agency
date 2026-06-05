"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-white">
          PixelCraft Agency
        </h1>

        <ul className="hidden gap-8 text-sm text-slate-300 md:flex">
          <li>
            <a href="#services" className="hover:text-white">
              Services
            </a>
          </li>

          <li>
            <a href="#portfolio" className="hover:text-white">
              Portfolio
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </li>
        </ul>

        <a
          href="#contact"
          className="hidden rounded-lg bg-cyan-500 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-400 md:block"
        >
          Get Started
        </a>

        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <div className="flex flex-col px-6 py-4">
            <a
              href="#services"
              className="py-3"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>

            <a
              href="#portfolio"
              className="py-3"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </a>

            <a
              href="#contact"
              className="py-3"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}