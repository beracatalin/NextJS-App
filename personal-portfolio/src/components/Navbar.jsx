import Link from "next/link";
import { House, User, BriefcaseBusiness, Contact } from "lucide-react";

const hrefs = [
  { name: "Home", href: "", icon: <House /> },
  { name: "About", href: "/about", icon: <User /> },
  { name: "Projects", href: "/projects", icon: <BriefcaseBusiness /> },
  { name: "Contact", href: "/contact", icon: <Contact /> },
];

export default function Navbar() {
  return (
    <nav className="fixed bottom-10 left-0 w-full flex justify-center items-center">
      <div className="backdrop:blur-16 border-4 border-neutral-600/70 backdrop-blur-md rounded-full px-3 py-3">
        <div className="flex space-x-10 gap-0 justify-center items-center">
          {hrefs.map((item, index) => {
            return (
              <Link
                href={item.href}
                key={index}
                className= "flex flex-col justify-center self-center items-center text-sm px-5 py-4 gap-0.5 border-[50%]"
              >
                {item.icon}
                <p>{item.name}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
