import { useRef, useState } from "react";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import ScrollManager from "./components/ScrollManager";

function App() {
  const [entered, setEntered] = useState(false);
  const heroRef = useRef(null);

  // 🎬 Smooth cinematic transition
  const handleEnter = () => {
    setEntered(true);

    setTimeout(() => {
      heroRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 600); // delay = cinematic feel
  };

  return (
    <div style={{ background: "#070B1A" }}>
      {/* CUSTOM CURSOR */}
      <Cursor />
      <ScrollManager />
      {/* NAVBAR (only after enter feel still fine) */}
      <Navbar />

      {/* INTRO (ONLY FIRST SCREEN FEEL) */}
      {!entered && <Intro onEnter={handleEnter} />}

      {/* MAIN WEBSITE */}
      <main style={{ width: "100%", overflowX: "hidden" }}>
        {/* HERO TARGET */}
        <div ref={heroRef}>
          <Hero />
        </div>

        <About />
        <Skills />
        <Experience />
        <Education />
        <Certificates />
        <Achievements />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;