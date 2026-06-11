import { motion } from "framer-motion";

function Achievements() {
  const achievements = [
    {
      title: "Best Intern of the Month",
      desc: "Recognized for outstanding performance and contribution at ACC EdTech.",
      icon: "🏆",
    },
    {
      title: "AI/ML Project Completion",
      desc: "Built multiple machine learning projects including recommendation system and prediction models.",
      icon: "🤖",
    },
    {
      title: "Data Science Certification",
      desc: "Completed Data Science course covering ML, statistics, and data preprocessing.",
      icon: "📊",
    },
    {
      title: "Full Stack Project Experience",
      desc: "Developed React + Spring Boot applications with real-world functionality.",
      icon: "💻",
    },
  ];

  return (
    <section
      id="achievements"
      style={{
        padding: "100px 10%",
        background: "#070B1A",
        color: "white",
      }}
    >
      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        style={{
          fontSize: "2.5rem",
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        Achievements
      </motion.h1>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(79,70,229,0.4)",
            }}
            style={{
              background: "#1E293B",
              padding: "25px",
              borderRadius: "15px",
              cursor: "pointer",
            }}
          >
            {/* ICON */}
            <div style={{ fontSize: "30px", marginBottom: "10px" }}>
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 style={{ marginBottom: "10px" }}>{item.title}</h3>

            {/* DESCRIPTION */}
            <p
              style={{
                color: "#CBD5E1",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;