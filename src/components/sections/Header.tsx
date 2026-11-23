import { CV_FILENAME, CV_PATH, links } from "@/content/site";
import { button } from "@/components/ui/button";
import { EmailLink } from "@/components/EmailLink";
import {
  DownloadIcon,
  LinkedInIcon,
  MailIcon,
  TelegramIcon,
  VimeoIcon,
  WhatsAppIcon,
} from "@/components/ui/Icons";

const nav = [
  { href: "#reels", label: "Reels" },
  { href: "#photos", label: "Photos" },
  { href: "#credits", label: "Credits" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { href: links.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: links.vimeoShowcase, label: "Vimeo showcase", Icon: VimeoIcon },
  { href: links.whatsapp, label: "WhatsApp", Icon: WhatsAppIcon },
  { href: links.telegram, label: "Telegram", Icon: TelegramIcon },
].filter((s) => s.href);

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line-2 bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between gap-1.5 px-2 md:h-20 md:gap-3 md:px-6 lg:gap-6 lg:px-12">
        <div className="flex items-center gap-2">
          <EmailLink className={button({ size: "bar" })} aria-label="Email Roman">
            <MailIcon />
            <span>Email</span>
          </EmailLink>
          <a
            className={button({ variant: "solid", size: "bar" })}
            href={CV_PATH}
            download={CV_FILENAME}
            aria-label="Download CV as PDF"
          >
            <DownloadIcon />
            <span className="hidden md:inline">Download CV (PDF)</span>
            <span className="md:hidden">CV</span>
          </a>
        </div>

        <nav aria-label="Sections" className="hidden gap-9 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="px-0.5 py-3.5 text-[15px] font-medium text-muted transition-colors hover:text-paper"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center md:gap-1">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener"
              aria-label={label}
              className="inline-flex size-12 items-center justify-center text-soft transition-colors hover:text-white focus-visible:text-white md:size-14"
            >
              <Icon size={30} className="size-[27px] md:size-[30px]" />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
