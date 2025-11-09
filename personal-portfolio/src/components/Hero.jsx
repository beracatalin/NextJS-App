'use client'
import ThemeToggle from "@/theme/theme-toggle";
import Carousel from "./Carousel";
import ContactPage from "./Contact";

export default function Hero() {
  return (
    <>
      {/* Background */}
      <div className="fixed w-full h-auto inset-0 -z-50">
        <div className="absolute inset-0 bg-[url('/background/light.png')] bg-cover dark:opacity-0 transition-opacity duration-1000" />
        <div className="absolute inset-0 bg-[url('/background/dark.png')] bg-cover opacity-0 dark:opacity-100 transition-opacity duration-1000" />
      </div>

      {/* ================= HERO ================= */}
      <section
        id="hero"
        className="space-x-section w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-5 text-center"
      >
        <span className="fixed top-5 right-5">
          <ThemeToggle />
        </span>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold leading-relaxed">
          Salutare! Eu sunt Cătălin, <br className="hidden md:block" /> 
          absolvent de licență și master în domeniul IT.
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-10 py-5 px-3 sm:px-5">
          <a href="#projects">
            <button className="cursor-pointer transform border-2 bg-neutral-500/25 border-white rounded-xl h-10 sm:h-12 px-4 sm:px-6 backdrop-blur-md shadow-xl transition duration-300 hover:scale-105 text-sm sm:text-base">
              Proiecte
            </button>
          </a>

          <a href="#contact">
            <button className="cursor-pointer transform border-2 bg-neutral-500/25 border-white rounded-xl h-10 sm:h-12 px-4 sm:px-6 backdrop-blur-md shadow-xl transition duration-300 hover:scale-105 text-sm sm:text-base">
              Contact
            </button>
          </a>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="space-x-section w-full min-h-screen flex justify-center items-start pt-32 px-4 sm:px-5"
      >
        <div className="container max-w-3xl">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 sm:mb-10 dark:text-white text-center md:text-left">
            Despre Mine
          </h3>

          <div
            className="w-full flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6 bg-black/20 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_30px_rgba(255,255,255,0.45)] transition-shadow duration-300"
          >
            {/* Profile Picture */}
            <img
              src="/me.jpg"
              alt="Profil"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full object-cover border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.35)]"
            />

            {/* Text */}
            <div className="flex flex-col gap-2 sm:gap-3 dark:text-white text-center md:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Cătălin Bera</h2>

              <p className="dark:text-gray-300 text-sm sm:text-base md:text-base leading-relaxed max-w-xl">
                Absolvent de licență și master în IT, pasionat de dezvoltare web,
                inovație și soluții accesibile pentru toată lumea.
              </p>

              {/* Social Icons */}
              <div className="flex justify-center md:justify-start gap-3 sm:gap-4 pt-2">
                <a href="https://github.com/beracatalin/" className="hover:scale-110 transition-transform">
                  <img src="/icons/github.svg" className="w-5 sm:w-6 h-5 sm:h-6 dark:invert" />
                </a>
                <a href="https://www.linkedin.com/in/bera-catalin-640488207/" className="hover:scale-110 transition-transform">
                  <img src="/icons/linkedin.svg" className="w-5 sm:w-6 h-5 sm:h-6 dark:invert" />
                </a>
                <a href="https://www.instagram.com/beracatalin/" className="hover:scale-110 transition-transform">
                  <img src="/icons/instagram.svg" className="w-5 sm:w-6 h-5 sm:h-6 dark:invert" />
                </a>
                <a href="https://www.facebook.com/catalin.bera/" className="hover:scale-110 transition-transform">
                  <img src="/icons/facebook.svg" className="w-5 sm:w-6 h-5 sm:h-6 dark:invert" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="space-x-section w-full min-h-screen flex justify-center items-start pt-32 py-16 sm:py-20 px-4 sm:px-5"> 
        <div className="container w-full"> 
          <h3 className="text-4xl sm:text-5xl font-semibold mb-8 sm:mb-10 dark:text-white text-center md:text-left">
            Proiectele mele
          </h3>

          <div className="w-full flex justify-center">
            <Carousel />
          </div>
        </div>
      </section>  

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="space-x-section w-full min-h-screen flex justify-center items-start pt-32 px-4 sm:px-5"
      >
        <div className="container w-full max-w-4xl">
          <ContactPage />
        </div>
      </section>
      <footer className="w-full bg-neutral-900/80 dark:bg-black/80 text-gray-400 dark:text-gray-300 py-6 px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
  {/* Copyright */}
  <p className="text-sm text-center sm:text-left">
    &copy; {new Date().getFullYear()} - Toate drepturile sunt rezervate
  </p>

  {/* Link-uri sociale (opțional) */}
  <div className="flex gap-4">
    <a href="https://github.com/beracatalin/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
      GitHub
    </a>
    <a href="https://www.linkedin.com/in/bera-catalin-640488207/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
      LinkedIn
    </a>
    <a href="https://www.instagram.com/beracatalin/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
      Instagram
    </a>
  </div>
</footer>

    </>
  );
}
