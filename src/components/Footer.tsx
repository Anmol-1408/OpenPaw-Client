"use client";

import Link from "next/link";
import { PawPrint, MessageCircle } from "lucide-react";
import { WaitlistForm } from "@/components/WaitlistForm";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a12]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="mb-4 flex items-center gap-2">
              <PawPrint className="h-6 w-6 text-[#39FF14]" />
              <span className="font-mono text-lg font-bold tracking-tighter">
                open<span className="text-[#39FF14]">paw</span>
              </span>
            </div>

            <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/50">
              The CLI AI agent that plans, asks, and acts. Join the waitlist
              for early access to new releases.
            </p>

            <WaitlistForm compact />
          </div>

          {/* Product */}
          <div className="md:col-span-2 md:col-start-8">
            <h4 className="mb-4 font-mono text-sm text-[#39FF14]">
              Product
            </h4>

            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link
                  href="/docs/installation"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Install
                </Link>
              </li>

              <li>
                <Link
                  href="/docs/modes"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Modes
                </Link>
              </li>

              <li>
                <Link
                  href="/changelog"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* Docs */}
          <div className="md:col-span-2">
            <h4 className="mb-4 font-mono text-sm text-[#39FF14]">
              Docs
            </h4>

            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link
                  href="/docs/quickstart"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Quickstart
                </Link>
              </li>

              <li>
                <Link
                  href="/docs/integrations"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Integrations
                </Link>
              </li>

              <li>
                <Link
                  href="/docs/scheduling"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Scheduling
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-1">
            <h4 className="mb-4 font-mono text-sm text-[#39FF14]">
              Social
            </h4>

            <div className="flex gap-3">
              {/* GitHub */}
              {/* <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 transition-colors duration-200 hover:text-[#39FF14]"
              >
                <Github className="h-5 w-5" />
              </a> */}

              {/* X / Twitter */}
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 transition-colors duration-200 hover:text-[#39FF14]"
              >
                <Twitter className="h-5 w-5" />
              </a> */}

              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 transition-colors duration-200 hover:text-[#39FF14]"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/5 pt-8 font-mono text-xs text-white/30 md:flex-row">
          <span>© 2026 OpenPaw. MIT Licensed.</span>
          <span>$ openpaw --version 1.4.2</span>
        </div>
      </div>
    </footer>
  );
};