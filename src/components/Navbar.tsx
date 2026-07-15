"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Repeat2, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button"

const links = [
  { to: "/", label: "Home" },
  { to: "/docs", label: "Docs" },
  { to: "/changelog", label: "Changelog" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a12]/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          data-testid="nav-logo"
          className="flex items-center gap-2 group"
        >
          <Repeat2 className="w-6 h-6 text-[#39FF14] transition-transform duration-300 group-hover:rotate-12" />
          <span className="font-mono text-lg tracking-tighter font-bold">
            loo<span className="text-[#39FF14]">per</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className={`text-sm font-mono transition-colors duration-200 hover:text-[#39FF14] ${
                pathname === l.to ||
                (l.to !== "/" && pathname.startsWith(l.to))
                  ? "text-[#39FF14]"
                  : "text-white/70"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link className="bg-primary text-primary-foreground hover:bg-primary/80 py-0.5 px-2 rounded-sm"
           href={"/sign-in"}>{'> '}Login</Link>
        </nav>

        <button
          data-testid="nav-mobile-toggle"
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-[#0a0a12] border-b border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              onClick={() => setOpen(false)}
              className={`text-sm font-mono transition-colors ${
                pathname === l.to ||
                (l.to !== "/" && pathname.startsWith(l.to))
                  ? "text-[#39FF14]"
                  : "text-white/80 hover:text-[#39FF14]"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
};