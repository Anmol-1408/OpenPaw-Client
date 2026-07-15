"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CodeBlock } from "@/components/CodeBlock";
import { WaitlistForm } from "@/components/WaitlistForm";

const methods = [
  {
    id: "npm",
    label: "npm",
    code: "npm install -g looper",
  },
  {
    id: "curl",
    label: "curl",
    code: "curl -fsSL https://get.looper.dev | sh",
  },
  {
    id: "brew",
    label: "brew",
    code: "brew install looper",
  },
] as const;

type MethodId = (typeof methods)[number]["id"];

export const Install = () => {
  const [active, setActive] = useState<MethodId>("npm");

  // Always returns a valid method
  const method = methods.find((m) => m.id === active) ?? methods[0];

  return (
    <section id="install" className="py-32 grid-bg border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[#39FF14] text-sm mb-3">
            // get started
          </p>

          <h2 className="font-mono font-black tracking-tighter text-3xl md:text-4xl mb-4">
            Installed in{" "}
            <span className="text-[#39FF14] neon-glow">
              10 seconds
            </span>
            .
          </h2>

          <p className="text-white/55 text-base mb-10 max-w-md mx-auto leading-relaxed">
            One command. Node 18+, macOS / Linux / WSL. Then run{" "}
            <code className="text-[#39FF14]">looper init</code>.
          </p>

          <div className="flex justify-center gap-2 mb-4">
            {methods.map((m) => (
              <button
                key={m.id}
                onClick={() => setActive(m.id)}
                data-testid={`install-tab-${m.id}`}
                className={`px-4 py-1.5 rounded-md font-mono text-sm border transition-colors duration-200 ${
                  active === m.id
                    ? "border-[#39FF14] text-[#39FF14] bg-[#39FF14]/10"
                    : "border-white/10 text-white/50 hover:text-white"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          <div className="max-w-xl mx-auto mb-6">
            <CodeBlock
              code={method.code}
              testId={`install-copy-${active}`}
            />
          </div>

          <Link
            href="/docs/installation"
            data-testid="install-docs-link"
            className="font-mono text-sm text-[#00FFFF] hover:text-white transition-colors duration-200"
          >
            Full installation guide →
          </Link>

          <div className="mt-20 pt-14 border-t border-white/10">
            <h3 className="font-mono font-bold text-xl mb-2">
              Get release updates
            </h3>

            <p className="text-white/50 text-sm mb-6">
              Join the pack — new versions, straight to your inbox.
            </p>

            <WaitlistForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
};