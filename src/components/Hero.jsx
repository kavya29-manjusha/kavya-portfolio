import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <section className="hero">

      {/* BACKGROUND GLOW */}
      <div className="glow g1"></div>
      <div className="glow g2"></div>

      <div className="container">

        {/* LEFT TEXT */}
        <div className="text">

          <p className="tag">🚀 AI • ML • Python Developer</p>

          <h1 className="title">
            Building Intelligent <span>AI Systems</span>
          </h1>

          <h2 className="typed">
            <ReactTyped
              strings={[
                "AI/ML Engineer",
                "Python Developer",
                "Data Scientist",
              ]}
              typeSpeed={60}
              backSpeed={30}
              loop
            />
          </h2>

          <p className="desc">
            I design and build intelligent systems using Machine Learning,
            Python, and Data Science to solve real-world problems and automate workflows.
          </p>

          {/* BUTTONS */}
          <div className="buttons">
            <a
              className="btn"
              href="/Kavya_Manjusha.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
            <a
              className="btn outline"
              href="/Kavya_Manjusha.pdf"
              download="Kavya_Manjusha_Resume.pdf"
            >
              Download Resume
            </a>
            <a className="btn outline" href="#projects">
              View Projects
            </a>

          </div>

          {/* SOCIAL */}
          <div className="social">

            <a href="https://github.com/kavya29-manjusha">
              <FaGithub size={26} />
            </a>

            <a href="https://linkedin.com">
              <FaLinkedin size={26} color="#0A66C2" />
            </a>

          </div>

        </div>

      </div>

      {/* STYLE */}
      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background: #070B1A;
          color: white;
          padding: 0 8%;
        }

        /* GLOW BACKGROUND */
        .glow {
          position: absolute;
          width: 450px;
          height: 450px;
          filter: blur(150px);
          opacity: 0.35;
        }

        .g1 {
          background: #4f46e5;
          top: -120px;
          left: -120px;
        }

        .g2 {
          background: #22c55e;
          bottom: -120px;
          right: -120px;
        }

        .container {
          max-width: 1000px;
          width: 100%;
          z-index: 2;
        }

        .text {
          max-width: 650px;
        }

        .tag {
          color: #94a3b8;
          font-size: 14px;
          letter-spacing: 1px;
        }

        .title {
          font-size: 3.3rem;
          margin: 10px 0;
          font-weight: 800;
          line-height: 1.2;
        }

        .title span {
          background: linear-gradient(90deg, #60a5fa, #a78bfa, #22c55e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .typed {
          font-size: 22px;
          color: #60a5fa;
          min-height: 40px;
          margin-top: 5px;
        }

        .desc {
          color: #cbd5e1;
          margin-top: 15px;
          line-height: 1.7;
        }

        /* BUTTONS */
        .buttons {
          margin-top: 25px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 12px 18px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
          transition: 0.3s;
        }

        .primary {
          background: linear-gradient(45deg, #4f46e5, #06b6d4);
          color: white;
          box-shadow: 0 0 20px rgba(79,70,229,0.4);
        }

        .primary:hover {
          transform: translateY(-3px);
        }

        .outline {
          border: 1px solid #60a5fa;
          color: white;
        }

        .outline:hover {
          background: rgba(96,165,250,0.1);
        }

        /* SOCIAL */
        .social {
          margin-top: 20px;
          display: flex;
          gap: 18px;
        }
      `}</style>

    </section>
  );
}

export default Hero;