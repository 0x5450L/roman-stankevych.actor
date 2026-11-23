type Variant = "outline" | "solid" | "dark" | "outline-dark";
type Size = "md" | "lg" | "bar";

const baseCls =
  "inline-flex items-center justify-center gap-2.5 border text-center font-semibold uppercase " +
  "no-underline transition-colors duration-150 cursor-pointer select-none " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper";

const variants: Record<Variant, string> = {
  outline: "border-paper text-paper bg-transparent hover:bg-paper hover:text-ink",
  solid: "border-paper bg-paper text-ink hover:bg-[#cfcfcf] hover:border-[#cfcfcf]",
  dark: "border-ink bg-ink text-paper hover:bg-[#333] hover:border-[#333]",
  "outline-dark": "border-ink text-ink bg-transparent hover:bg-ink hover:text-paper",
};

const sizes: Record<Size, string> = {
  md: "min-h-12 px-5 text-xs tracking-[0.12em]",
  lg: "min-h-14 px-[18px] py-3 md:py-0 md:px-7 text-[13px] tracking-[0.08em] md:tracking-[0.12em]",
  bar: "min-h-[46px] md:min-h-12 px-2.5 md:px-5 gap-1.5 md:gap-2.5 text-xs md:text-[13px] tracking-[0.06em] md:tracking-[0.12em]",
};

export function button({ variant = "outline", size = "md" }: { variant?: Variant; size?: Size } = {}) {
  return `${baseCls} ${variants[variant]} ${sizes[size]}`;
}
