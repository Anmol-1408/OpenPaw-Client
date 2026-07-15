"use client";
import { motion } from "framer-motion";
import { Clock, Repeat, BellRing } from "lucide-react";

const tasks = [
  { time: "09:00", name: "daily standup summary", target: "→ telegram", status: "scheduled" },
  { time: "13:30", name: "dependency audit", target: "→ slack #security", status: "running" },
  { time: "22:00", name: "nightly test suite + report", target: "→ email", status: "scheduled" },
  { time: "*/15m", name: "watch prod logs for errors", target: "→ telegram", status: "recurring" },
];

const perks = [
  { icon: Clock, title: "Cron, but readable", desc: "Say `--at 9am` or `--every 15m`. OpenPaw handles timezones and missed runs." },
  { icon: Repeat, title: "Recurring agents", desc: "Schedule full agent runs — refactors, audits, reports — on autopilot." },
  { icon: BellRing, title: "Wake up to results", desc: "Every scheduled run pushes its outcome to your favorite app." },
];

export const Scheduling = () => (
  <section className="py-32 max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-[#00FFFF] text-sm mb-3">// task scheduling</p>
        <h2 className="font-mono font-black tracking-tighter text-3xl md:text-4xl mb-6">
          It works while
          <br />you <span className="text-[#00FFFF]">sleep</span>.
        </h2>
        <div className="space-y-8 mt-10">
          {perks.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4"
            >
              <div className="shrink-0 w-10 h-10 rounded-md border border-[#00FFFF]/30 flex items-center justify-center">
                <p.icon className="w-5 h-5 text-[#00FFFF]" />
              </div>
              <div>
                <h3 className="font-mono font-bold text-base mb-1">{p.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        data-testid="scheduling-board"
        className="terminal-surface p-6"
      >
        <div className="flex items-center justify-between mb-5">
          <span className="font-mono text-sm text-white/60">$ openpaw schedule list</span>
          <span className="font-mono text-xs text-[#39FF14]">4 active</span>
        </div>
        <div className="space-y-3">
          {tasks.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.12 }}
              className="flex items-center gap-4 p-3 rounded-md bg-white/[0.03] border border-white/5 font-mono text-xs hover:border-[#00FFFF]/40 transition-colors duration-200"
            >
              <span className="text-[#00FFFF] w-14">{t.time}</span>
              <span className="flex-1 text-white/80 truncate">{t.name}</span>
              <span className="text-white/40 hidden sm:inline">{t.target}</span>
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] ${
                  t.status === "running"
                    ? "bg-[#39FF14]/15 text-[#39FF14]"
                    : t.status === "recurring"
                    ? "bg-[#FF69B4]/15 text-[#FF69B4]"
                    : "bg-white/10 text-white/50"
                }`}
              >
                {t.status}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
