import { CV_FILENAME, CV_PATH, links } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { button } from "@/components/ui/button";
import { ArrowUpRight, DownloadIcon } from "@/components/ui/Icons";
import { ShareCvButton } from "@/components/ShareCvButton";
import { EmailLink } from "@/components/EmailLink";

const rows = [
  { label: "Email", value: links.email, href: `mailto:${links.email}`, external: false, email: true },
  { label: "WhatsApp", value: links.whatsappLabel, href: links.whatsapp, external: true, email: false },
  { label: "Telegram", value: links.telegramLabel, href: links.telegram, external: true, email: false },
];

export function Contact() {
  return (
    <footer id="contact" className="bg-paper pt-16 pb-6 text-ink md:pt-20 md:pb-7 lg:pt-24 lg:pb-8">
      <Container>
        <div className="eyebrow mb-3.5 !text-[#525252]">04 — Contact</div>
        <h2 className="font-display mb-10 text-[clamp(40px,6vw,88px)] leading-[0.95] font-semibold tracking-[-0.03em]">
          Let’s work together.
        </h2>

        <div className="border-b border-[#cfcfcf]">
          {rows.map((r) => {
            const cls =
              "group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-1 border-t border-[#cfcfcf] py-4 text-ink no-underline md:min-h-[88px] md:grid-cols-[140px_minmax(0,1fr)_auto] md:gap-6 md:py-0 lg:grid-cols-[200px_minmax(0,1fr)_auto]";
            const content = (
              <>
              <span className="eyebrow col-span-full !text-[#525252] md:col-span-1">{r.label}</span>
              <span className="font-display text-[clamp(18px,2.6vw,36px)] font-medium tracking-[-0.01em] [overflow-wrap:anywhere]">
                {r.value}
              </span>
              <span className="inline-flex size-12 items-center justify-center border border-ink transition-colors group-hover:bg-ink group-hover:text-paper">
                <ArrowUpRight size={18} />
              </span>
              </>
            );
            return r.email ? (
              <EmailLink key={r.label} className={cls}>
                {content}
              </EmailLink>
            ) : (
              <a key={r.label} href={r.href} target="_blank" rel="noopener" className={cls}>
                {content}
              </a>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className={`${button({ variant: "dark", size: "lg" })} w-full md:w-auto`}
            href={CV_PATH}
            download={CV_FILENAME}
          >
            <DownloadIcon />
            <span>Download CV (PDF)</span>
          </a>
          <ShareCvButton className={`${button({ variant: "outline-dark", size: "lg" })} w-full md:w-auto`} />
          <a
            className={`${button({ variant: "outline-dark", size: "lg" })} w-full md:w-auto`}
            href={links.vimeoShowcase}
            target="_blank"
            rel="noopener"
          >
            <span>Vimeo showcase</span>
          </a>
        </div>

        <div className="mt-14 flex flex-wrap justify-between gap-3 border-t border-[#cfcfcf] pt-5 text-xs text-[#525252]">
          <span>© {new Date().getFullYear()} Roman Stankevych · Actor · Munich</span>
          <a href="#top" className="font-semibold tracking-[0.12em] text-ink uppercase no-underline">
            Back to top ↑
          </a>
        </div>
      </Container>
    </footer>
  );
}
