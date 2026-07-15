"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { docs } from "@/content/docs/content";

export default function DocsPage() {
  const params = useParams();
  const router = useRouter();

  const slug = params?.slug as string | undefined;

  useEffect(() => {
    if (!slug) {
      router.replace("/docs/installation");
      return;
    }

    const exists = docs.some((d) => d.slug === slug);
    if (!exists) {
      router.replace("/docs/installation");
    }
  }, [slug, router]);

  if (!slug) return null;

  const doc = docs.find((d) => d.slug === slug);

  if (!doc) return null;

  const idx = docs.indexOf(doc);
  const next = docs[idx + 1];

  return (
    <div className="bg-[#050505] min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-24 grid grid-cols-1 md:grid-cols-12 gap-12">
        <aside className="md:col-span-3">
          <div className="md:sticky md:top-28">
            <p className="font-mono text-xs text-white/40 mb-4 uppercase tracking-widest">
              Documentation
            </p>

            <nav className="space-y-1">
              {docs.map((d) => (
                <Link
                  key={d.slug}
                  href={`/docs/${d.slug}`}
                  data-testid={`doc-nav-${d.slug}`}
                  className={`block px-3 py-2 rounded-md font-mono text-sm transition-colors duration-200 ${
                    d.slug === slug
                      ? "text-[#39FF14] bg-[#39FF14]/10 border-l-2 border-[#39FF14]"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {d.title}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        <motion.main
          key={slug}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:col-span-9 max-w-3xl"
          data-testid="doc-content"
        >
          <p className="font-mono text-xs text-[#39FF14] mb-2">
            docs / {doc.slug}
          </p>

          <h1 className="font-mono font-black tracking-tighter text-4xl mb-10">
            {doc.title}
          </h1>

          {doc.sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2 className="font-mono font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-[#39FF14]">#</span>
                {section.heading}
              </h2>

              <p className="text-white/60 text-base leading-relaxed mb-4">
                {section.body}
              </p>

              {section.code && (
                <pre className="terminal-surface p-4 overflow-x-auto">
                  <code className="font-mono text-sm text-[#39FF14] whitespace-pre">
                    {section.code}
                  </code>
                </pre>
              )}
            </section>
          ))}

          {next && (
            <Link
              href={`/docs/${next.slug}`}
              data-testid="doc-next-link"
              className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-md border border-white/15 font-mono text-sm text-white/80 transition-colors duration-200 hover:border-[#39FF14] hover:text-[#39FF14]"
            >
              Next: {next.title}
              <ChevronRight className="w-4 h-4" />
            </Link>
          )}
        </motion.main>
      </div>
    </div>
  );
}