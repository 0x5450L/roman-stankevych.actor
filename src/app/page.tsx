import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Profile } from "@/components/sections/Profile";
import { Reels } from "@/components/sections/Reels";

export default function Home() {
  return (
    <div id="top" className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Profile />
        <Reels />
      </main>
    </div>
  );
}
