import Hero from "@/components/Hero/Hero";
import Resume from "@/components/Resume/Resume";
import Projects from "@/components/Projects/ProjectsCard";
import DigitCanvas from "@/components/Canvas/DigitCanvas";
import Feedback from "@/components/feedback/feedback";

export default function Home() {
  return (
    <>
      <Hero />
      <Resume />
      <Projects />
      <DigitCanvas />
      <Feedback />
    </>
  );
}
