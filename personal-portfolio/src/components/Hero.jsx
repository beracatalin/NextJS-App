'use client';

import ThemeToggle from "@/theme/theme-toggle";
import Image from "next/image"; // Next.js Image pentru optimizare
import Carousel from "./Carousel";
import ContactPage from "./Contact";

export default function Hero() {
  return (
    <>
      {/* Background */}
      <div className="fixed w-full h-auto inset-0 -z-50">
        <div className="absolute inset-0">
          <Image
            src="/background/light.png"
            alt="Fundal light"
            fill
            className="object-cover dark:opacity-0 transition-opacity duration-1000"
            priority // optimizare LCP
          />
          <Image
            src="/background/dark.png"
            alt="Fundal dark"
            fill
            className="object-cover opacity-0 dark:opacity-100 transition-opacity duration-1000"
            priority
          />
        </div>
      </div>

      {/* ================= HERO ================= */}
      <section
        id="hero"
        className="space-x-section w-full min-h-screen flex flex-col justify-center items-center px-4 text-center"
      >
        {/* Theme Toggle */}
        <span className="fixed top-4 sm:top-6 md:top-10 right-4 z-50">
          <ThemeToggle />
        </span>

        {/* Titlu */}
        <h1 className="text-3xl md:text-4xl font-sans font-bold leading-relaxed text-gray-900 dark:text-white" role="heading" aria-level={1}>
          Salutare! Eu sunt <strong>Cătălin</strong>, <br className="hidden md:block" />
          absolvent de licență și master în domeniul IT.
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 py-5 px-5">
          <a href="#projects">
            <button
              className="cursor-pointer transform border-2 bg-neutral-500/25 border-white rounded-xl h-12 px-6 backdrop-blur-md shadow-xl transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Vezi proiectele mele"
            >
              Proiecte
            </button>
          </a>

          <a href="#contact">
            <button
              className="cursor-pointer transform border-2 bg-neutral-500/25 border-white rounded-xl h-12 px-6 backdrop-blur-md shadow-xl transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Contactează-mă"
            >
              Contact
            </button>
          </a>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="space-x-section w-full min-h-screen flex justify-center items-start pt-32 px-5"
      >
        <div className="container max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-semibold mb-10 dark:text-white text-center md:text-left">
            Despre Mine
          </h2>

          <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-6 bg-black/20 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:shadow-[0_0_35px_rgba(255,255,255,0.45)] transition-shadow duration-300">
            
            {/* Profile Picture */}
            <Image
              src="/me.jpg"
              alt="Fotografie profil Cătălin Bera"
              width={144} // dimensiune optimă pentru desktop
              height={144}
              className="rounded-full object-cover border border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.35)]"
              priority
            />

            {/* Text */}
            <div className="flex flex-col gap-3 dark:text-white text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-semibold">Cătălin Bera</h3>

              <p className="dark:text-gray-300 text-sm md:text-base leading-relaxed max-w-xl">
                Absolvent de licență și master în IT, pasionat de dezvoltare web, inovație și soluții accesibile pentru toată lumea.
              </p>

              {/* Social Icons */}
              <div className="flex justify-center md:justify-start gap-4 pt-2">
                <a href="https://github.com/beracatalin/" aria-label="GitHub" className="hover:scale-110 transition-transform">
                  <Image src="/icons/github.svg" alt="GitHub" width={24} height={24} className="dark:invert" />
                </a>
                <a href="https://www.linkedin.com/in/bera-catalin-640488207/" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
                  <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} className="dark:invert" />
                </a>
                <a href="https://www.instagram.com/beracatalin/" aria-label="Instagram" className="hover:scale-110 transition-transform">
                  <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} className="dark:invert" />
                </a>
                <a href="https://www.facebook.com/catalin.bera/" aria-label="Facebook" className="hover:scale-110 transition-transform">
                  <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} className="dark:invert" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
