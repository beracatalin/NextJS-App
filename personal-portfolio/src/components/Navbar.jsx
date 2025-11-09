'use client';

import { useState } from "react";
import Link from "next/link";
import { House, User, BriefcaseBusiness, Contact, X, Menu } from "lucide-react";

const hrefs = [
  { name: "Home", href: "#hero", icon: <House aria-hidden="true" /> },
  { name: "About", href: "#about", icon: <User aria-hidden="true" /> },
  { name: "Projects", href: "#projects", icon: <BriefcaseBusiness aria-hidden="true" /> },
  { name: "Contact", href: "#contact", icon: <Contact aria-hidden="true" /> },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ---------------- DESKTOP NAVBAR ---------------- */}
      <nav
        role="navigation"
        aria-label="Navigare principală desktop"
        className="hidden md:flex fixed top-10 left-1/2 transform -translate-x-1/2 w-auto h-auto z-50"
      >
        <div className="bg-white/15 dark:bg-black/20 backdrop-blur-xl border border-white/25 dark:border-white/10 shadow-lg px-6 py-3 rounded-2xl">
          <div className="flex space-x-6 justify-center items-center divide-x dark:divide-white/20 divide-black/20">
            {hrefs.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                aria-label={`Navighează la secțiunea ${item.name}`}
                className="
                  px-4 first:pl-0 last:pr-0 flex items-center gap-2
                  dark:hover:bg-white/20 hover:bg-white/40
                  rounded-xl py-2
                  focus:outline-none focus:ring-2 focus:ring-white/60
                "
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* ---------------- MOBILE NAVBAR ---------------- */}
      <nav
        role="navigation"
        aria-label="Navigare principală mobil"
        className="md:hidden fixed top-5 left-5 z-[9999]"
      >
        {/* Buton glassy */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="
            p-4 rounded-full
            bg-white/25 dark:bg-black/25
            backdrop-blur-xl border border-white/30 dark:border-white/20
            shadow-lg
            text-black dark:text-white
            focus:outline-none focus:ring-3 focus:ring-white/60
            transition-all duration-300 transform hover:scale-105 active:scale-95
          "
        >
          {open ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
        </button>

        {/* Meniu mobile cu animatie */}
        <div
          id="mobile-menu"
          aria-label="Meniu de navigație mobil"
          className={`
            absolute top-16 left-0 w-56
            bg-white/35 dark:bg-black/35 backdrop-blur-xl
            border border-white/30 dark:border-white/20
            rounded-2xl shadow-lg
            flex flex-col py-2
            transition-all duration-500
            ${open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}
          `}
        >
          {hrefs.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              aria-label={`Navighează la secțiunea ${item.name}`}
              className="
                flex items-center gap-3 px-5 py-3
                hover:bg-white/35 dark:hover:bg-white/10
                transition rounded-lg
                focus:outline-none focus:ring-2 focus:ring-white/50
              "
              onClick={() => setOpen(false)}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
