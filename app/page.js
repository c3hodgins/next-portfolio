"use client";
import styles from "./page.module.css";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Resume from "@/components/Resume/Resume";
import Projects from "@/components/Projects/Projects";
import DigitCanvas from "@/components/Canvas/DigitCanvas";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);
  const demoRef = useRef(null);

  const handleSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth", // Adds smooth scrolling
      block: "start", // Scroll to the top of the section
    });
  };

  const sections = ["About", "Resume","Projects","Demo"];

  return (
    <>
      <div ref={heroRef} className="app">
        <Navbar
          refs={[heroRef, resumeRef, projectsRef, demoRef]}
          handleSection={handleSection}
          sections={sections}
        />
        <div className="main">
          <Hero />
          <div ref={resumeRef}>
            <Resume />
          </div>
            <Projects ref = {projectsRef}/>
          <div ref={demoRef}>
            <DigitCanvas />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
