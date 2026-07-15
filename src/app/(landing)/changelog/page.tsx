"use client";
import { motion } from "framer-motion";

const releases = [
  {
    version: "1.4.2",
    date: "June 12, 2026",
    tag: "latest",
    changes: [
      { type: "new", text: "Telegram integration: run reports, alerts, and inline approval buttons" },
      { type: "new", text: "`openpaw schedule` now accepts natural language times (--at 9am)" },
      { type: "fix", text: "Agent mode no longer re-runs passing tests after checkpoint resume" },
    ],
  },
  {
    version: "1.4.0",
    date: "May 28, 2026",
    changes: [
      { type: "new", text: "Task scheduling daemon with cron support and missed-run recovery" },
      { type: "new", text: "Slack slash commands: trigger agent runs with /openpaw" },
      { type: "improved", text: "Plan mode is 2.3x faster on repos with 1000+ files" },
    ],
  },
  {
    version: "1.3.0",
    date: "April 15, 2026",
    changes: [
      { type: "new", text: "Ask mode: read-only Q&A over code, git history, and logs" },
      { type: "new", text: "GitHub integration with pull_request mode" },
      { type: "fix", text: "Fixed config reload race when daemon restarts mid-run" },
    ],
  },
  {
    version: "1.2.0",
    date: "March 3, 2026",
    changes: [
      { type: "new", text: "Checkpoints and `openpaw rollback` for agent mode" },
      { type: "improved", text: "Repo indexing now respects .gitignore and .openpawignore" },
    ],
  },
  {
    version: "1.0.0",
    date: "January 20, 2026",
    tag: "launch",
    changes: [
      { type: "new", text: "First stable release: plan mode + agent mode" },
      { type: "new", text: "Cross-platform binaries via curl installer and Homebrew" },
    ],
  },
];

const badge = {
  new: "bg-[#39FF14]/15 text-[#39FF14]",
  fix: "bg-[#FF69B4]/15 text-[#FF69B4]",
  improved: "bg-[#00FFFF]/15 text-[#00FFFF]",
};

export default function Changelog() {
  return (
    <div className="bg-[#050505] min-h-screen text-left">
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="font-mono text-[#39FF14] text-sm mb-3">// changelog</p>
          <h1 className="font-mono font-black tracking-tighter text-4xl sm:text-5xl mb-16">
            Every release, logged.
          </h1>
        </motion.div>

        <div className="relative border-l border-white/10 ml-3 space-y-14">
          {releases.map((r, i) => (
            <motion.article
              key={r.version}
              data-testid={`changelog-entry-${r.version}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="pl-8 relative"
            >
              <span className="absolute -left-[7px] top-2 w-3.5 h-3.5 rounded-full bg-[#050505] border-2 border-[#39FF14]" />
              <div className="flex items-center gap-3 mb-1 flex-wrap">
                <h2 className="font-mono font-bold text-2xl tracking-tight">v{r.version}</h2>
                {r.tag && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#39FF14]/15 text-[#39FF14] uppercase">
                    {r.tag}
                  </span>
                )}
              </div>
              <p className="font-mono text-xs text-white/40 mb-5">{r.date}</p>
              <ul className="space-y-3">
                {r.changes.map((c) => (
                  <li key={c.text} className="flex items-start gap-3">
                    <span className={`shrink-0 mt-0.5 px-2 py-0.5 rounded text-[10px] font-mono uppercase ${badge[c.type]}`}>
                      {c.type}
                    </span>
                    <span className="text-white/70 text-sm leading-relaxed">{c.text}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
