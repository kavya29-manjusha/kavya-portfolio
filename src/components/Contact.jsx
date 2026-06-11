import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "120px 10%",
        background: "#070B1A",
        color: "white",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND GLOW */}
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background: "rgba(79,70,229,0.25)",
          filter: "blur(120px)",
          top: "-100px",
          left: "-100px",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background: "rgba(59,130,246,0.2)",
          filter: "blur(120px)",
          bottom: "-120px",
          right: "-120px",
        }}
      />

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        style={{
          fontSize: "2.8rem",
          marginBottom: "10px",
        }}
      >
        Let’s Connect 🚀
      </motion.h1>

      <p style={{ color: "#94A3B8", marginBottom: "50px" }}>
        I’m always open to internships, collaborations & AI/ML projects
      </p>

      {/* CONTACT CARDS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {/* EMAIL */}
        <motion.a
          href="mailto:adireddikavyamanjusha@gmail.com"
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 25px rgba(79,70,229,0.5)",
          }}
          style={cardStyle}
        >
          <div style={iconStyle}>📧</div>
          <h3>Email</h3>
          <p style={textStyle}>Send me a message</p>
        </motion.a>

        {/* LINKEDIN */}
        <motion.a
          href="https://www.linkedin.com/in/kavya-manjusha-adireddi-7a4926323/"
          target="_blank"
          rel="noreferrer"
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 25px rgba(59,130,246,0.5)",
          }}
          style={cardStyle}
        >
          <div style={iconStyle}>💼</div>
          <h3>LinkedIn</h3>
          <p style={textStyle}>Connect professionally</p>
        </motion.a>

        {/* GITHUB */}
        <motion.a
          href="https://github.com/kavya29-manjusha"
          target="_blank"
          rel="noreferrer"
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 25px rgba(16,185,129,0.4)",
          }}
          style={cardStyle}
        >
          <div style={iconStyle}>💻</div>
          <h3>GitHub</h3>
          <p style={textStyle}>View my projects</p>
        </motion.a>
      </div>
    </section>
  );
}

const cardStyle = {
  background: "rgba(30,41,59,0.6)",
  backdropFilter: "blur(10px)",
  padding: "25px",
  borderRadius: "16px",
  width: "240px",
  textDecoration: "none",
  color: "white",
  border: "1px solid rgba(255,255,255,0.08)",
};

const iconStyle = {
  fontSize: "30px",
  marginBottom: "10px",
};

const textStyle = {
  fontSize: "13px",
  color: "#94A3B8",
  marginTop: "5px",
};

export default Contact;