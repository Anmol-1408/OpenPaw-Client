"use client"
import { useState, useEffect } from "react";

const script = [
  { type: "cmd", text: "openpaw --mode plan \"refactor my auth module\"" },
  { type: "out", text: "🐾 OpenPaw v1.4.2 — plan mode engaged", color: "#39FF14" },
  { type: "out", text: "├─ scanning repo... 142 files indexed", color: "#888893" },
  { type: "out", text: "├─ [1] extract token logic → auth/tokens.py", color: "#00FFFF" },
  { type: "out", text: "├─ [2] add refresh rotation + tests", color: "#00FFFF" },
  { type: "out", text: "└─ [3] schedule nightly security scan", color: "#00FFFF" },
  { type: "out", text: "plan ready. run `openpaw --mode agent` to execute", color: "#FF69B4" },
  { type: "cmd", text: "openpaw schedule \"daily standup summary\" --at 9am --to telegram" },
  { type: "out", text: "✓ task scheduled — reports to @your_telegram", color: "#39FF14" },
];

export const TerminalDemo = () => {
  const [lines, setLines] = useState([]);
  const [current, setCurrent] = useState("");
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (idx >= script.length) {
      const t = setTimeout(() => {
        setLines([]);
        setIdx(0);
      }, 5000);
      return () => clearTimeout(t);
    }
    const line = script[idx];
    if (line.type === "cmd") {
      let i = 0;
      const iv = setInterval(() => {
        i++;
        setCurrent(line.text.slice(0, i));
        if (i >= line.text.length) {
          clearInterval(iv);
          setTimeout(() => {
            setLines((p) => [...p, line]);
            setCurrent("");
            setIdx((p) => p + 1);
          }, 350);
        }
      }, 35);
      return () => clearInterval(iv);
    }
    const t = setTimeout(() => {
      setLines((p) => [...p, line]);
      setIdx((p) => p + 1);
    }, 280);
    return () => clearTimeout(t);
  }, [idx]);

  return (
    <div data-testid="hero-terminal-demo" className="terminal-surface relative overflow-hidden w-full text-left">
      <div className="scanline" />
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#39FF14]/20">
        <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
        <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
        <span className="ml-3 text-xs font-mono text-white/40">openpaw — zsh</span>
      </div>
      <div className="p-5 font-mono text-[13px] leading-relaxed min-h-[300px]">
        {lines.map((l, i) => (
          <div key={i} className="mb-1">
            {l.type === "cmd" ? (
              <span><span className="text-[#39FF14]">$ </span><span className="text-white">{l.text}</span></span>
            ) : (
              <span style={{ color: l.color }}>{l.text}</span>
            )}
          </div>
        ))}
        {idx < script.length && script[idx].type === "cmd" && (
          <div>
            <span className="text-[#39FF14]">$ </span>
            <span className="text-white">{current}</span>
            <span className="cursor-blink text-[#39FF14]">▊</span>
          </div>
        )}
        {(idx >= script.length || script[idx]?.type !== "cmd") && (
          <span className="cursor-blink text-[#39FF14]">▊</span>
        )}
      </div>
    </div>
  );
};
