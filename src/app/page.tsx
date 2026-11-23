import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Profile } from "@/components/sections/Profile";

export default function Home() {
  return (
    <div id="top" className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Profile />
      </main>
    </div>
  );
}
