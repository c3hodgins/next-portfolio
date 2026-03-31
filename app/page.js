import Hero from "@/components/Hero/Hero";
import Resume from "@/components/Resume/Resume";
import Projects from "@/components/Projects/ProjectsCard";
import DigitCanvas from "@/components/Canvas/DigitCanvas";

export default function Home() {
  return (
    // 'flex flex-col' stacks sections vertically
    // 'gap-20' provides consistent white space between major sections
    <main className="flex flex-col gap-20 pb-20">
      
      {/* 1. Hero Section (Introduction) */}
      <Hero />

      {/* 2. Portfolio Content Sections */}
      {/* Using 'main-container' from your globals.css for consistent side padding */}
      <div className="main-container flex flex-col gap-24">
        <Resume />
        <Projects />
      </div>

      {/* 3. Interactive Background/Footer Component */}
      <DigitCanvas />

    </main>
  );
}
