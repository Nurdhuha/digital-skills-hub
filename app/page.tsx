import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { About } from "@/components/landing/about";
import { Community } from "@/components/landing/community";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <About />
      <Community />
    </div>
  );
}
