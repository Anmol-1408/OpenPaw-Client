"use client";

import Link from "next/link";
import { PawPrint, MessageCircle } from "lucide-react";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

import { WaitlistForm } from "@/components/WaitlistForm";

const footerData = {
  brand: {
    name: "open",
    highlight: "paw",
    description:
      "The CLI AI agent that plans, asks, and acts. Join the waitlist for early access to new releases.",
  },

  sections: [
    {
      title: "Product",
      links: [
        {
          label: "Install",
          href: "/docs/installation",
        },
        {
          label: "Modes",
          href: "/docs/modes",
        },
        {
          label: "Changelog",
          href: "/changelog",
        },
      ],
    },
    {
      title: "Docs",
      links: [
        {
          label: "Quickstart",
          href: "/docs/quickstart",
        },
        {
          label: "Integrations",
          href: "/docs/integrations",
        },
        {
          label: "Scheduling",
          href: "/docs/scheduling",
        },
      ],
    },
  ],

  social: [
    {
      name: "GitHub",
      href: "https://github.com",
      icon: FaGithub,
    },
    {
      name: "X",
      href: "https://twitter.com",
      icon: FaXTwitter,
    },
    {
      name: "Telegram",
      href: "https://t.me",
      icon: MessageCircle,
    },
  ],

  copyright: "© 2026 OpenPaw. MIT Licensed.",
  version: "$ openpaw --version 1.4.2",
};

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a12]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="mb-4 flex items-center gap-2">
              <PawPrint className="h-6 w-6 text-[#39FF14]" />

              <span className="font-mono text-lg font-bold tracking-tighter">
                {footerData.brand.name}
                <span className="text-[#39FF14]">
                  {footerData.brand.highlight}
                </span>
              </span>
            </div>

            <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/50">
              {footerData.brand.description}
            </p>

            <WaitlistForm compact />
          </div>

          {/* Navigation */}
          {footerData.sections.map((section, index) => (
            <div
              key={section.title}
              className={
                index === 0 ? "md:col-span-2 md:col-start-8" : "md:col-span-2"
              }
            >
              <h4 className="mb-4 font-mono text-sm text-[#39FF14]">
                {section.title}
              </h4>

              <ul className="space-y-2 text-sm text-white/60">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social */}
          <div className="md:col-span-1">
            <h4 className="mb-4 font-mono text-sm text-[#39FF14]">
              Social
            </h4>

            <div className="flex gap-4">
              {footerData.social.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="text-white/50 transition-colors duration-200 hover:text-[#39FF14]"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/5 pt-8 font-mono text-xs text-white/30 md:flex-row">
          <span>{footerData.copyright}</span>
          <span>{footerData.version}</span>
        </div>
      </div>
    </footer>
  );
};