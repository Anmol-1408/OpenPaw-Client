"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

import { TerminalDemo } from "@/components/TerminalDemo";
import { CodeBlock } from "@/components/CodeBlock";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden grid-bg pt-36 pb-24">
      <div
        className="absolute inset-0 pointer-events-none opacity-15 mix-blend-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1764258058151-f80566bc8445?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FF69B4]/40 px-3 py-1 font-mono text-xs text-[#FF69B4]"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#FF69B4]" />
            v1.4.2 — now with Telegram integration
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 font-mono text-4xl font-black leading-[1.05] tracking-tighter sm:text-5xl lg:text-6xl"
          >
            Your terminal just
            <br />
            grew <span className="neon-glow text-[#39FF14]">claws</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 max-w-lg text-base leading-relaxed text-white/60 md:text-lg"
          >
            Looper is the CLI AI agent that plans before it loops. Three
            modes, deep app integrations, and scheduled tasks — all from your
            shell.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <CodeBlock
              code="npm install -g looper"
              testId="hero-copy-install-button"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#install"
              data-testid="hero-install-cta"
              className="flex items-center gap-2 rounded-md bg-[#39FF14] px-6 py-3 font-mono text-sm font-bold text-black transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-110"
            >
              Install Looper
              <ArrowRight className="h-4 w-4" />
            </a>

            <Link
              href="/docs"
              data-testid="hero-docs-cta"
              className="flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 font-mono text-sm text-white transition-colors duration-200 hover:border-[#39FF14] hover:text-[#39FF14]"
            >
              <BookOpen className="h-4 w-4" />
              Read the docs
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="animate-float"
        >
          <TerminalDemo />
        </motion.div>
      </div>
    </section>
  );
};