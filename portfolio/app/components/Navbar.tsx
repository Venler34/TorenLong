"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

const bubbleColors = [
  "bg-pink-500",
  "bg-blue-500",
  "bg-purple-500",
  "bg-green-500",
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="
      sticky top-0 z-50
      bg-gradient-to-r from-white/60 via-white/30 to-white/60
      backdrop-blur-lg
      border-b border-white/20
      shadow-md
    ">
      <div className="max-w-4xl mx-auto px-6 py-4 flex gap-4">
        {navLinks.map(({ href, label }, idx) => {
          const isActive = pathname === href;
          const color = bubbleColors[idx];

          return (
            <Link
              key={href}
              href={href}
              className={`
                px-5 py-2 rounded-full text-sm font-semibold
                select-none cursor-pointer
                transform transition-all duration-300
                ${isActive
                  ? `
                    ${color} text-white shadow-lg scale-105 
                    ring-2 ring-white/40 animate-pulse
                  `
                  : `
                    ${color} text-white shadow-md
                    hover:scale-110 hover:-rotate-1 hover:brightness-110
                    hover:shadow-xl hover:shadow-${color.replace("bg-", "")}-300/50
                    active:scale-95 active:rotate-0
                  `
                }
              `}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
