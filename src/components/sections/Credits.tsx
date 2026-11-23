"use client";

import { useState } from "react";
import { CV_FILENAME, CV_PATH, creditSections, specialSkills } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { button } from "@/components/ui/button";
import { DownloadIcon } from "@/components/ui/Icons";

const SKILLS_ID = "skills";
const allIds = [...creditSections.map((s) => s.id), SKILLS_ID];

export function Credits() {
  const [open, setOpen] = useState<Record<string, boolean>>({ film: true });
  const allOpen = allIds.every((id) => open[id]);
  const toggle = (id: string) => setOpen((o) => ({ ...o, [id]: !o[id] }));

  return (
    <Container as="section" id="credits" className="pb-[72px] md:pb-20 lg:pb-24">
      <div className="border border-[#2e2e2e] px-5 py-2 md:px-8 md:pb-6 lg:px-12 lg:pt-4 lg:pb-8">
        <SectionHeading index="03 — Credits" title="Filmography & Skills" className="pt-10 pb-8">
          <div className="flex w-full gap-2 md:w-auto">
            <button
              type="button"
              className={`${button()} min-w-0 flex-1 px-3 md:min-w-[168px] md:flex-none`}
              onClick={() =>
                setOpen(Object.fromEntries(allIds.map((id) => [id, !allOpen])))
              }
            >
              {allOpen ? "Collapse all" : "Expand all"}
            </button>
            <a
              className={`${button()} min-w-0 flex-1 px-3 md:flex-none md:px-5`}
              href={CV_PATH}
              download={CV_FILENAME}
            >
              <DownloadIcon />
              <span>Full CV (PDF)</span>
            </a>
          </div>
        </SectionHeading>

        {creditSections.map((s) => (
          <Accordion
            key={s.id}
            title={s.title}
            count={s.rows.length}
            open={!!open[s.id]}
            onToggle={() => toggle(s.id)}
          >
            <div className="hidden grid-cols-[5fr_4fr_4fr] gap-4 pb-2.5 md:grid lg:gap-6">
              {s.columns.map((c) => (
                <span key={c} className="eyebrow">
                  {c}
                </span>
              ))}
            </div>
            {s.rows.map((r) => (
              <div
                key={r.project}
                className="grid grid-cols-1 gap-0.5 border-t border-line-2 py-4 text-[15px] leading-[1.45] md:grid-cols-[5fr_4fr_4fr] md:gap-4 md:text-sm lg:gap-6 lg:text-[15px]"
              >
                <span className="font-semibold">
                  {r.project} {r.original && <span className="font-normal text-dim">{r.original}</span>}
                </span>
                <span className="text-soft">{r.role}</span>
                <span className="text-[13px] text-dim md:text-[length:inherit] md:text-muted">{r.note}</span>
              </div>
            ))}
          </Accordion>
        ))}

        <Accordion title="Special Skills" open={!!open[SKILLS_ID]} onToggle={() => toggle(SKILLS_ID)}>
          {specialSkills.map((s) => (
            <div
              key={s.group}
              className="grid grid-cols-1 gap-0.5 border-t border-line-2 py-4 text-[15px] leading-[1.45] md:grid-cols-[1fr_3fr] md:gap-6"
            >
              <span className="font-semibold">{s.group}</span>
              <span className="text-soft">{s.items}</span>
            </div>
          ))}
        </Accordion>
      </div>
    </Container>
  );
}

function Accordion({
  title,
  count,
  open,
  onToggle,
  children,
}: {
  title: string;
  count?: number;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-[#2e2e2e]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group flex min-h-[72px] w-full cursor-pointer items-center justify-between gap-4 text-left"
      >
        <span className="flex items-baseline gap-3.5">
          <span className="font-display text-[clamp(18px,1.8vw,24px)] font-semibold tracking-[-0.01em]">
            {title}
          </span>
          {count !== undefined && <span className="text-[13px] text-dim">{count}</span>}
        </span>
        <span
          aria-hidden
          className="inline-flex size-9 flex-none items-center justify-center border border-[#3a3a3a] text-lg leading-none group-hover:border-paper"
        >
          {open ? "−" : "+"}
        </span>
      </button>
      {open && <div className="pb-6">{children}</div>}
    </div>
  );
}
