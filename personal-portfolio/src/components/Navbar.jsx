import Link from "next/link";
import { House, User, BriefcaseBusiness, Contact } from "lucide-react";

const hrefs = [
  { name: "Home", href: "", icon: <House /> },
  { name: "About", href: "#about", icon: <User /> },
  { name: "Projects", href: "#projects", icon: <BriefcaseBusiness /> },
  { name: "Contact", href: "#contact", icon: <Contact /> },
];

export default function Navbar() {
  return (
    <nav className="fixed top-4 sm:top-6 md:top-10 left-1/2 transform -translate-x-1/2 z-50 w-auto h-auto flex justify-center items-center">
      <div className="bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg px-3 sm:px-6 py-2 sm:py-3 rounded-2xl transition-all">
        <div className="flex flex-col sm:flex-row sm:space-x-6 justify-center items-center divide-y sm:divide-x sm:divide-y-0 dark:divide-white/20 divide-black/20">
          {hrefs.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="px-2 sm:px-4 py-2 sm:py-0 flex items-center gap-1 sm:gap-2 justify-center dark:hover:bg-white/20 hover:bg-white/50 first:pl-0 last:pr-0 rounded transition"
            >
              {item.icon}
              <span className="text-sm sm:text-base">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
