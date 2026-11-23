type P = { size?: number; className?: string };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "aria-hidden": true,
});

export const MailIcon = ({ size = 16, className }: P) => (
  <svg {...base(size)} strokeWidth={1.7} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="1" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export const DownloadIcon = ({ size = 16, className }: P) => (
  <svg {...base(size)} strokeWidth={1.7} className={className}>
    <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
  </svg>
);

export const ShareIcon = ({ size = 16, className }: P) => (
  <svg {...base(size)} strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 15V4M8 8l4-4 4 4M5 13v6h14v-6" />
  </svg>
);

export const PlayIcon = ({ size = 14, className }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden className={className}>
    <path d="M7 4.5v15l12.5-7.5z" fill="currentColor" />
  </svg>
);

export const ArrowUpRight = ({ size = 14, className }: P) => (
  <svg {...base(size)} strokeWidth={1.8} className={className}>
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);

export const ArrowRight = ({ size = 16, className }: P) => (
  <svg {...base(size)} strokeWidth={1.8} className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const LinkedInIcon = ({ size = 23, className }: P) => (
  <svg {...base(size)} strokeWidth={2.2} strokeLinecap="round" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 10.5V17M8 7.2v.1M12 17v-6.5M12 13.5a2.5 2.5 0 0 1 5 0V17" />
  </svg>
);

export const VimeoIcon = ({ size = 23, className }: P) => (
  <svg {...base(size)} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 9c1.4-1.2 2.6-2.2 3.5-2.2 1.3 0 1.6 2 2 4.5.4 2.5.8 4.4 1.6 4.4.9 0 2.5-2.5 3.4-4.4.7-1.6 0-2.6-1.4-1.9.8-2.9 3.6-4.2 5.5-3.5 1.6.6 1.5 2.7.6 4.6-1.6 3.5-5 8.3-7.6 8.3-1.9 0-2.6-3.6-3.3-6.8-.4-1.7-.8-2.8-1.5-2.8-.3 0-.9.3-1.7.9z" />
  </svg>
);

export const WhatsAppIcon = ({ size = 23, className }: P) => (
  <svg {...base(size)} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 20l1.2-3.9A8.3 8.3 0 1 1 8.2 19z" />
    <path d="M9.2 8.3c-.4 2.6 3.4 6.6 6.4 6.4l.9-1.4-1.9-1-1 .8c-1-.5-2-1.5-2.4-2.4l.8-1-1-1.9z" />
  </svg>
);

export const TelegramIcon = ({ size = 23, className }: P) => (
  <svg {...base(size)} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 4.5L3 11.4l5.6 2 2.1 6.1 3.1-3.8 5 3.7z" />
    <path d="M8.6 13.4L21 4.5" />
  </svg>
);
