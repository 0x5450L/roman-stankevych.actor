import { CV_FILENAME, CV_PATH, links, profile } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { button } from "@/components/ui/button";
import { DownloadIcon, PlayIcon } from "@/components/ui/Icons";

export function Profile() {
  return (
    <Container as="section" className="pb-[72px] md:pb-24">
      <div className="border-t border-line pt-12">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:[grid-template-areas:'photo_bio'_'specs_specs'_'skills_skills'_'cta_cta'] lg:grid-cols-[5fr_7fr] lg:gap-16 lg:[grid-template-areas:none]">
          <figure className="m-0 md:[grid-area:photo] lg:[grid-area:auto]">
            <picture>
              <source media="(max-width: 760px)" srcSet={profile.portrait.srcSmall} />
              <img
                src={profile.portrait.src}
                alt={profile.portrait.alt}
                width={1356}
                height={1159}
                className="block aspect-[4/5] w-full bg-tile object-cover object-[38%_30%]"
              />
            </picture>
          </figure>

          <div className="flex flex-col gap-9 md:contents lg:flex">
            <div className="flex flex-col gap-[18px] md:self-center md:[grid-area:bio] lg:self-auto lg:[grid-area:auto]">
              <p className="font-display max-w-[22ch] text-[clamp(24px,2.4vw,34px)] leading-[1.15] font-medium tracking-[-0.02em]">
                {profile.headline}
              </p>
              <p className="max-w-[56ch] text-[clamp(16px,1.25vw,18px)] leading-[1.65] text-[#b8b8b8]">
                {profile.bio}
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-x-6 md:[grid-area:specs] md:grid-cols-3 lg:[grid-area:auto]">
              {profile.specs.map((s) => (
                <div key={s.label} className="border-t border-line py-3.5">
                  <dt className="eyebrow mb-1.5">{s.label}</dt>
                  <dd className="text-[17px] font-medium">
                    {s.value} {s.note && <span className="text-muted">{s.note}</span>}
                  </dd>
                </div>
              ))}
              {profile.specsWide.map((s, i) => (
                <div
                  key={s.label}
                  className={`col-span-full border-t border-line py-3.5 ${
                    i === profile.specsWide.length - 1 ? "border-b" : ""
                  }`}
                >
                  <dt className="eyebrow mb-1.5">{s.label}</dt>
                  <dd className="text-[15px] leading-normal text-soft">{s.value}</dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-col gap-3 md:[grid-area:skills] lg:[grid-area:auto]">
              <span className="eyebrow">Key skills</span>
              <ul className="flex flex-wrap gap-2">
                {profile.keySkills.map((s) => (
                  <li
                    key={s}
                    className="inline-flex min-h-[30px] items-center border border-[#333] px-3 text-xs text-soft"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 md:[grid-area:cta] lg:[grid-area:auto]">
              <a
                className={`${button({ variant: "solid", size: "lg" })} w-full md:w-auto`}
                href={links.vimeoShowcase}
                target="_blank"
                rel="noopener"
              >
                <PlayIcon />
                <span>Watch Showreel</span>
              </a>
              <a
                className={`${button({ size: "lg" })} w-full md:w-auto`}
                href={CV_PATH}
                download={CV_FILENAME}
              >
                <DownloadIcon />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
