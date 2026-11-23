import { profile } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <Container as="section" className="pt-[72px] pb-10">
      <div className="mb-7 flex flex-wrap items-center gap-x-[18px] gap-y-2.5">
        <span className="eyebrow">{profile.location}</span>
        <span className="eyebrow inline-flex items-center gap-2 !text-paper">
          <span className="inline-block size-[7px] rounded-full bg-paper" />
          {profile.availability}
        </span>
      </div>

      <h1 className="font-display text-[12.6vw] leading-[0.92] font-semibold tracking-[-0.03em] uppercase md:text-[8.6vw] lg:text-[clamp(40px,7.6vw,116px)]">
        <span className="block md:inline md:whitespace-nowrap">{profile.firstName}</span>{" "}
        <span className="block md:inline md:whitespace-nowrap">{profile.lastName}</span>
      </h1>

      <p className="font-display mt-7 flex flex-wrap items-baseline gap-x-[18px] gap-y-1.5 text-[clamp(19px,2.1vw,30px)] leading-[1.2] font-medium">
        {profile.roles.map((role, i) => (
          <span key={role} className="contents">
            {i > 0 && (
              <span aria-hidden className="font-light text-[#5c5c5c]">
                /
              </span>
            )}
            <span>{role}</span>
          </span>
        ))}
      </p>
    </Container>
  );
}
