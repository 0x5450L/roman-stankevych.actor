"use client";

import { useState } from "react";
import { CV_PATH } from "@/content/site";
import { ShareIcon } from "@/components/ui/Icons";

export function ShareCvButton({ className }: { className: string }) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = new URL(CV_PATH, window.location.href).toString();
    if (navigator.share) {
      try {
        await navigator.share({ title: "Roman Stankevych — Actor CV", url });
        return;
      } catch {
        return;
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.open(url, "_blank");
    }
  }

  return (
    <button type="button" onClick={share} className={className}>
      <ShareIcon />
      <span aria-live="polite">{copied ? "Link copied" : "Share CV"}</span>
    </button>
  );
}
