import { motion } from "framer-motion";

function About() {
  const items = [
    "🎓 CSIT Graduate",
    "🤖 AI/ML Enthusiast",
    "🐍 Python Developer",
    "📊 Data Science Learner",
  ];

  return (
    <section
      id="about"
      style={{
        padding: "100px 10%",
        background: "#0F172A",
        color: "white",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ fontSize: "2.5rem", marginBottom: "20px" }}
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: "800px",
          lineHeight: "1.8",
          color: "#CBD5E1",
          fontSize: "18px",
        }}
      >
        I am a passionate AI/ML Engineer and Python Developer who loves
        building intelligent systems, machine learning models, and real-world
        applications that solve meaningful problems.
      </motion.p>

      {/* MOVING CARDS */}
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            style={{
              background: "#1E293B",
              padding: "12px 18px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default About;