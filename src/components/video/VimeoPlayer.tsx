"use client";

import { useState } from "react";
import { useVimeoThumb, vimeoEmbed } from "@/lib/vimeo";
import { PlayIcon } from "@/components/ui/Icons";

export function VimeoPlayer({ id, title, label }: { id: string; title: string; label: string }) {
  const [playing, setPlaying] = useState(false);
  const thumb = useVimeoThumb(id);

  if (playing) {
    return (
      <div className="relative aspect-video border border-line bg-black">
        <iframe
          src={vimeoEmbed(id)}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play ${title}`}
      className="group relative flex aspect-video w-full cursor-pointer items-center justify-center overflow-hidden border border-line bg-[#161616] text-paper"
    >
      {thumb && (
        <img
          src={thumb}
          alt=""
          className="absolute inset-0 size-full object-cover opacity-70 grayscale transition duration-300 group-hover:opacity-90 group-hover:grayscale-0"
        />
      )}
      <span className="relative inline-flex size-[84px] items-center justify-center rounded-full border border-paper bg-ink/30 transition-colors group-hover:bg-paper group-hover:text-ink">
        <PlayIcon size={26} />
      </span>
      <span className="eyebrow absolute top-[18px] left-5 !text-paper">{label} · Vimeo</span>
    </button>
  );
}
