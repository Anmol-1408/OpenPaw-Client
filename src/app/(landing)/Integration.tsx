"use client";
import { motion } from "framer-motion";
import {
  Send,
  Calendar,
  Mail,
  MessageSquare,
  Database,
  Cloud,
  FileText,
  Globe,
  Webhook,
} from "lucide-react";

import {
  FaSlack,
  FaGithub,
  FaTrello,
} from "react-icons/fa6";

const apps = [
  { icon: Send, name: "Telegram", featured: true },
  { icon: FaSlack, name: "Slack" },
  { icon: FaGithub, name: "GitHub" },
  { icon: Calendar, name: "Google Calendar" },
  { icon: Mail, name: "Gmail" },
  { icon: MessageSquare, name: "Discord" },
  { icon: Database, name: "PostgreSQL" },
  { icon: Cloud, name: "AWS" },
  { icon: FaTrello, name: "Trello" },
  { icon: FileText, name: "Notion" },
  { icon: Globe, name: "Web Hooks", featured: false },
  { icon: Webhook, name: "Zapier" },
];

const Row = () => (
  <>
    {apps.map((a) => (
      <div
        key={a.name}
        className={`shrink-0 flex items-center gap-3 px-6 py-4 mx-3 rounded-lg border transition-colors duration-300 ${
          a.featured
            ? "border-[#39FF14]/50 bg-[#39FF14]/5 animate-pulse-glow"
            : "border-white/10 bg-[#0a0a12] hover:border-[#FF69B4]/50"
        }`}
      >
        <a.icon className={`w-5 h-5 ${a.featured ? "text-[#39FF14]" : "text-white/60"}`} />
        <span className="font-mono text-sm whitespace-nowrap">{a.name}</span>
      </div>
    ))}
  </>
);

export const Integrations = () => (
  <section className="py-32 overflow-hidden border-y border-white/5 bg-[#0a0a12]/50">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-6 mb-14"
    >
      <p className="font-mono text-[#FF69B4] text-sm mb-3">// integrations</p>
      <h2 className="font-mono font-black tracking-tighter text-3xl md:text-4xl mb-4">
        Talks to your <span className="text-[#FF69B4] pink-glow">whole stack</span>.
      </h2>
      <p className="text-white/55 text-base max-w-xl leading-relaxed">
        Pipe agent output straight into Telegram, trigger runs from Slack, open PRs on
        GitHub. One config file, twelve integrations, zero glue code.
      </p>
    </motion.div>

    <div data-testid="integrations-marquee" className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="flex animate-marquee w-max">
        <Row />
        <Row />
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-6 mt-14">
      <div className="terminal-surface p-5 font-mono text-sm max-w-2xl">
        <div className="text-white/40 mb-2"># ~/.looper/config.toml</div>
        <div><span className="text-[#FF69B4]">[integrations.telegram]</span></div>
        <div><span className="text-[#00FFFF]">bot_token</span> = <span className="text-[#39FF14]">"env:TELEGRAM_TOKEN"</span></div>
        <div><span className="text-[#00FFFF]">notify_on</span> = <span className="text-[#39FF14]">["task_done", "error", "approval_needed"]</span></div>
      </div>
    </div>
  </section>
);
