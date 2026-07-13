"use client"
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ArrowRight, Loader2 } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const WaitlistForm = ({ compact = false }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await axios.post(`${API}/waitlist`, { email });
      toast.success("You're on the waitlist. Welcome to the pack.");
      setEmail("");
    } catch (err) {
      if (err.response?.status === 409) {
        toast.info("You're already on the waitlist.");
      } else {
        toast.error("Something went wrong. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className={`flex gap-2 ${compact ? "max-w-sm" : "max-w-md mx-auto"}`}>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@terminal.dev"
        data-testid="email-waitlist-input"
        className="flex-1 min-w-0 px-4 py-2.5 rounded-md bg-white/5 border border-white/10 text-sm font-mono text-white placeholder:text-white/30 outline-none focus:border-[#39FF14] focus:ring-1 focus:ring-[#39FF14] transition-colors duration-200"
      />
      <button
        type="submit"
        disabled={loading}
        data-testid="waitlist-submit-button"
        className="px-5 py-2.5 rounded-md bg-[#39FF14] text-black text-sm font-mono font-bold flex items-center gap-2 transition-transform duration-200 hover:brightness-110 hover:-translate-y-0.5 disabled:opacity-60"
      >
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Join <ArrowRight className="w-4 h-4" /></>}
      </button>
    </form>
  );
};
