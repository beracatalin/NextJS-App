'use client';

import { useState } from "react";
import Link from "next/link";
import { House, User, BriefcaseBusiness, Contact, X, Menu } from "lucide-react";

const hrefs = [
  { name: "Home", href: "#hero", icon: <House /> },
  { name: "About", href: "#about", icon: <User /> },
  { name: "Projects", href: "#projects", icon: <BriefcaseBusiness /> },
  { name: "Contact", href: "#contact", icon: <Contact /> },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ---------------- DESKTOP NAVBAR ---------------- */}
      <nav className="hidden md:flex fixed top-10 left-1/2 transform -translate-x-1/2 w-auto h-auto z-50">
        <div className="bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg px-6 py-3 rounded-2xl">
          <div className="flex space-x-6 justify-center items-center divide-x dark:divide-white/20 divide-black/20">
            {hrefs.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="px-4 justify-center dark:hover:bg-white/20 hover:bg-white/50 first:pl-0 last:pr-0 flex items-center gap-2"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* ---------------- MOBILE NAVBAR ---------------- */}
      <nav className="md:hidden fixed top-5 left-5 z-9999">
        {/* Buton glassy */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Închide meniul" : "Deschide meniul"}
          className={`
            p-4 rounded-full
            bg-white/20 dark:bg-black/20
            backdrop-blur-xl border border-white/30 dark:border-white/20
            shadow-lg
            text-black dark:text-white
            focus:outline-none focus:ring-2 focus:ring-white/50
            transition-all duration-300 transform hover:scale-105 active:scale-95
          `}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Meniu mobile cu animatie */}
        <div
        aria-label="menu"
          className={`
            absolute top-16 left-0 w-52
            bg-white/30 dark:bg-black/30 backdrop-blur-xl
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
              className="flex items-center gap-3 px-4 py-3 hover:bg-white/20 dark:hover:bg-white/10 transition rounded-lg"
              onClick={() => setOpen(false)} // inchide meniul dupa click
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
