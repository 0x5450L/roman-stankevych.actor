"use client";

import { useCallback, useEffect, useState } from "react";
import { gallery, links } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { button } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/Icons";

const photos = gallery;

function desktopStart(index: number, count: number) {
  const rest = count % 3;
  if (rest === 2 && index === count - 2) return "md:col-start-2";
  if (rest === 1 && index === count - 1) return "md:col-start-3";
  return "";
}

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Container as="section" id="photos" className="py-[72px] md:py-20 lg:py-24">
      <SectionHeading index="02 — Photos" title="Photo Gallery" className="mb-10">
        <a
          className={`${button({ variant: "solid", size: "lg" })} w-full md:w-auto`}
          href={links.photoArchive}
          target="_blank"
          rel="noopener"
        >
          <span>View full photo archive &amp; headshots</span>
          <ArrowRight />
        </a>
      </SectionHeading>

      <ul className="grid grid-cols-2 gap-2 md:grid-cols-6 md:gap-2.5 lg:gap-3">
        {photos.map((p, index) => (
          <li
            key={p.src}
            className={`relative aspect-[4/5] overflow-hidden border border-[#222] bg-tile md:col-span-2 ${desktopStart(index, photos.length)}`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`Open photo: ${p.label}`}
              className="group block size-full cursor-zoom-in"
            >
              <img
                src={p.thumb}
                alt={p.alt ?? `Roman Stankevych — ${p.label}`}
                loading="lazy"
                style={p.position ? { objectPosition: p.position } : undefined}
                className="size-full object-cover object-[50%_25%] transition duration-300 group-hover:scale-[1.03]"
              />
            </button>
          </li>
        ))}
      </ul>

      {openIndex !== null && (
        <Lightbox index={openIndex} onChange={setOpenIndex} onClose={() => setOpenIndex(null)} />
      )}
    </Container>
  );
}

function Lightbox({
  index,
  onChange,
  onClose,
}: {
  index: number;
  onChange: (i: number) => void;
  onClose: () => void;
}) {
  const count = photos.length;
  const photo = photos[index];
  const prev = useCallback(() => onChange((index - 1 + count) % count), [index, count, onChange]);
  const next = useCallback(() => onChange((index + 1) % count), [index, count, onChange]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, prev, next]);

  const [touchX, setTouchX] = useState<number | null>(null);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.label}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
      onClick={onClose}
      onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX === null) return;
        const dx = e.changedTouches[0].clientX - touchX;
        if (Math.abs(dx) > 50) (dx > 0 ? prev : next)();
        setTouchX(null);
      }}
    >
      <img
        src={photo.src}
        alt={photo.alt ?? `Roman Stankevych — ${photo.label}`}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[calc(100dvh-112px)] max-w-[calc(100vw-32px)] object-contain md:max-w-[calc(100vw-176px)]"
      />

      <div className="absolute top-0 right-0 left-0 flex items-center justify-between px-5 py-4 md:px-8">
        <span className="eyebrow !text-soft">
          {photo.label} · {index + 1} / {count}
        </span>
        <LightboxButton label="Close" onClick={onClose}>
          <path d="M6 6l12 12M18 6L6 18" />
        </LightboxButton>
      </div>

      {count > 1 && (
        <>
          <LightboxButton label="Previous photo" onClick={prev} className="absolute left-3 hidden md:inline-flex lg:left-8">
            <path d="M15 5l-7 7 7 7" />
          </LightboxButton>
          <LightboxButton label="Next photo" onClick={next} className="absolute right-3 hidden md:inline-flex lg:right-8">
            <path d="M9 5l7 7-7 7" />
          </LightboxButton>
        </>
      )}
    </div>
  );
}

function LightboxButton({
  label,
  onClick,
  className = "",
  children,
}: {
  label: string;
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={`inline-flex size-12 cursor-pointer items-center justify-center border border-[#3a3a3a] text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink ${className}`}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        {children}
      </svg>
    </button>
  );
}
