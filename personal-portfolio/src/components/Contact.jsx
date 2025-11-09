'use client';
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const validateEmail = (email) => {
    // Format: text@text.xxx  (max 3 litere după ".")
    const regex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{1,3}$/;
    return regex.test(email);
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setStatus("Numele nu poate conține doar spații.");
      return false;
    }

    if (!validateEmail(formData.email)) {
      setStatus("Email invalid. Format acceptat: nume@domeniu.xxx (max 3 litere după .)");
      return false;
    }

    if (!formData.message.trim()) {
      setStatus("Mesajul nu poate conține doar spații.");
      return false;
    }

    if (formData.message.trim().length < 10) {
      setStatus("Mesajul trebuie să aibă cel puțin 10 caractere.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("");

    if (!validateForm()) return;

    setStatus("Mesaj trimis cu succes!");
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center px-6 sm:px-10 pt-20 sm:pt-32 pb-10 sm:pb-20"
    >
      {/* Titlu */}
      <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white text-center mb-2 drop-shadow">
        Contact
      </h1>

      {/* Subtext */}
      <p className="text-center text-neutral-700 dark:text-white text-xs sm:text-sm -mt-2 mb-4 sm:mb-6">
        Spune-mi cu ce te pot ajuta – răspund cât pot de repede.
      </p>

      {/* Card formular */}
      <form
        onSubmit={handleSubmit}
        className="
          w-full max-w-md 
          bg-neutral-600/10 backdrop-blur-xl 
          border border-white/20 
          p-5 sm:p-7 rounded-2xl shadow-xl
          flex flex-col gap-4 sm:gap-6
        "
      >
        {/* Nume */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="name"
            className="text-neutral-900 dark:text-white text-sm font-semibold"
          >
            Nume
          </label>
          <input
            id="name"
            aria-label="Introdu numele tău"
            type="text"
            className="
              w-full p-2.5 sm:p-3 rounded-xl 
              text-neutral-900 dark:text-white 
              placeholder-neutral-500 dark:placeholder-white 
              bg-neutral-600/10 border border-white/20 
              text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white/30 transition
            "
            placeholder="Numele tău"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className="text-neutral-900 dark:text-white text-sm font-semibold"
          >
            Email
          </label>
          <input
            id="email"
            aria-label="Introdu adresa ta de email"
            type="email"
            className="
              w-full p-2.5 sm:p-3 rounded-xl 
              text-neutral-900 dark:text-white 
              placeholder-neutral-500 dark:placeholder-white 
              bg-neutral-600/10 border border-white/20 
              text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white/30 transition
            "
            placeholder="exemplu@domeniu.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        {/* Mesaj */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="message"
            className="text-neutral-900 dark:text-white text-sm font-semibold"
          >
            Mesaj
          </label>
          <textarea
            id="message"
            aria-label="Scrie mesajul tău"
            className="
              w-full p-2.5 sm:p-3 rounded-xl 
              text-neutral-900 dark:text-white 
              placeholder-neutral-500 dark:placeholder-white 
              bg-neutral-600/10 border border-white/20 
              text-sm sm:text-base h-28 
              focus:outline-none focus:ring-2 focus:ring-white/30 transition
            "
            placeholder="Scrie mesajul aici..."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </div>

        {/* Buton */}
        <button
          type="submit"
          aria-label="Trimite mesajul"
          className="
            w-full p-2.5 sm:p-3 rounded-xl 
            border border-white/20 
            text-neutral-900 dark:text-white 
            bg-neutral-600/10 
            text-sm sm:text-base font-semibold 
            hover:bg-white/30 active:scale-95 transition-all
          "
        >
          Trimite mesajul
        </button>

        {/* Status */}
        {status && (
          <p
            role="status"
            className="text-center text-neutral-800 dark:text-white text-xs sm:text-sm pt-1 sm:pt-2"
          >
            {status}
          </p>
        )}
      </form>
    </section>
  );
}
