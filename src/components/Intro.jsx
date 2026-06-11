import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { useCallback, useRef } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

import aiImage from "../assets/ai.png"; // 👈 add an AI/robot image here

function Intro({ onEnter }) {
  const audioRef = useRef(null);

  const handleEnter = () => {
    if (audioRef.current) audioRef.current.play();
    setTimeout(() => onEnter(), 600);
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section className="intro">

      {/* PARTICLES (LIGHT) */}
      <Particles
        className="particles"
        init={particlesInit}
        options={{
          background: { color: "#070B1A" },
          particles: {
            number: { value: 35 },   // reduced (important)
            color: { value: "#60a5fa" },
            opacity: { value: 0.2 },
            size: { value: 2 },
            move: { enable: true, speed: 0.4 },
            links: { enable: true, color: "#4f46e5", opacity: 0.1 },
          },
        }}
      />

      <audio ref={audioRef} src="/click.mp3" />

      {/* CONTENT */}
      <div className="container">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text"
        >
          <p className="tag">WELCOME TO MY PORTFOLIO</p>

          <h1 className="title">
            <ReactTyped
              strings={[
                "I Am",
                "Kavya Manjusha",
              ]}
              typeSpeed={60}
              backSpeed={30}
              loop
            />
          </h1>

          <p className="subtitle">
            I build intelligent systems, AI models, and real-world solutions.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn"
            onClick={handleEnter}
          >
            Enter Portfolio →
          </motion.button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="imageBox"
        >
          <img src={aiImage} alt="AI" />
        </motion.div>

      </div>

      {/* STYLE */}
      <style>{`
        .intro {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #070B1A;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .particles {
          position: absolute;
          inset: 0;
        }

        .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 1100px;
          z-index: 2;
          flex-wrap: wrap;
          padding: 0 5%;
        }

        .text {
          flex: 1;
          min-width: 280px;
        }

        .tag {
          font-size: 12px;
          letter-spacing: 3px;
          color: #94a3b8;
        }

        .title {
          font-size: 2.8rem;
          margin: 15px 0;
          color: #60a5fa;
        }

        .subtitle {
          color: #cbd5e1;
          margin-bottom: 20px;
          max-width: 400px;
        }

        .btn {
          padding: 12px 20px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          font-weight: bold;
          color: white;
          background: #4f46e5;
        }

        .imageBox {
          flex: 1;
          display: flex;
          justify-content: center;
          min-width: 280px;
        }

        .imageBox img {
          width: 280px;
          max-width: 100%;
          filter: drop-shadow(0 0 20px rgba(79,70,229,0.4));
        }
      `}</style>
    </section>
  );
}

export default Intro;