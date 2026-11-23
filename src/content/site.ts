export const CV_PATH = "/cv/Roman_Stankevych_Actor_CV.pdf";
export const CV_FILENAME = "Roman_Stankevych_Actor_CV.pdf";

export const links = {
  email: "stankevych.roman83@gmail.com",
  whatsapp: "https://wa.me/4915755561998",
  whatsappLabel: "+49 157 555 61 998",
  telegram: "https://t.me/actor_Roman_S",
  telegramLabel: "@actor_Roman_S",
  vimeoShowcase: "https://vimeo.com/showcase/12506710",
  photoArchive: "https://drive.google.com/drive/folders/1DEWN8Uj2R1o293g-MGrsozqiCyi9CRW7",
  linkedin: "",
};

export const profile = {
  firstName: "Roman",
  lastName: "Stankevych",
  roles: ["Actor", "Action & Comedic Actor", "MoCap Specialist"],
  location: "Munich, Germany",
  availability: "Available worldwide · EU / UK / US",
  headline: "A versatile actor with exceptional physical range.",
  bio: "Over a decade of experience across 100+ international projects. Athletic, agile and precise in movement, with a strong martial arts background — combined with dramatic depth and sharp comedic timing.",
  portrait: {
    src: "/images/portrait-bw-tie/desktop.webp",
    srcSmall: "/images/portrait-bw-tie/mobile.webp",
    alt: "Roman Stankevych, black-and-white portrait in a dark shirt and tie",
  },
  specs: [
    { label: "Playing age", value: "35 – 45" },
    { label: "Height", value: "194 cm", note: "(6′4″)" },
    { label: "Weight", value: "92 kg", note: "(202 lbs)" },
    { label: "Hair", value: "Brown" },
    { label: "Eyes", value: "Brown" },
    { label: "Based in", value: "Munich, DE" },
  ],
  specsWide: [
    { label: "Work status", value: "Ukrainian Citizen / EU Work Permit — Available Worldwide: EU / UK / US" },
    { label: "Languages", value: "English (Upper-Intermediate) · Ukrainian (Native) · Russian (Native)" },
  ],
  keySkills: [
    "Martial Arts & Weapons",
    "Action Scene Choreography",
    "Motion Capture",
    "Wirework",
    "Physical Comedy",
    "Eccentric Character",
  ],
};

export type Video = {
  title: string;
  kind: string;
  vimeoId?: string;
  soon?: boolean;
};

export const presentation: Video & { note: string } = {
  title: "Self-introduction",
  kind: "Video presentation",
  note: "Video will be added soon",
  soon: true,
};

export type ReelGroup = { id: string; label: string; videos: Video[] };

export const reelGroups: ReelGroup[] = [
  {
    id: "action",
    label: "Action & Combat",
    videos: [
      { title: "Action Reel", kind: "Reel", vimeoId: "1245495572" },
      { title: "Action Acting & Combat Skills (Previs)", kind: "Scene", vimeoId: "1245910133" },
    ],
  },
  {
    id: "drama",
    label: "Drama",
    videos: [
      { title: "Dramatic Reel", kind: "Reel", vimeoId: "1245500333" },
      { title: "Silent Dramatic Scene (Psychological Thriller)", kind: "Scene" },
      { title: "Dramatic Scene (Psychological War Drama)", kind: "Scene", vimeoId: "1247374309" },
      { title: "Cinematic Scene (Historical Drama)", kind: "Scene", vimeoId: "1247385772" },
      { title: "English Monologue", kind: "Coming December", soon: true },
    ],
  },
  {
    id: "comedy",
    label: "Comedy & Character",
    videos: [
      { title: "Comedy & Character Showreel", kind: "Reel", vimeoId: "1247387705" },
      { title: "«The Very Same Munchhausen» Scene", kind: "Scene", vimeoId: "1167721909" },
    ],
  },
  {
    id: "commercial",
    label: "Commercial",
    videos: [{ title: "Commercial & Character Reel", kind: "Reel", vimeoId: "1245502984" }],
  },
];

export type Photo = { label: string; src: string; thumb: string; position?: string; alt?: string };

function photo(slug: string, label: string, position?: string): Photo {
  const dir = `/images/gallery/${slug}`;
  return { label, src: `${dir}/full.webp`, thumb: `${dir}/thumb.webp`, position };
}

export const gallery: Photo[] = [
  photo("casual-cafe", "Casual · Café"),
  photo("tactical-vest", "Tactical"),
  photo("business-suit", "Business Suit"),
  photo("noir-suit", "Noir · Suit"),
  photo("action-cave", "Action · Cave", "35% 40%"),
  photo("period-uniform", "Period · Uniform", "45% 30%"),
  photo("character-window", "Character · Window"),
  photo("desert-coverall", "Desert · Coverall"),
  photo("comedy-grimace", "Comedy · Character", "38% 50%"),
  photo("athletic-shirtless", "Athletic"),
  photo("character-tank-top", "Character · Tank Top"),
  photo("period-soldier", "Period · Soldier"),
  photo("gym-hoodie", "Gym"),
  photo("casual-cap", "Casual · Cap"),
];

export type Credit = { project: string; original?: string; role: string; note?: string };
export type CreditSection = {
  id: string;
  title: string;
  columns: [string, string, string];
  rows: Credit[];
};

export const creditSections: CreditSection[] = [
  {
    id: "film",
    title: "Selected Film & Television",
    columns: ["Project", "Role", "Director / Production"],
    rows: [
      { project: "More Than Everything", original: "(Понад усе)", role: "Lead Actor («Andrew»)", note: "Dir. Sergey Shlyakhtyuk (Pitch Trailer)" },
      { project: "The Rising Hawk", original: "(Захар Беркут)", role: "Action Actor (Warrior) / MoCap («The Bear»)", note: "Dir. John Wynn, Akhtem Seitablaev" },
      { project: "Dovbush", original: "(Довбуш)", role: "Action Actor", note: "Dir. Oles Sanin" },
      { project: "Polina", original: "(Полина)", role: "MoCap Actor («Giant Creature»)", note: "Dir. Olias Barco" },
      { project: "The Stronghold", original: "(Сторожевая Застава)", role: "Supporting («Alex»)", note: "Kinorob / Ukrainian Film" },
      { project: "The Mission: Chapter 1", role: "Antagonist («Andrew»)", note: "Maitree Movies (India)" },
      { project: "Toxic", role: "Action Actor", note: "Indian Production" },
      { project: "Tiger 3", role: "Action Talent", note: "Yash Raj Films (India)" },
      { project: "Demon (British Secret Agent)", role: "Action Actor", note: "Dir. Ramesh (India)" },
      { project: "Maname", role: "Antagonist (Kidnapper)", note: "Indian Production" },
      { project: "Devil", role: "Club Fighter", note: "Dir. Muhammed (India)" },
      { project: "The Ringer", original: "(Звонарь)", role: "Supporting («Shpala»)", note: "Ukrainian TV" },
      { project: "Cop on Call", original: "(Опер по вызову)", role: "Supporting («Medved»)", note: "Ukrainian TV" },
      { project: "The Dog", original: "(Пёс)", role: "Supporting («Sniper»)", note: "Ukrainian TV" },
      { project: "25th Hour", original: "(25-й час)", role: "Supporting («Crazy»)", note: "Ukrainian TV" },
      { project: "Crime in Focus", original: "(Преступление в фокусе)", role: "Supporting («Pulya»)", note: "Ukrainian TV" },
    ],
  },
  {
    id: "ads",
    title: "Selected Commercials",
    columns: ["Brand", "Role", "Campaign"],
    rows: [
      { project: "Kinder Bueno", role: "Lead Actor (Comedic)", note: "Commercial Campaign" },
      { project: "Gillette", role: "Lead Actor", note: "Global Campaign" },
      { project: "Nemiroff", role: "Action Actor", note: "Commercial Campaign" },
      { project: "Ubisoft", role: "MoCap / Action Performer", note: "Promotional Campaign" },
      { project: "Stimorol (France)", role: "Lead Actor (Athlete)", note: "Commercial Campaign" },
      { project: "Ice Commander", role: "Lead Actor", note: "Commercial Campaign" },
      { project: "Pari Match", role: "Action Talent", note: "Commercial Campaign" },
    ],
  },
  {
    id: "music",
    title: "Music Videos",
    columns: ["Artist", "Role", "Note"],
    rows: [
      { project: "Editors", role: "Supporting (Police Officer)", note: "UK Music Video" },
      { project: "DJ Shadow", role: "Supporting Actor", note: "Music Video" },
      { project: "Alan Badoev Production", role: "Lead Actor", note: "Music Video" },
      { project: "Evgenia Scarlet", role: "Lead Actor", note: "Music Video" },
      { project: "Anna Butkevich", role: "Lead Actor", note: "Music Video" },
    ],
  },
  {
    id: "theatre",
    title: "Theatre & Live Performance",
    columns: ["Project", "Role", "Note"],
    rows: [
      { project: "Vecherniy Kvartal", original: "(Studio Kvartal 95)", role: "Supporting (Bodyguard to Volodymyr Zelenskyy)", note: "Live Televised Stage Show" },
      { project: "Münchhausen", role: "Actor & Co-Director", note: "Theatrical Scene (English Subtitles)" },
    ],
  },
  {
    id: "edu",
    title: "Education & Training",
    columns: ["Institution", "Program", "Location"],
    rows: [{ project: "Prime Media Acting School", role: "Acting for Film & Theatre", note: "Kyiv, Ukraine" }],
  },
];

export const specialSkills = [
  { group: "Martial Arts & Weapons", items: "Traditional Japanese Karate, Nunchaku (Expert), Bo Staff, Katana, Tactical Firearms, Knife Combat." },
  { group: "Performance", items: "Action Scene Choreography, Wirework, Motion Capture (MoCap), Precision Driving, Physical Comedy, Eccentric Character Acting." },
  { group: "Athletics", items: "Weightlifting, Cycling, High-level general fitness and endurance." },
];
