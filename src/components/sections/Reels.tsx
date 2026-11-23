"use client";

import { useState } from "react";
import { links, presentation, reelGroups, type Video } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { button } from "@/components/ui/button";
import { ArrowUpRight, PlayIcon } from "@/components/ui/Icons";
import { VimeoPlayer } from "@/components/video/VimeoPlayer";
import { useVimeoThumb, vimeoPage } from "@/lib/vimeo";

export function Reels() {
  const [groupId, setGroupId] = useState(reelGroups[0].id);
  const [index, setIndex] = useState(0);

  const group = reelGroups.find((g) => g.id === groupId)!;
  const current = group.videos[Math.min(index, group.videos.length - 1)];

  return (
    <section
      id="reels"
      className="border-y border-line-2 bg-ink-2 py-[72px] md:py-20 lg:py-24"
    >
      <Container>
        <SectionHeading index="01 — Video" title="Showreels & Selected Scenes" className="mb-10">
          <a
            className={`${button()} w-full md:w-auto`}
            href={links.vimeoShowcase}
            target="_blank"
            rel="noopener"
          >
            <span>Open full Vimeo showcase</span>
            <ArrowUpRight />
          </a>
        </SectionHeading>

        <PresentationSlot />

        <div
          role="tablist"
          aria-label="Genres"
          className="no-scrollbar -mx-5 mb-6 flex snap-x scroll-px-5 gap-2 overflow-x-auto px-5 md:mx-0 md:flex-wrap md:overflow-visible md:px-0"
        >
          {reelGroups.map((g) => {
            const on = g.id === groupId;
            return (
              <button
                key={g.id}
                role="tab"
                aria-selected={on}
                onClick={() => {
                  setGroupId(g.id);
                  setIndex(0);
                }}
                className={`min-h-11 flex-none snap-start cursor-pointer border px-[18px] text-[13px] font-medium whitespace-nowrap transition-colors ${
                  on
                    ? "border-paper bg-paper text-ink"
                    : "border-[#333] text-muted hover:border-[#666] hover:text-paper"
                }`}
              >
                {g.label} <span className="ml-1.5 opacity-55">{g.videos.length}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[8fr_4fr]">
          <div>
            <MainScreen video={current} />
            <div className="mt-4 flex flex-wrap items-baseline justify-between gap-4">
              <h3 className="font-display text-[22px] font-semibold tracking-[-0.01em]">
                {current.title}
              </h3>
              {!current.soon && (
                <a
                  href={current.vimeoId ? vimeoPage(current.vimeoId) : links.vimeoShowcase}
                  target="_blank"
                  rel="noopener"
                  className="text-[13px] text-muted hover:text-paper"
                >
                  Watch on Vimeo ↗
                </a>
              )}
            </div>
          </div>

          <ul className="border-t border-[#222] md:grid md:grid-cols-2 md:gap-x-6 lg:block">
            {group.videos.map((v, i) => (
              <li key={v.title}>
                <ListItem
                  video={v}
                  active={v === current}
                  onSelect={() => !v.soon && setIndex(i)}
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function MainScreen({ video }: { video: Video }) {
  if (video.soon) {
    return (
      <div className="flex aspect-video items-center justify-center border border-dashed border-[#3a3a3a] bg-[#121212] text-sm text-dim">
        Coming December 2026
      </div>
    );
  }
  if (!video.vimeoId) {
    return (
      <a
        href={links.vimeoShowcase}
        target="_blank"
        rel="noopener"
        className="group relative flex aspect-video items-center justify-center border border-line bg-[#161616] text-paper"
      >
        <span className="inline-flex size-[84px] items-center justify-center rounded-full border border-paper transition-colors group-hover:bg-paper group-hover:text-ink">
          <PlayIcon size={26} />
        </span>
        <span className="eyebrow absolute top-[18px] left-5 !text-paper">{video.kind} · Vimeo showcase</span>
      </a>
    );
  }
  return <VimeoPlayer key={video.vimeoId} id={video.vimeoId} title={video.title} label={video.kind} />;
}

function ListItem({ video, active, onSelect }: { video: Video; active: boolean; onSelect: () => void }) {
  const thumb = useVimeoThumb(video.vimeoId);
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-current={active}
      disabled={video.soon}
      className={`flex min-h-[72px] w-full items-center gap-3.5 border-b border-[#222] px-3 py-2.5 text-left transition-colors ${
        video.soon
          ? "cursor-default text-dim"
          : active
            ? "cursor-pointer bg-[#161616]"
            : "cursor-pointer hover:bg-tile"
      }`}
    >
      <span className="relative flex aspect-video w-24 flex-none items-center justify-center overflow-hidden bg-[#1c1c1c] text-muted">
        {thumb && <img src={thumb} alt="" className="absolute inset-0 size-full object-cover grayscale" />}
        <PlayIcon className="relative" />
      </span>
      <span className="flex min-w-0 flex-col gap-1">
        <span className="text-sm leading-[1.3] font-medium">{video.title}</span>
        <span className="text-[11px] tracking-[0.12em] text-dim uppercase">{video.kind}</span>
      </span>
    </button>
  );
}

function PresentationSlot() {
  if (presentation.vimeoId && !presentation.soon) {
    return (
      <div className="mb-10">
        <VimeoPlayer id={presentation.vimeoId} title={presentation.title} label={presentation.kind} />
      </div>
    );
  }
  return (
    <div className="mb-10 flex flex-wrap items-center gap-5 border border-dashed border-[#3a3a3a] p-4">
      <div className="flex aspect-video w-44 flex-none items-center justify-center bg-[#161616] text-dim">
        <PlayIcon size={22} />
      </div>
      <div className="flex-[1_1_220px]">
        <div className="eyebrow mb-1.5">{presentation.kind}</div>
        <div className="text-base font-medium">{presentation.title} — slot reserved</div>
        <div className="mt-1 text-[13px] text-dim">{presentation.note}</div>
      </div>
    </div>
  );
}
