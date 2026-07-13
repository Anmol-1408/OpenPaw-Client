"use client"
import { useState } from "react";
import { Copy, Check } from "lucide-react";

export const CodeBlock = ({ code, testId = "copy-cli-button" }) => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="terminal-surface flex items-center justify-between gap-4 px-4 py-3 group">
      <code className="font-mono text-sm text-[#39FF14] overflow-x-auto whitespace-nowrap">
        <span className="text-white/40 select-none">$ </span>{code}
      </code>
      <button
        onClick={copy}
        data-testid={testId}
        className="shrink-0 text-white/40 hover:text-[#39FF14] transition-colors duration-200"
        aria-label="Copy command"
      >
        {copied ? <Check className="w-4 h-4 text-[#39FF14]" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  );
};
