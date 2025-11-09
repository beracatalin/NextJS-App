"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Eye, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Proiect Licență",
    desc: "Un test pentru a pregăti studenții de Informatică Economică pentru examenul de Licență.",
    image: "/projects/licenta.png",
    preview: "https://lucrare-licenta.vercel.app/",
    github: "https://github.com/beracatalin/Aplica-ie-licen-----Bera-C-t-lin-George",
  },
  {
    id: 2,
    title: "Who Am I",
    desc: "Un portofoliu făcut în AngularJS, reprezentând experiența personală și profesională din 2023.",
    image: "/projects/who-am-i.png",
    preview: "https://who-am-i-xi.vercel.app/",
    github: "https://github.com/beracatalin/who-am-i",
  },
];

export default function ProjectCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const current = projects[index];

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-8">

      {/* Border gradient fancy */}
      <div
        className="
          rounded-3xl p-0.5
          bg-linear-to-br from-neutral-400/60 to-neutral-500/60 
          dark:from-neutral-700/60 dark:to-neutral-900/60
          shadow-2xl w-full transition-all
        "
      >

        {/* Inner glass container */}
        <div
          className="
           w-full flex flex-col items-center gap-4 sm:gap-6 md:gap-6 bg-black/20 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 md:p-6 shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_30px_rgba(255,255,255,0.45)] transition-shadow duration-300
          "
        >

          <div className="flex flex-col xl:flex-row gap-6 sm:gap-10 xl:gap-14 items-center">

            {/* Imagine mare */}
            <div className="w-full xl:w-1/2 flex justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.id}
                  src={current.image}
                  alt={current.title}
                  initial={{ opacity: 0, scale: 0.9, x: -40 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: 40 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl max-h-[300px] sm:max-h-[400px] md:max-h-[500px] xl:max-h-[550px] w-full object-contain shadow-xl"
                />
              </AnimatePresence>
            </div>

            {/* Text + butoane */}
            <AnimatePresence mode="wait">
              <motion.div
                key={"desc-" + current.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
                className="w-full xl:w-1/2 space-y-4 sm:space-y-5 md:space-y-6"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-4xl font-bold text-white">{current.title}</h2>

                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                  {current.desc}
                </p>

                {/* Butoane glass large */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 pt-3 sm:pt-4">

                  <a href={current.preview} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 sm:px-10 py-2 sm:py-2.5 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition shadow-lg hover:shadow-neutral-900/60 text-white font-semibold text-sm sm:text-base">
                    <Eye size={16} className="sm:mr-1" /> Previzualizare
                  </a>

                  <a href={current.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 sm:px-10 py-2 sm:py-2.5 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition shadow-lg hover:shadow-neutral-900/60 text-white font-semibold text-sm sm:text-base">
                    <Github size={16} className="sm:mr-1" /> GitHub
                  </a>

                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Butoane navigare */}
          <div className="flex flex-row gap-6 sm:gap-10 justify-between pt-6 sm:pt-10">

            <button
              onClick={prev}
              className="
                p-3 sm:p-4 bg-white/10 backdrop-blur-xl 
                border border-white/20
                rounded-full hover:bg-white/20 shadow-lg transition
              "
            >
              <ChevronLeft size={24} sm={28} className="text-white" />
            </button>

            <button
              onClick={next}
              className="
                p-3 sm:p-4 bg-white/10 backdrop-blur-xl 
                border border-white/20
                rounded-full hover:bg-white/20 shadow-lg transition
              "
            >
              <ChevronRight size={24} sm={28} className="text-white" />
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}
