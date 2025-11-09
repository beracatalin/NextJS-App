"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,3}$/;

    const name = form.name.trim();
    const message = form.message.trim();

    if (name === "" || message === "") {
      setStatus("Te rog completează numele și mesajul ❌");
      return;
    }

    if (message.length < 10) {
      setStatus("Mesajul trebuie să aibă cel puțin 10 caractere ❌");
      return;
    }

    if (!emailRegex.test(form.email)) {
      setStatus("Te rog folosește un email valid ❌");
      return;
    }

    setStatus("Se trimite...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("Mesaj trimis cu succes ✅");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("A apărut o eroare ❌");
    }
  }

  return (
    <div className="w-full sm:w-[90%] md:w-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-6 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 md:p-6 shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_30px_rgba(255,255,255,0.45)] transition-shadow duration-300">
      
      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-full md:w-auto p-6 sm:p-8 md:p-8 rounded-3xl backdrop-blur-2xl dark:text-white bg-neutral-500/10 border border-white/20 shadow-xl space-y-4 sm:space-y-5 md:space-y-6 transition-all"
        aria-label="Formular de contact"
      >
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold dark:text-white text-neutral-500 text-center mb-2 drop-shadow">
          Contact
        </h1>
        <p className="text-center dark:text-white text-neutral-400 text-xs sm:text-sm md:text-sm -mt-2 sm:-mt-3 mb-4 sm:mb-6">
          Spune-mi cu ce te pot ajuta – răspund cât pot de repede.
        </p>

        <label htmlFor="name" className="sr-only">Numele tău</label>
        <input
          id="name"
          type="text"
          placeholder="Numele tău"
          aria-label="Numele tău"
          aria-required="true"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-2.5 sm:p-3 rounded-xl dark:text-white dark:placeholder-white bg-neutral-600/10 border border-white/20 text-neutral-500 placeholder-neutral-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white/30 transition"
        />

        <label htmlFor="email" className="sr-only">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          aria-label="Email"
          aria-required="true"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-2.5 sm:p-3 rounded-xl dark:text-white dark:placeholder-white bg-neutral-600/10 border border-white/20 text-neutral-500 placeholder-neutral-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white/30 transition"
        />

        <label htmlFor="message" className="sr-only">Mesajul tău</label>
        <textarea
          id="message"
          placeholder="Mesajul tău"
          aria-label="Mesajul tău"
          aria-required="true"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full h-24 sm:h-32 p-2.5 sm:p-3 rounded-xl dark:text-white dark:placeholder-white bg-neutral-600/10 border border-white/20 text-neutral-500 placeholder-neutral-500 text-sm sm:text-base resize-none focus:outline-none focus:ring-2 focus:ring-white/30 transition"
        />

        <button
          type="submit"
          aria-label="Trimite mesajul"
          className="w-full p-2.5 sm:p-3 rounded-xl border border-white/20 dark:text-white dark:placeholder-white bg-neutral-600/10 text-neutral-500 text-sm sm:text-base font-semibold hover:bg-white/30 active:scale-95 transition-all"
        >
          Trimite mesajul
        </button>

        {status && (
          <p
            role="status"
            className="text-center text-xs sm:text-sm md:text-sm dark:text-white text-neutral-400 pt-1 sm:pt-2"
          >
            {status}
          </p>
        )}
      </form>
    </div>
  );
}
