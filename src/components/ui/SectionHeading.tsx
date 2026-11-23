type Props = {
  index: string;
  title: string;
  children?: React.ReactNode;
  className?: string;
};

export function SectionHeading({ index, title, children, className = "" }: Props) {
  return (
    <div
      className={`flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between ${className}`}
    >
      <div>
        <div className="eyebrow mb-3.5">{index}</div>
        <h2 className="font-display text-[clamp(32px,4vw,56px)] font-semibold leading-none tracking-[-0.02em]">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}
