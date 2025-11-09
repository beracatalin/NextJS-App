'use client';

import ThemeToggle from "@/theme/theme-toggle";
import Image from "next/image";
import Carousel from "./Carousel";
import ContactPage from "./Contact";

export default function Hero() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        id="hero"
        className="relative w-full min-h-screen flex flex-col justify-center items-center px-4 text-center"
        aria-label="Secțiunea introductivă Hero"
      >
        {/* Background */}
        <div className="fixed w-full h-full inset-0 -z-50" aria-hidden="true">
          <Image
            src="/background/light.png"
            alt=""
            fill
            className="object-cover dark:opacity-0 transition-opacity duration-1000"
            priority
          />
          <Image
            src="/background/dark.png"
            alt=""
            fill
            className="object-cover opacity-0 dark:opacity-100 transition-opacity duration-1000"
            priority
          />
        </div>

        {/* Theme Toggle */}
        <span className="fixed top-4 sm:top-6 md:top-10 right-4 z-50">
          <ThemeToggle aria-label="Comută între modul luminos și întunecat" />
        </span>

        {/* Titlu */}
        <h1
          className="text-3xl md:text-4xl font-sans font-bold leading-relaxed 
          text-black/90 dark:text-white/90"
          aria-level={1}
          role="heading"
        >
          Salutare! Eu sunt <strong>Cătălin</strong>, <br className="hidden md:block" />
          absolvent de licență și master în domeniul IT.
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 py-5 px-5">
          <a href="#projects">
            <button
              className="
                cursor-pointer transform
                border border-white/30 dark:border-white/20
                bg-white/20 dark:bg-white/10
                text-black/90 dark:text-white/90
                rounded-xl h-12 px-6
                backdrop-blur-xl shadow-lg shadow-black/20
                transition duration-300 hover:scale-105 
                focus:outline-none focus:ring-2 focus:ring-white/70
              "
              aria-label="Navighează către proiectele mele"
            >
              Proiecte
            </button>
          </a>

          <a href="#contact">
            <button
              className="
                cursor-pointer transform
                border border-white/30 dark:border-white/20
                bg-white/20 dark:bg-white/10
                text-black/90 dark:text-white/90
                rounded-xl h-12 px-6
                backdrop-blur-xl shadow-lg shadow-black/20
                transition duration-300 hover:scale-105
                focus:outline-none focus:ring-2 focus:ring-white/70
              "
              aria-label="Navighează către secțiunea de contact"
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
        aria-label="Despre mine"
      >
        <div className="container max-w-3xl">
          <h2
            className="text-4xl md:text-5xl font-semibold mb-10 dark:text-white text-center md:text-left"
            aria-level={2}
            role="heading"
          >
            Despre Mine
          </h2>

          <div
            className="
              w-full flex flex-col md:flex-row items-center md:items-start gap-6
              bg-white/10 dark:bg-white/5
              backdrop-blur-xl border border-white/30 dark:border-white/20
              rounded-2xl p-6
              shadow-[0_0_25px_rgba(0,0,0,0.25)]
              hover:shadow-[0_0_35px_rgba(0,0,0,0.45)]
              transition-shadow duration-300
            "
            role="region"
            aria-label="Profil personal"
          >
            {/* Profile Picture */}
            <Image
              src="/me.jpg"
              alt="Fotografia lui Cătălin Bera"
              width={144}
              height={144}
              className="
                rounded-full object-cover
                border border-white/40 dark:border-white/20
                shadow-[0_0_20px_rgba(0,0,0,0.35)]
              "
              priority
            />

            {/* Text */}
            <div className="flex flex-col gap-3 dark:text-white text-center md:text-left">
              <h3
                className="text-2xl md:text-3xl font-semibold"
                aria-level={3}
                role="heading"
              >
                Cătălin Bera
              </h3>

              <p className="dark:text-gray-300 text-sm md:text-base leading-relaxed max-w-xl">
                Absolvent de licență și master în IT, pasionat de dezvoltare web, inovație și soluții accesibile pentru toată lumea.
              </p>

              {/* Social Icons */}
              <div className="flex justify-center md:justify-start gap-4 pt-2">

                <a
                  href="https://github.com/beracatalin/"
                  aria-label="Profil GitHub"
                  className="hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-white/70 p-1 rounded"
                >
                  <Image src="/icons/github.svg" alt="" width={24} height={24} className="dark:invert" />
                </a>

                <a
                  href="https://www.linkedin.com/in/bera-catalin-640488207/"
                  aria-label="Profil LinkedIn"
                  className="hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-white/70 p-1 rounded"
                >
                  <Image src="/icons/linkedin.svg" alt="" width={24} height={24} className="dark:invert" />
                </a>

                <a
                  href="https://www.instagram.com/beracatalin/"
                  aria-label="Profil Instagram"
                  className="hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-white/70 p-1 rounded"
                >
                  <Image src="/icons/instagram.svg" alt="" width={24} height={24} className="dark:invert" />
                </a>

                <a
                  href="https://www.facebook.com/catalin.bera/"
                  aria-label="Profil Facebook"
                  className="hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-white/70 p-1 rounded"
                >
                  <Image src="/icons/facebook.svg" alt="" width={24} height={24} className="dark:invert" />
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section
        id="projects"
        className="space-x-section w-full min-h-screen flex flex-col justify-center items-center pt-32 px-4"
        aria-label="Proiectele mele"
      >
        <h2
          className="text-5xl font-semibold mb-10 dark:text-white text-center"
          aria-level={2}
          role="heading"
        >
          Proiectele mele
        </h2>
        <div className="w-full flex justify-center" role="region" aria-label="Carousel proiecte">
          <Carousel />
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="space-x-section w-full min-h-screen flex justify-center items-start pt-32 px-4"
        aria-label="Formular de contact"
      >
        <div className="container w-full max-w-4xl">
          <ContactPage />
        </div>
      </section>

  <footer
  className="
  backdrop: blur-16 backdrop-blur-md
    w-full bg-neutral-700/80 dark:bg-black/90
    text-gray-300 dark:text-gray-200
    py-6 px-4 sm:px-8
    flex flex-col sm:flex-row items-center
  "
  aria-label="Secțiune footer"
>
  <img className="w-8 h-8 mr-2" src="/CS.svg" alt="Logo"/>
  {/* Text centrat pe toate dimensiunile */}
  <div className="w-full flex justify-center sm:justify-center">
    <p className="text-sm text-center">
      &copy; {new Date().getFullYear()} - Toate drepturile sunt rezervate
    </p>
  </div>

  {/* Link-uri aliniate la dreapta pe desktop, sub text pe mobil */}
<div className="w-full sm:w-auto flex justify-center sm:justify-end gap-4 mt-3 sm:mt-0">
  <a href="https://github.com/beracatalin/" aria-label="GitHub" className="hover:scale-110 transition-transform">
    <Image src="/icons/github.svg" alt="GitHub" width={24} height={24} className="dark:invert" />
  </a>
  <a href="https://www.linkedin.com/in/bera-catalin-640488207/" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
    <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} className="dark:invert" />
  </a>
  <a href="https://www.instagram.com/beracatalin/" aria-label="Instagram" className="hover:scale-110 transition-transform">
    <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} className="dark:invert" />
  </a>
</div>

</footer>


    </>
  );
}
