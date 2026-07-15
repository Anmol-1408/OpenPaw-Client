"use client";

import { motion } from "framer-motion";
import { Map, MessageCircleQuestion, Zap } from "lucide-react";

const modes = [
  {
    icon: Map,
    name: "Plan Mode",
    cmd: "openpaw --mode plan",
    color: "#00FFFF",
    span: "md:col-span-5",
    desc: "OpenPaw studies your codebase and drafts a step-by-step battle plan before touching a single file. Review, tweak, approve.",
    lines: [
      "├─ [1] analyze dependencies",
      "├─ [2] draft migration plan",
      "└─ [3] await your approval",
    ],
  },
  {
    icon: MessageCircleQuestion,
    name: "Ask Mode",
    cmd: "openpaw --mode ask",
    color: "#FF69B4",
    span: "md:col-span-7",
    desc: "A read-only companion for your repo. Ask anything about your code, configs, or logs — get answers without side effects. Perfect for onboarding onto unfamiliar codebases.",
    lines: [
      "? where is auth handled",
      "→ auth/middleware.py:42",
      "→ uses JWT with 15m expiry",
    ],
  },
  {
    icon: Zap,
    name: "Agent Mode",
    cmd: "openpaw --mode agent",
    color: "#39FF14",
    span: "md:col-span-12",
    desc: "Full autonomy, unleashed. OpenPaw executes plans end-to-end: edits files, runs tests, fixes failures, and reports back on Telegram when the job is done. You stay in control with checkpoints and rollbacks.",
    lines: [
      "✓ 14 files modified",
      "✓ tests passing (98/98)",
      "✓ report sent → @you on telegram",
    ],
  },
];

export const Modes = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="mb-3 font-mono text-sm text-[#39FF14]">
          // three modes
        </p>

        <h2 className="font-mono text-3xl font-black tracking-tighter md:text-4xl">
          One agent. Three personalities.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {modes.map((m, i) => (
          <motion.div
            key={m.name}
            data-testid={`mode-card-${m.name
              .toLowerCase()
              .replace(" ", "-")}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className={`${m.span} group relative overflow-hidden rounded-lg border border-white/10 bg-[#0a0a12] p-8 transition-colors duration-300 hover:border-white/25`}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background: `radial-gradient(600px circle at 50% 0%, ${m.color}12, transparent 60%)`,
              }}
            />

            <div className="relative flex flex-col gap-8 lg:flex-row">
              <div className="flex-1">
                <div className="mb-4 flex items-center gap-3">
                  <m.icon
                    className="h-6 w-6"
                    style={{ color: m.color }}
                  />

                  <h3 className="font-mono text-xl font-bold tracking-tight">
                    {m.name}
                  </h3>
                </div>

                <code
                  className="mb-4 inline-block rounded border border-white/10 bg-black px-2 py-1 font-mono text-xs"
                  style={{ color: m.color }}
                >
                  $ {m.cmd}
                </code>

                <p className="max-w-xl text-sm leading-relaxed text-white/55">
                  {m.desc}
                </p>
              </div>

              <div className="shrink-0 space-y-1.5 rounded-md border border-white/10 bg-black p-4 font-mono text-xs lg:w-64">
                {m.lines.map((line) => (
                  <div
                    key={line}
                    className="opacity-80"
                    style={{ color: m.color }}
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};