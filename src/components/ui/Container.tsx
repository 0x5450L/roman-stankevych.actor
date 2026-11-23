export function Container({
  children,
  className = "",
  as: Tag = "div",
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section";
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <Tag className={`mx-auto w-full max-w-[1280px] px-5 md:px-8 lg:px-12 ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
