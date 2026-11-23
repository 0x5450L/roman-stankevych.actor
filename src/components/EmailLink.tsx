"use client";

import { useState } from "react";
import { links } from "@/content/site";

export function EmailLink({
  className,
  children,
  ...rest
}: { className?: string; children: React.ReactNode } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const [copied, setCopied] = useState(false);

  function onClick() {
    navigator.clipboard
      ?.writeText(links.email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      })
      .catch(() => {});
  }

  return (
    <>
      <a href={`mailto:${links.email}`} onClick={onClick} className={className} {...rest}>
        {children}
      </a>
      <div
        role="status"
        aria-live="polite"
        className={`pointer-events-none fixed bottom-6 left-1/2 z-50 -translate-x-1/2 border border-paper bg-ink px-5 py-3 text-[13px] font-semibold tracking-[0.08em] text-paper uppercase transition-opacity duration-200 ${
          copied ? "opacity-100" : "opacity-0"
        }`}
      >
        {copied ? `Email copied: ${links.email}` : ""}
      </div>
    </>
  );
}
