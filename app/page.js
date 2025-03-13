import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import Resume from "@/components/Resume/Resume";
import Projects from "@/components/Projects/Projects";
import DigitCanvas from "@/components/Canvas/DigitCanvas";

export default function Home() {
  return (
    <>
      <Hero />
      <Resume />
      <Projects />
      <DigitCanvas></DigitCanvas>
    </>
  );
}
